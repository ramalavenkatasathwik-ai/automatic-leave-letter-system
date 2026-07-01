# automatic-leave-letter-system
Automatic Leave Letter System using Google Forms, Google Sheets, Google Apps Script, and Gmail.
# 📄 Automatic Leave Letter System

An automated leave letter generation system built using **Google Forms**, **Google Sheets**, **Google Apps Script**, and **Gmail**.

---

## 🚀 Features

- Collects student leave requests through Google Forms
- Stores responses automatically in Google Sheets
- Generates a professional leave application
- Sends the leave letter automatically via Gmail
- No manual work required after setup

---

## 🛠️ Technologies Used

- Google Forms
- Google Sheets
- Google Apps Script
- Gmail

---

## 📋 Google Form Fields

- Name
- Gmail
- Department
- College
- Leave Start Date
- Leave End Date
- Reason for Leave

---

## 🔄 Workflow

```text
Student
   │
   ▼
Google Form
   │
   ▼
Google Sheet
   │
   ▼
Apps Script Trigger
   │
   ▼
Generate Leave Letter
   │
   ▼
Send Email
   │
   ▼
Student Receives Email
```

---

## 📂 Project Structure

```
automatic-leave-letter-system/
│
├── README.md
├── LICENSE
├── .gitignore
│
├── apps-script/
│   └── Code.gs
│
├── docs/
├── screenshots/
├── sample-output/
└── assets/
```

---

## ⚙️ Installation

1. Create a Google Form.
2. Link it to Google Sheets.
3. Open **Extensions → Apps Script**.
4. Paste the `Code.gs` script.
5. Create an **On Form Submit** trigger.
6. Submit the form to test the automation.

---

## 👨‍💻 Author

**Ramala Venkata Sathwik**

---

## 📄 License

This project is licensed under the MIT License.
