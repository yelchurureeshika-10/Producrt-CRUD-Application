Product Management Application (MERN Stack):

A simple full-stack **Product Management System** built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project allows users to perform basic CRUD operations like adding, viewing, editing, and deleting products.

Features:

-  Add new products
-  View all products in a list
-  Edit existing products
-  Delete products
-  Real-time UI updates
-  REST API integration with backend

## Tech Stack
Frontend:
- React.js (Vite)
- Axios
- HTML, CSS, JavaScript

Backend:
- Node.js
- Express.js
- MongoDB

Project Structure:

product application/
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
│
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ └── App.jsx

Backend Setup:
cd backend
npm install

create a .env File:
MONGO_URI=your_mongodb_connection_string
PORT=8086

Run backend server:
npm run dev

Frontend Setup:
cd frontend
npm install
npm run dev

API ENDPONTS:
| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | /api/products     | Get all products |
| POST   | /api/products     | Create a product |
| PUT    | /api/products/:id | Update product   |
| DELETE | /api/products/:id | Delete product   |


