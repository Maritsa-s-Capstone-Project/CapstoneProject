import { getInCategoryMens } from "../API/product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function MensClothing() {
  const [mensClothing, setMensClothing] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadMensClothing() {
      try {
        const results = await getInCategoryMens();
        setMensClothing(results);
        return results;
      } catch (err) {
        console.log(err);
      }
    }
    loadMensClothing();
  }, []);

  return (
    <div className="product-container">
      {mensClothing.map((mensClothing, index) => {
        return (
          <div
            className="product-info"
            key={index}
            onClick={() => navigate(`/products/${mensClothing.id}`)}
          >
            <h5>{mensClothing.title}</h5>
            <img alt="products" width="200" src={mensClothing.image} />
            <p>Category: {mensClothing.category}</p>
            <p>Id: {mensClothing.id}</p>
            <p>Price: {mensClothing.price}</p>
          </div>
        );
      })}
    </div>
  );
}
