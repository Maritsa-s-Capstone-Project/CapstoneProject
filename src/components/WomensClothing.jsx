import { getInCategoryWomens } from "../API/product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function WomensClothing() {
  const [womensClothing, setWomensClothing] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadWomensClothing() {
      try {
        const results = await getInCategoryWomens();
        setWomensClothing(results);
        return results;
      } catch (err) {
        console.log(err);
      }
    }
    loadWomensClothing();
  }, []);

  return (
    <div className="product-container">
      {womensClothing.map((womensClothing, index) => {
        return (
          <div
            className="product-info"
            key={index}
            onClick={() => navigate(`/products/${womensClothing.id}`)}
          >
            <h5>{womensClothing.title}</h5>
            <img alt="products" width="200" src={womensClothing.image} />
            <p>Category: {womensClothing.category}</p>
            <p>Id: {womensClothing.id}</p>
            <p>Price: {womensClothing.price}</p>
          </div>
        );
      })}
    </div>
  );
}
