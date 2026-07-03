import { useRef, useEffect, useState } from "react";
import "./App.css";

import API from "./services/api";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await API.get("/");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setEditProduct(product);
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <h1>Welcome to Gadgets Hub</h1>
        <p>
          Add, edit, update, and delete products easily using modern dashboard.
        </p>
      </div>

      <div className="container">

        {/* FORM */}
        <ProductForm
          fetchProducts={fetchProducts}
          editProduct={editProduct}
          setEditProduct={setEditProduct}
          formRef={formRef}
        />

        {/* LOADING */}
        {loading && <div className="spinner"></div>}

        {/* PRODUCT LIST */}
        <ProductList
          products={products}
          fetchProducts={fetchProducts}
          setEditProduct={setEditProduct}
          formRef={formRef}
        />

      </div>
    </>
  );
}

export default App;