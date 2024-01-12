import { getSingleProduct } from "../API/product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SingleProduct() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadSingleProducts() {
      try {
        const results = await getSingleProduct(params.id);
        setProduct(results);
        return results;
      } catch (err) {
        console.log(err);
      }
    }
    loadSingleProducts();
  }, []);

  return (
    product && (
      <div
        className="product-info"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <h1>SingleProduct</h1>
        <h4>{product.title}</h4>
        <img width={200} src={product.image} />
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Id: {product.id}</p>
        <p>Price: {product.price}</p>
      </div>
    )
  );
}
