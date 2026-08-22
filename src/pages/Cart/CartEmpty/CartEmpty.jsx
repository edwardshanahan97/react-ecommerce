import "./CartEmpty.css";
import { ShoppingBag } from "lucide-react";
import Button from "../../../components/Button/Button";

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <ShoppingBag size={32} strokeWidth={1.5} />

      <h2>Your bag is empty</h2>

      <p>Looks like you haven't added anything just yet.</p>

      <Button className="button--full" text="Continue Shopping" />
    </div>
  );
};

export default CartEmpty;
