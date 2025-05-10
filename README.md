Digi रक्षक (Rakshak): Real-Time AI-Based Email Threat Detection System  which automatically scans incoming emails for phishing, spam, and malicious content without requiring manual input from the user. Operating seamlessly in the background, Digi Rakshak presents actionable insights through an intuitive dashboard, empowering users to stay protected with minimal effort.

 Unique Selling Propositions (USPs)

Real-Time & Autonomous
No manual input required; continuously scans emails with immediate detection and alerts.

Explainable AI
Users can see the reason behind flagged emails, enhancing trust and understanding.

Offline & Secure
Operates locally after training to protect privacy; no data leaves the user’s device.

Multi-Platform Integration
Compatible with Gmail, Outlook, and Yahoo accounts for extensive coverage.

Project Structure 
├── 📁 backend
│   ├── 📁 email_client
│   │   ├── fetch_emails.py
│   │   ├── send_alerts.py
│   │   └── config.py
│   ├── 📁 threat_detection
│   │   ├── model_inference.py
│   │   ├── preprocess.py
│   │   └── explainability.py
│   └── requirements.txt
│
├── 📁 ml_models
│   ├── training
│   │   ├── train_model.py
│   │   ├── dataset_preprocessing.py
│   │   └── feature_extraction.py
│   ├── models
│   │   ├── phishing_model.pkl
│   │   └── vectorizer.pkl
│   └── notebooks
│       └── exploratory_analysis.ipynb
│
├── 📁 dashboard
│   ├── 📁 public
│   ├── 📁 src
│   │   ├── 📁 components
│   │   ├── 📁 pages
│   │   ├── App.jsx
│   │   └── main.js
│   ├── package.json
│   └── electron.js
│
├── 📁 assets
│   ├── icons/
│   ├── animations/
│   └── styles/
│
├── 📁 utils
│   ├── logger.py
│   ├── constants.py
│   └── helpers.py
│
├── 📁 docs
│   ├── architecture_diagram.png
│   ├── readme.md
│   ├── project_plan.md
│   └── api_reference.md
│
├── 📁 security
│   ├── pattern_library.json
│   ├── robustness_tests.py
│   └── api_integration.py
│
├── 📄 README.md
├── 📄 .env.example
├── 📄 .gitignore
└── 📄 setup.py

🛠️ Tech Stack

 
