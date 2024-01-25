import { getHighPrices } from "../API/product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function SortHighPrice() {
  const [price, SetPrice] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadSortHighPrice() {
      try {
        const results = await getHighPrices();
        SetPrice(results);
        return results;
      } catch (err) {
        console.log(err);
      }
    }
    loadSortHighPrice();
  }, []);
  return (
    <div className="product-container">
      {price.map((price, index) => {
        return (
          <div
            className="product-info"
            key={index}
            onClick={() => navigate(`/products/${price.id}`)}
          >
            <h5>{price.title}</h5>
            <img alt="products" width="200" src={price.image} />
            <p>Category: {price.category}</p>
            <p>Id: {price.id}</p>
            <p>Price: {price.price}</p>
          </div>
        );
      })}
    </div>
  );
}
