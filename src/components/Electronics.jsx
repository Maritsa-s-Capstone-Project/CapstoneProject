import { getInCategoryElectronics } from "../API/product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Electronics() {
  const [electronics, setElectronics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadElectronics() {
      try {
        const results = await getInCategoryElectronics();
        setElectronics(results);
        return results;
      } catch (err) {
        console.log(err);
      }
    }
    loadElectronics();
  }, []);

  return (
    <div className="product-container">
      {electronics.map((electronics, index) => {
        return (
          <div
            className="product-info"
            key={index}
            onClick={() => navigate(`/products/${electronics.id}`)}
          >
            <h5>{electronics.title}</h5>
            <img alt="products" width="200" src={electronics.image} />
            <p>Category: {electronics.category}</p>
            <p>Id: {electronics.id}</p>
            <p>Price: {electronics.price}</p>
          </div>
        );
      })}
    </div>
  );
}
