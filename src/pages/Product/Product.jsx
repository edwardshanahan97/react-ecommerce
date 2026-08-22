import "./Product.css";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import ShopFeatures from "../Shop/ShopFeatures/ShopFeatures";
import { Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

const Product = () => {
  const { id } = useParams();
  const [quantity, setquantity] = useState(1);
  const [selectSize, setSelectSize] = useState();
  const { addToCart } = useCart();
  const [error, setError] = useState("");

  const product = products.find((product) => product.id === Number(id));

  const { image, title, price, description, rating, reviews, sizes } = product;

  const handleIncrement = () => setquantity(quantity + 1);

  const cartId = Number(id);

  const cartItem = {
    cartId,
    title,
    price,
    image,
    selectSize,
    quantity,
  };

  const handleDecrement = () => {
    if (quantity <= 1) {
      return;
    } else {
      setquantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectSize) {
      setError("Please select size!");
      return;
    } else {
      addToCart(cartItem);
      setError(false);
    }
  };

  return (
    <main className="product">
      <Container>
        <div className="product__img">
          <img src={image} alt={title} />
        </div>

        <div className="product__content">
          <h1>{title}</h1>

          <h2>€{price}</h2>

          <p className="product__rating">
            Rating: {rating} ({reviews} Reviews)
          </p>

          <p className="product__description">{description}</p>

          <div className="product__sizes">
            <p>Sizes:</p>

            <div className="product__buttons">
              {sizes.map((size, index) => (
                <button
                  className={selectSize === size ? "active" : ""}
                  onClick={() => setSelectSize(size)}
                  key={index}
                >
                  {size}
                </button>
              ))}
            </div>

            {error && <p className="product__error">{error}</p>}
          </div>

          <div className="product__quantity">
            <button onClick={handleDecrement}>-</button>

            <span>{quantity}</span>

            <button onClick={handleIncrement}>+</button>
          </div>

          {/* <Button
            onClick={handleAddToCart}
            className={"button--full"}
            text="Add To Cart"
          /> */}

          <button onClick={handleAddToCart}>Add to cart</button>

          <button className="product__wishlist">
            <Heart />
            Add to wishlist
          </button>
        </div>

        <ShopFeatures />
      </Container>
    </main>
  );
};

export default Product;
