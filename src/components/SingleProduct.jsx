import { getSingleProduct } from "../API/product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SingleProduct({ setCart }) {
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

  function addToCart() {
    const cartInStorage = JSON.parse(localStorage.getItem("cart"));
    console.log(cartInStorage);
    //check if item is in cart
    const result = cartInStorage.find((item) => item.id == params.id);
    if (!result) {
      cartInStorage.push({ ...product, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cartInStorage));
    } else {
      result.quantity += 1;
      const updatedCart = cartInStorage.filter((item) => item.id != params.id);
      updatedCart.push(result);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    const nextCart = JSON.parse(localStorage.getItem("cart"));
    setCart(nextCart);
  }

  return (
    product && (
      <div
        className="product-info"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <h4>{product.title}</h4>
        <img width={200} src={product.image} />
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Id: {product.id}</p>
        <p>Price: {product.price}</p>
        <button onClick={addToCart}>Add To Bag</button>
      </div>
    )
  );
}
