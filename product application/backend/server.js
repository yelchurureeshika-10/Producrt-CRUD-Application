const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware (MUST COME BEFORE ROUTES)
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Tech Gadget Vault API Running...");
});

// Server
const PORT = process.env.PORT || 8086;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});