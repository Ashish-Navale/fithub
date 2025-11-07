# FitHub - Fitness Management Platform

FitHub is a full-stack fitness management application designed to manage trainers, plans, memberships, and user interactions efficiently. It includes an admin dashboard for real-time statistics and analytics. This project is built using **MERN stack** with RESTful APIs, JWT authentication, and MongoDB for database management.

---

## **Table of Contents**
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Admin Access](#admin-access)
- [API Endpoints](#api-endpoints)
- [Frontend Screenshots](#frontend-screenshots)
- [License](#license)

---

## **Features**
- User authentication and role-based access (Admin / Member)
- Admin Dashboard with:
  - Total trainers, plans, memberships
  - Active membership stats
  - Memberships per plan chart
- Manage Trainers, Plans, Memberships, Contacts
- Responsive UI using React and Tailwind CSS
- REST API with Express.js
- MongoDB database with relationships between Memberships and Plans

---

## **Technologies Used**

### Backend:
- Node.js & Express.js
- MongoDB & Mongoose
- JWT authentication
- Cors & dotenv
- Nodemon (development)

### Frontend:
- React.js
- Tailwind CSS
- Axios for API calls
- Recharts for data visualization

---

## **Folder Structure**

```text
fithub/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── dashboardController.js
│   │   └── membershipController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Trainer.js
│   │   ├── Plan.js
│   │   └── Membership.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── trainerRoutes.js
│   │   ├── planRoutes.js
│   │   ├── membershipRoutes.js
│   │   ├── contactRoutes.js
│   │   └── dashboardRoutes.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   └── AdminDashboard.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── contexts/
│   │   │   └── AuthContext.js
│   │   └── App.jsx
│   └── package.json
│
└── README.md
