# 📝 MERN To-Do Application

A **full-stack To-Do List application** built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
This app supports **user authentication** and allows each user to **securely manage their own tasks**.

---

## 🚀 Features

- 👤 User Registration & Login (JWT Authentication)
- 🔒 Protected routes (only logged-in users can access todos)
- ➕ Add new tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as completed
- ❌ Delete tasks
- 📱 Clean, mobile-friendly UI
- 🔐 Secure password hashing with bcrypt
- 🗂 Each user sees **only their own todos**

---

## 🧠 Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router
- CSS (custom styling, no UI library)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt

---

## 📁 Project Structure

```

MERN-ToDo-App/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Todo.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── todoRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── server.js
│   └── .env
│
└── frontend/
├── src/
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Todo.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
└── package.json

```

---

## 🔐 Authentication Flow

1. User registers using the **Register** page
2. User logs in using the **Login** page
3. Backend returns a **JWT token**
4. Token is stored in `localStorage`
5. Token is sent in the `Authorization` header for protected API calls
6. Backend verifies the token before allowing access to todos

---

## 🧪 API Endpoints

### Auth Routes
```

POST /api/auth/register   → Register a new user
POST /api/auth/login      → Login user & return JWT

```

### Todo Routes (Protected)
```

GET    /api/todos         → Get user's todos
POST   /api/todos         → Add new todo
PUT    /api/todos/:id     → Update todo / toggle completed
DELETE /api/todos/:id     → Delete todo

````

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
MONGO_URI=mongodb://127.0.0.1:27017/todoApp
JWT_SECRET=your_secret_key
PORT=5003
````

---

## ▶️ How to Run the App Locally

### 1️⃣ Start MongoDB

Make sure MongoDB is running:

```bash
mongod
```

---

### 2️⃣ Run Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs at:

```
http://localhost:5003
```

---

### 3️⃣ Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🖥 Application Pages

* `/register` → Create a new account
* `/login` → Login to the app
* `/todos` → Manage your todo items (protected route)

---

## 🎨 UI Highlights

* Large, dominant input field for adding tasks
* Clean card-based layout
* Visual indicators for completed tasks
* Simple icons for edit / delete
* Logout button in the header

---

## 🔒 Security Notes

* Passwords are hashed using **bcrypt**
* JWT tokens are validated on every protected request
* User ID is extracted from the token to ensure data isolation

---

## 🚀 Possible Improvements

* 🌙 Dark mode
* 📱 Improved mobile responsiveness
* ⏰ Due dates & priorities
* 🧪 Unit and integration tests
* 🌐 Deployment (Render / Vercel)

---

## 👨‍💻 Author

**Shakera Jannat Ema**
Intern Software Engineer, ShellBeeHaken Ltd.
Learning and building full-stack applications with MERN

---

## 📄 License

This project is for **learning and educational purposes**.
Feel free to fork, modify, and improve it.
