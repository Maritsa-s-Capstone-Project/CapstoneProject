import { getSortResults } from "../API/product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Sort() {
  const [sort, setSort] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadSort() {
      try {
        const results = await getSortResults();
        setSort(results);
        return results;
      } catch (err) {
        console.log(err);
      }
    }
    loadSort();
  }, []);

  return (
    <div className="product-container">
      {sort.map((sort, index) => {
        return (
          <div
            className="product-info"
            key={index}
            onClick={() => navigate(`/products/${sort.id}`)}
          >
            <h5>{sort.title}</h5>
            <img alt="products" width="200" src={sort.image} />
            <p>Category: {sort.category}</p>
            <p>Id: {sort.id}</p>
            <p>Price: {sort.price}</p>
          </div>
        );
      })}
    </div>
  );
}
