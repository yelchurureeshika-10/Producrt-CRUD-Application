# Product CRUD Application (MERN Stack)

## Project Overview
This project is a simple **Product Management System** built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
It allows users to perform basic CRUD operations:
- Create a product
- View all products
- Update product details
- Delete a product
The goal of this project is to understand how frontend, backend, and database work together in a full-stack application.

## How the Project Works

1. User interacts with the React frontend (UI)
2. Frontend sends requests to backend APIs using Axios
3. Backend (Node.js + Express) processes the request
4. MongoDB stores or retrieves product data
5. Response is sent back to frontend
6. UI updates automatically with latest data

### Frontend (React.js)
- Display list of all products
- Add new product form
- Edit product details
- Delete product
- Show success and error messages
  
##Frontend Implementation (React.js):

- The frontend is built using React.js to provide a simple user interface for managing products.
- Created components for Product List, Add Product, and Edit Product
- Used Axios to connect with backend APIs
- Displayed all products in a list format
- Implemented forms for adding and updating products
- Used state management (useState, useEffect) to handle data and UI updates
- After every CRUD operation, the UI updates automatically
- Added simple success and error alerts for user feedback

### Backend (Node.js + Express.js)
- REST API for all CRUD operations
- Input validation (no empty fields allowed)
- Proper error handling

## ImplemeBackendntation (node.js+express.js):
The backend is built using Node.js and Express.js to handle API requests and database operations.
- Created REST APIs for CRUD operations:
- POST → Create product
- GET → Fetch all products
- PUT → Update product
- DELETE → Remove product
- Connected to MongoDB using Mongoose
- Defined a Product schema with fields: name, price, category, description, warranty
- Added input validation to prevent empty fields
- Used try/catch blocks for proper error handling
- Sends JSON responses to frontend for every request


### Database (MongoDB)
- Stores product details in a collection
- Each product contains:
  - name
  - price
  - category
  - description
  - warranty

##  API Endpoints

| Method | Endpoint            | Description        |
|--------|--------------------|--------------------|
| POST   | /api/products       | Create product     |
| GET    | /api/products       | Get all products   |
| PUT    | /api/products/:id   | Update product     |
| DELETE | /api/products/:id   | Delete product     |


###  Product Schema
{
  name: String,
  price: Number,
  category: String,
  description: String,
  warranty: string,
}

###Folder Structure:
backend/
  models/
  routes/
  controllers/
  server.js

frontend/
  src/
    components/
    pages/
    services/

