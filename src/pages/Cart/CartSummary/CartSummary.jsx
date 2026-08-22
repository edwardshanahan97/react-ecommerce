import "./CartSummary.css";
import Button from "../../../components/Button/Button";
import { useCart } from "../../../context/CartContext";

const CartSummary = () => {
  const { cartTotal } = useCart();

  console.log(cartTotal);
  return (
    <div className="cart-summary">
      <h2>Order Summary</h2>

      <div className="cart-summary__row">
        <p>Subtotal</p>
        <p>€{cartTotal}</p>
      </div>

      <div className="cart-summary__row">
        <p>Shipping</p>
        <p>Calculated at checkout</p>
      </div>

      <div className="cart-summary__total">
        <p>Total</p>
        <p>€{cartTotal}</p>
      </div>

      <Button className="button--full" text="Proceed To Checkout" />
    </div>
  );
};

export default CartSummary;
