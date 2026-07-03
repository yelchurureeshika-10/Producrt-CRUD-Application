import API from "../services/api";

function ProductList({ products, fetchProducts, setEditProduct, formRef }) {

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/${id}`);
      alert("Deleted Successfully");
      fetchProducts();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="product-container">

      {products.length === 0 ? (
        <p className="empty">No Products Available</p>
      ) : (
        products.map((product) => (
          <div className="product-card" key={product._id}>

            <h3>{product.name}</h3>

            <p><strong>Price:</strong> ₹{product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Warranty:</strong> {product.warranty}</p>

            <div className="actions">

              <button
                className="edit"
                onClick={() => {
                  setEditProduct(product);

                  setTimeout(() => {
                    formRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 100);
                }}
              >
                Edit
              </button>

              <button
                className="delete"
                onClick={() => deleteProduct(product._id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))
      )}

    </div>
  );
}

export default ProductList;