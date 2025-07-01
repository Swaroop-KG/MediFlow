# 🏥 Hospital Management System (MERN Stack)

A full-featured hospital management system built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) with secure user roles for **Admins** and **Patients**. It supports real-time bed availability tracking, appointment booking, and efficient hospital administration.

---

## 🚀 Features

- 🛏️ **Bed Availability Tracking** – Real-time tracking of bed status (Available/Occupied).
- 📅 **Appointment Booking** – Patients can book and view doctor appointments.
- 🔐 **Secure Authentication** – Role-based login with JWT for Admin and Patient users.
- 🧑‍⚕️ **Admin Dashboard** – Manage doctors, beds, patients, and view appointment records.
- 👤 **Patient Panel** – Book appointments, view status, and access personal medical info.
- 🌐 **Responsive UI** – Clean, modern, and mobile-friendly design using React.js and Redux.

---

## 🛠️ Tech Stack

| Frontend | Backend | Database | Auth | State Management |
|----------|---------|----------|------|------------------|
| React.js | Node.js | MongoDB  | JWT  | Redux            |
           | Express | 


 ⚙️ Installation
🧰 Prerequisites
Make sure you have the following installed on your system:

Node.js

MongoDB

npm (Node Package Manager) or Yarn

🔧 Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/hospital-management-system.git
cd hospital-management-system
2. Install Dependencies for Backend
bash
Copy
Edit
cd server
npm install
3. Install Dependencies for Frontend
bash
Copy
Edit
cd ../client
npm install
4. Set Up Environment Variables
Create a .env file in the server/ directory with the following content:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Replace your_mongodb_connection_string and your_secret_key with your actual credentials.

▶️ Run the Application
5. Start the Backend Server
bash
Copy
Edit
cd server
npm run dev
6. Start the Frontend Application
bash
Copy
Edit
cd ../client
npm start
