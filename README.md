# 🛠 Equipment Tracker

A full-stack web application to manage and track equipment efficiently.  
Built using **React** (frontend) and **Node.js + Express** (backend) with a JSON file as the database.

---

## 🌟 Features

- View a list of equipment in a table  
- Add new equipment  
- Edit existing equipment  
- Delete equipment  
- Form validation to prevent empty submissions  
- Status color coding: Active (green), Inactive (red), Under Maintenance (yellow)  
- Clean and professional UI with badges for statuses  
- Search, filter, and sort functionality  

---

## 💻 Tech Stack

- **Frontend:** React, HTML, CSS  
- **Backend:** Node.js, Express  
- **Database:** JSON file (`equipment.json`)  

---

## 📂 Project Structure
frontend/
|----App.js
├── App.css
├── index.js
├── index.css
├── api.js
├── EquipmentForm.js
└── EquipmentTable.js
backend/
├── server.js
└── equipment.json

## Clone the repository
```bash
git clone https://github.com/iamkeerthid/equipment-tracker.git
cd equipment-tracker

## Start Backend
cd backend
npm install
node server.js
Backend runs at: http://localhost:5000

## Start Frontend
cd frontend
npm install
npm start
Frontend runs at: http://localhost:3000 (or another port if 3000 is busy)
