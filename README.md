```markdown
# 🏡 Real Estate MERN Application

A full-stack **Real Estate Listing** platform built using the **MERN stack**, featuring **authentication**, **property listing**, and more. This project has a clean modular structure using **Redux**, **Tailwind CSS**, and modern best practices.

---

## 🚀 Tech Stack

### 🔧 Backend (`api/`)
- Node.js + Express.js
- MongoDB (via Mongoose)
- JWT for authentication
- bcrypt for password hashing

### 🎨 Frontend (`client/`)
- React.js (Vite)
- Redux Toolkit
- Tailwind CSS
- Firebase (for additional auth/storage if configured)

---

## ✨ Features

- 🔐 User Register/Login with JWT
- 🏘️ Create, Update, Delete Property Listings
- 📋 View and filter property listings
- 🧠 State management using Redux
- 📦 Scalable folder structure
- 📱 Mobile responsive design

---

## 📁 Project Structure
├── api/                     # Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js
│
├── client/                  # Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── firebase.js      # If using Firebase
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
│
├── .env                     # Environment Variables
├── README.md

````

---

## 🔐 Environment Variables

Create a `.env` file in the **root** directory (where `api/index.js` is):

```env
MONGO=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
````

---

## 💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/kapil5849/Real-Estate-Application
cd Real-Estate-Application
```

### 2. Install Backend Dependencies

```bash
cd api
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

### 4. Run the App in Development

```bash
# Backend
cd api
npm run dev

# Frontend
cd ../client
npm run dev
```

## 🙌 Contribution

Contributions are welcome!
Fork the repo, make your changes, and open a pull request.

---

## 👤 Author

**Kapil Vaishnav**
🔗 GitHub: [@kapil5849](https://github.com/kapil5849)

