const Product = require("../models/Product");

//create Product

const createProduct = async (req, res) => {
    try {

        const { name, price, category, description, warranty } = req.body;

        if (!name || !price || !category || !description || !warranty) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }

        if (price <= 0) {
            return res.status(400).json({
                success: false,
                message: "Price must be greater than 0"
            });
        }

        const product = await Product.create({
            name,
            price,
            category,
            description,
            warranty
        });

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            product
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get All Products
const getProducts = async (req, res) => {

    try {

        const products = await Product.find();

        res.status(200).json({
            success: true,
            count: products.length,
            products
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// Update Product
const updateProduct = async (req, res) => {
    try {

        const { name, price, category, description, warranty } = req.body;

        if (!name || !price || !category || !description || !warranty) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }

        if (price <= 0) {
            return res.status(400).json({
                success: false,
                message: "Price must be greater than 0"
            });
        }

        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name,
                price,
                category,
                description,
                warranty
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Product
const deleteProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {

            return res.status(404).json({
                success: false,
                message: "Product not found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
};