
# 🎥 Livestream Player App — Full Stack Developer Task

## 📋 Overview
This project allows users to **view a livestream video** from a given **RTSP URL** and manage **custom overlays** (like text or logos) on top of the video.  
It fulfills all requirements mentioned in the assignment.

---

## 🚀 Features

### 🌐 Landing Page
- Displays a live video stream via an RTSP URL.
- Simple interface with a video player and play/pause controls.

### 🧩 Overlay Options
- Add, position, and resize text or logo overlays on the livestream.
- Update overlay content in real time.

### ⚙️ CRUD API for Overlays & Settings
- **Create** → Add custom overlay (position, size, content).  
- **Read** → Fetch all overlays for the video stream.  
- **Update** → Modify overlay settings.  
- **Delete** → Remove unwanted overlays.

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React.js (Vercel Deployment) |
| Backend | Python (Flask) |
| Database | MongoDB |
| Video Stream | RTSP Compatible Player |

---

## 🌍 Live Links

- 🖥️ **Frontend (React App):**  
  👉 [https://livestream-frontend-avanish.vercel.app](https://livestream-frontend-avanish.vercel.app)

- ⚙️ **Backend (Flask API):**  
  👉 [https://livestream-backend-avanish.onrender.com](https://livestream-backend-avanish.onrender.com)

---

## 📦 API Documentation
The backend provides endpoints for overlay management:

| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/api/overlays` | Create a new overlay |
| GET | `/api/overlays` | Retrieve all overlays |
| PUT | `/api/overlays/:id` | Update an overlay |
| DELETE | `/api/overlays/:id` | Delete an overlay |

---

## 📘 Setup Guide
1. Clone this repo:
   ```bash
   git clone https://github.com/avanish3s/livestream-frontend-avanish.git
Install dependencies
npm install
Start the app:
npm start
Open http://localhost:3000
 in browser.


 .

👤 Author

Avanish Kumar
📧 Email: avanish0300@gmail.com

💻 Domain: Full Stack Web Development
