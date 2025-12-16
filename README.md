 📩 AI BulkSMS Shield

AI BulkSMS Shield is an AI-powered application that analyzes SMS messages to detect **spam, phishing, and malicious content** using **Google Vertex AI (Gemini)**.
It is designed for businesses, telecom providers, fintechs, and regulators who want to **protect users from SMS fraud and scams**.


  Problem Statement

SMS fraud and phishing attacks (e.g. fake M-Pesa alerts, malicious links, impersonation messages) are increasingly common.
Most systems rely on **static rules** or blacklists, which are slow to adapt to new scam patterns.

---

 Solution

AI BulkSMS Shield uses **Google Gemini (via Vertex AI)** to intelligently analyze SMS content in real time and:

* Detect phishing, scam, or malicious intent
* Explain *why* a message is risky
* Adapt to new scam patterns without manual rules

---

How It Works (Simple Explanation)

1. A user pastes an SMS message into the app
2. The message is sent to **Gemini 2.5 Flash** via **Vertex AI**
3. The AI analyzes the message’s language, intent, and patterns
4. The app returns:

   * Risk analysis (safe / suspicious / malicious)
   * Reasoning behind the decision

---

 Technologies Used

* **Google Vertex AI**
* **Gemini 2.5 Flash model**
* **Google GenAI Python SDK**
* **Streamlit** (UI)
* **Python 3.12**
* **Google Cloud Shell**

---

Project Structure

```
ai-bulksms-shield/
│
├── backend/
│   ├── app.py              # Main Streamlit application
│   ├── requirements.txt   # Python dependencies
│   └── .venv/              # Virtual environment (local)
│
├── README.md
└── demo.mp4 
```

---

 Setup & Running the Project (From Scratch)

 Open Google Cloud Shell

1 Make sure you are logged into your Google Cloud account.

---

2️⃣ Set the Correct Project

```bash
gcloud config set project aiagent-478816
```

Verify:

```bash
gcloud config get-value project
```

---

 3️⃣ Enable Vertex AI API

```bash
gcloud services enable aiplatform.googleapis.com
```

---

 4️⃣ Clone the Repository

```bash
git clone https://github.com/Joankurui/ai-bulksms-shield.git
cd ai-bulksms-shield/backend
```

---

 5️⃣ Create and Activate Virtual Environment

```bash
uv venv --python 3.12
source .venv/bin/activate
```

---

 6️⃣ Install Dependencies

```bash
uv pip install -r requirements.txt
```

---
 7️⃣ Run the Application

```bash
streamlit run app.py \
  --browser.serverAddress=localhost \
  --server.enableCORS=false \
  --server.enableXsrfProtection=false \
  --server.port 8080
```

Cloud Shell will provide a **preview URL**. Open it to use the app.

---

 Example SMS for Testing

```
Your M-Pesa account is locked.
Click here immediately to secure your account:
http://mpesa-secure45.com
```

The AI will analyze and flag it as **phishing** with an explanation.

---

 Security & Permissions Notes

* The app uses **Cloud Shell default service account**
* Requires **Vertex AI User** permissions
* No API keys are hardcoded
* Authentication is handled securely by Google Cloud

---

 Impact & Use Cases

* Telecom companies (SMS filtering)
* Fintech & mobile money providers
* Cybersecurity monitoring
* Government & regulators
* Bulk SMS platforms

---

 Future Enhancements

* Bulk SMS file upload (CSV)
* Confidence scoring
* Automatic blocking recommendations
* Integration with SMS gateways
* Logging & analytics dashboard

---

 Author

**Name:** Joan Kurui
**Email:** [joanjebiwot53@gmail.com](mail to:joanjebiwot53@gmail.com)
**Google Developer Profile:https://console.cloud.google.com/welcome?project=aiagent-478816




