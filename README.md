# Digi रक्षक (Rakshak)

**Real-Time AI-Based Email Threat Detection System**

Digi रक्षक (Rakshak) is a privacy-focused desktop application that automatically scans incoming emails for phishing, spam, and malicious content—without requiring any manual input. Running silently in the background, it provides real-time protection and explains threats through a clean, intuitive dashboard..

---

## 🚀 Features & Unique Selling Propositions (USPs)

- ✅ **Real-Time & Autonomous**  
  Continuously scans all incoming emails and generates immediate alerts—no manual action required.

- 🔍 **Explainable AI**  
  Clearly displays why an email was flagged using model-driven reasoning, building user trust.

- 🔐 **Offline & Secure**  
  The system runs entirely on the user’s machine after initial training; no data is sent to the cloud.

- ✉️ **Multi-Platform Integration**  
  Works with Gmail, Outlook, and Yahoo accounts seamlessly.

---

## 🧠 Tech Stack

| Layer            | Technologies Used                                      |
|------------------|--------------------------------------------------------|
| Language         | Python, JavaScript                                     |
| ML/NLP           | Scikit-learn, BERT, Transformers, Pandas, NLTK         |
| Backend          | IMAP/SMTP, Email Parser, Python scripts                |
| Frontend         | Electron.js, React.js                                  |
| Security         | VirusTotal API, Google Safe Browsing API               |
| UI/UX            | Figma, Lottie, Three.js                                |

---

## 🗂️ Project Structure
(digi-rakshak/

├── backend/




│   ├── email_client/

│   └── threat_detection/


├── ml_models/

│   
 ├── training/
│  
 └── models/

	
│   
   └── notebooks			
			├── dashboard/

│   └── src/

├── assets/

├── security/

├── utils/

├── docs/

├── .env.example
├── README.md
└── setup.py
''')

🚀 Installation & Setup


1️⃣ Clone the Repository



![Screenshot 2025-05-10 234255](https://github.com/user-attachments/assets/cf81c819-6455-45f7-9d3d-935de6e76416)

2️⃣ Backend Setup

Install dependencies for both Flask modules


![Screenshot 2025-05-10 235145](https://github.com/user-attachments/assets/8191d7c0-6be8-4db1-9883-0eea62db80bc)

3️⃣ ML Model Setup (Optional if models are not pre-trained)

Train the model (only if not using pre-trained):


![Screenshot 2025-05-10 235318](https://github.com/user-attachments/assets/89fe16fe-b9b5-4985-aa80-bac78622c4e0)

Place trained models in:

![Screenshot 2025-05-10 235428](https://github.com/user-attachments/assets/9cb900c6-31a4-4231-8a96-b35b0fa9eb83)

4️⃣ Frontend Setup (Dashboard UI)

Install dependencies and run the dashboard:

![Screenshot 2025-05-10 235544](https://github.com/user-attachments/assets/c3e71b01-984a-47e4-aa15-a388b77e02f1)

Frontend runs by default on:


![Screenshot 2025-05-10 235620](https://github.com/user-attachments/assets/0162e421-860a-49c9-9f1f-53d6e8b18aba)

It provides real-time alerts and a visual summary from backend modules.


🏗️ Future Improvements

Here are planned enhancements to expand Digi रक्षक's functionality and security coverage:

    🧠 Image-Based Phishing Detection
Integrate OCR (Optical Character Recognition) to detect threats hidden in embedded images (e.g., QR code scams, screenshot phishing).

🔗 Cross-Platform Messaging Analysis
Extend AI threat detection to messaging platforms like WhatsApp, Telegram, and Slack by scanning links and shared content.

🌐 Browser Extension
Develop a browser plugin for Chrome/Edge that scans emails viewed in web clients and warns in real-time.

🧩 Plugin API for Enterprise Systems
Enable organizations to integrate Digi रक्षक with their internal email servers and monitoring systems via a plugin-based architecture.

🔄 Auto-Model Updates
Periodic offline model retraining using anonymized user-approved feedback to adapt to evolving phishing techniques.

👨‍💻 Author

Developed by

    1.Aryan Raghuvanshi
    2.Chitraxi Porwal
    3.Jayveer Singh Rathore
    4.Tanishq Singh


