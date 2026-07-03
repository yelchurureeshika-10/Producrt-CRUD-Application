import { useEffect, useState } from "react";
import API from "../services/api";

function ProductForm({ fetchProducts, editProduct, setEditProduct, formRef }) {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    warranty: "",
  });

  useEffect(() => {
    if (editProduct) {
      setProduct(editProduct);
    }
  }, [editProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editProduct) {
        await API.put(`/${editProduct._id}`, product);
        alert("Updated Successfully");
      } else {
        await API.post("/", product);
        alert("Added Successfully");
      }

      setProduct({
        name: "",
        price: "",
        category: "",
        description: "",
        warranty: "",
      });

      setEditProduct(null);
      fetchProducts();

    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div className="form-container" ref={formRef}>
      <h2>{editProduct ? "Update Product" : "Product Form"}</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />

        <select
          name="category"
          value={product.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Laptop">Laptop</option>
          <option value="Mobile">Mobile</option>
          <option value="Tablet">Tablet</option>
          <option value="Headphones">Headphones</option>
          <option value="Accessories">Accessories</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />

        <input
          name="warranty"
          placeholder="Warranty"
          value={product.warranty}
          onChange={handleChange}
        />

        <button type="submit">
          {editProduct ? "Update" : "Add Product"}
        </button>

      </form>
    </div>
  );
}

export default ProductForm;