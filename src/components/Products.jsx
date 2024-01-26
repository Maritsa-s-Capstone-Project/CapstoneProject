import { getProducts } from "../API/product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      try {
        const results = await getProducts();
        setProducts(results);
        return results;
      } catch (err) {
        console.log(err);
      }
    }
    loadProducts();
  }, []);

  return (
    <div className="product-container">
      {products.map((products, index) => {
        return (
          <div
            className="product-info"
            key={index}
            onClick={() => navigate(`/products/${products.id}`)}
          >
            <h5>{products.title}</h5>
            <img alt="products" src={products.image} />
            <p>Category: {products.category}</p>
            <p>Id: {products.id}</p>
            <p>Price: {products.price}</p>
          </div>
        );
      })}
    </div>
  );
}
