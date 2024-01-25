import { getInCategoryJewelery } from "../API/product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Jewlery() {
  const [jewlery, setJewlery] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadJewlery() {
      try {
        const results = await getInCategoryJewelery();
        setJewlery(results);
        return results;
      } catch (err) {
        console.log(err);
      }
    }
    loadJewlery();
  }, []);

  return (
    <div className="product-container">
      {jewlery.map((jewlery, index) => {
        return (
          <div
            className="product-info"
            key={index}
            onClick={() => navigate(`/products/${jewlery.id}`)}
          >
            <h5>{jewlery.title}</h5>
            <img alt="products" width="200" src={jewlery.image} />
            <p>Category: {jewlery.category}</p>
            <p>Id: {jewlery.id}</p>
            <p>Price: {jewlery.price}</p>
          </div>
        );
      })}
    </div>
  );
}
