import imaplib
import email
from email.header import decode_header
import time
import pickle
import re
from plyer import notification
from sklearn.feature_extraction.text import TfidfVectorizer
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

EMAIL = os.getenv("EMAIL")
PASSWORD = os.getenv("PASSWORD")
IMAP_SERVER = os.getenv("IMAP_SERVER", "imap.gmail.com")
IMAP_PORT = int(os.getenv("IMAP_PORT", 993))

# Load the same model and vectorizer used in Colab
with open("model.pkl", "rb") as mf:
    model = pickle.load(mf)
with open("vectorizer.pkl", "rb") as vf:
    vectorizer = pickle.load(vf)

def clean_text(text):
    text = re.sub(r"<.*?>", "", text)  # Remove HTML
    text = re.sub(r"http\S+", "", text)  # Remove URLs
    return text.lower()

def notify_threat(subject, sender):
    notification.notify(
        title="🚨 CyberYodha Alert: Threat Detected",
        message=f"Email from {sender} - Subject: {subject}",
        timeout=10
    )

def fetch_unseen_emails():
    mail = imaplib.IMAP4_SSL(IMAP_SERVER)
    mail.login(EMAIL, PASSWORD)
    mail.select("inbox")

    status, messages = mail.search(None, 'UNSEEN')
    if status != "OK":
        print("No new emails.")
        return

    for num in messages[0].split():
        _, data = mail.fetch(num, '(RFC822)')
        raw_email = data[0][1]
        msg = email.message_from_bytes(raw_email)

        subject, encoding = decode_header(msg["Subject"])[0]
        if isinstance(subject, bytes):
            subject = subject.decode(encoding if encoding else 'utf-8')
        sender = msg.get("From")

        # Extract body
        body = ""
        if msg.is_multipart():
            for part in msg.walk():
                if part.get_content_type() == "text/plain":
                    try:
                        body = part.get_payload(decode=True).decode()
                        break
                    except:
                        continue
        else:
            body = msg.get_payload(decode=True).decode()

        # Clean and vectorize
        full_text = clean_text(subject + " " + body)
        X = vectorizer.transform([full_text])
        prediction = model.predict(X)[0]

        if prediction == 1:
            notify_threat(subject, sender)

    mail.logout()

if __name__ == "__main__":
    while True:
        try:
            fetch_unseen_emails()
        except Exception as e:
            print(f"Error: {e}")
        time.sleep(30)
