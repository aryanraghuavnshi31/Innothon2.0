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
| Security         | VirusTotal API.              |
| UI/UX            | React.js                              |

---

## 🗂️ Project Structure
(digi-rakshak/
├── backend/

│   ├── app/


│   │   ├── assets/

│   │   ├── routes/

│   │   ├── services/


│   │   ├── utils/


│   │   └── __init__.py


│   ├── env_name/

│   │   ├── Include/


│   │   ├── Lib/

│   │   ├── Scripts/


│   │   └── pyvenv.cfg


│   ├── app.py

│   ├── run.py

│   └── requirements.txt
│
├── ml_models/

│   ├── training/

│   ├── models/

│   └── notebooks/
│
├── dashboard/  # React + Vite frontend

│   ├── backend/  # Optional bridge or API routing?

│   ├── node_modules/

│   ├── public/

│   ├── src/

│   │   ├── assets/

│   │   ├── components/

│   │   │   ├── Navbar.css

│   │   │   └── Navbar.jsx

│   │   ├── pages/

│   │   │   ├── About.jsx

│   │   │   ├── Home.jsx

│   │   │   ├── Services.jsx

│   │   │   └── Test.jsx

│   │   ├── App.jsx

│   │   ├── main.jsx

│   │   ├── App.css

│   │   └── index.css

│   ├── index.html

│   ├── vite.config.js

│   ├── package.json

│   ├── package-lock.json

│   └── README.md

│
├── extension/  # Browser extension

│   ├── .dist/

│   ├── digi_rakshas.png

│   ├── manifest.json

│   ├── popup.html

│   ├── popup.js

│   └── popup.css
│
└── docs/  # Documentation, if any
''')
This combines your Python backend, ML modules, React frontend, and browser extension into a clear monorepo-style structure.
---
---
## **🚀 Installation & Setup**


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

![WhatsApp Image 2025-05-11 at 07 39 29](https://github.com/user-attachments/assets/3c8462f1-42d2-4bea-a670-86ab1fa4d19c)

By default:

    backend_module01 runs on http://172.16.40.174:5000
    backend_module02 runs on http://127.0.0.1:5000

    3️⃣ Frontend Setup
Install dependencies and start the development server

cd ../frontend
npm install
npm run dev

---
Screenshorts
![WhatsApp Image 2025-05-11 at 07 39 51](https://github.com/user-attachments/assets/ca685bd1-d641-41d1-86d5-7436299b6f4f)


![WhatsApp Image 2025-05-11 at 07 39 51(1)](https://github.com/user-attachments/assets/aeda26d3-ca9f-4a1b-bfa1-022d8383fac2)


![WhatsApp Image 2025-05-11 at 07 39 51(2)](https://github.com/user-attachments/assets/4a929d07-a6b4-4f53-b50c-aa326e8f62a8)


![WhatsApp Image 2025-05-11 at 07 39 52](https://github.com/user-attachments/assets/93314e84-5f64-430d-b18f-620865711a32)


![WhatsApp Image 2025-05-11 at 07 39 52(1)](https://github.com/user-attachments/assets/9b6ce4e6-4e08-42ee-8b84-ba212aeede9d)


![WhatsApp Image 2025-05-11 at 07 44 23](https://github.com/user-attachments/assets/5e203a11-d0a0-486d-bb66-d693224478ef)



![WhatsApp Image 2025-05-11 at 07 46 59](https://github.com/user-attachments/assets/1d748878-9024-4736-9963-0630e20bae9d)


![WhatsApp Image 2025-05-11 at 08 55 42](https://github.com/user-attachments/assets/bcffb300-e6f4-4b6e-9178-aff47d2d7c60)


---

## 🏗️ Future Improvements.

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
---
👨‍💻 Author

Developed by

    1.Aryan Raghuvanshi
    2.Chitraxi Porwal
    3.Jayveer Singh Rathore
    4.Tanishq Singh


