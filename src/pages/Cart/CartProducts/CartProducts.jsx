import "./CartProducts.css";
import QuantityButton from "../../../components/QuantityButton/QuantityButton";
import { useCart } from "../../../context/CartContext";
import { X } from "lucide-react";

const CartProducts = ({ cart }) => {
  const { onDecrement, onIncrement, removeItem } = useCart();

  return (
    <div className="cart-products">
      {cart.map((item) => (
        <div className="cart-products__item">
          <img src={item.image} alt={item.title} />

          <div className="cart-products__details">
            <h2 className="cart-products__title">{item.title}</h2>
            <p className="cart-products__price">€{item.price}</p>
            <p className="cart-products__size">Size: {item.selectSize}</p>

            <QuantityButton
              onIncrement={() => onIncrement(item.cartId, item.selectSize)}
              onDecrement={() => onDecrement(item.cartId, item.selectSize)}
              quantity={item.quantity}
            />
          </div>

          <div className="cart-products__actions">
            <button
              className="cart-products__remove"
              onClick={() => removeItem(item.cartId, item.selectSize)}
            >
              <X />
            </button>

            <p className="cart-products__total">
              €{item.price * item.quantity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
