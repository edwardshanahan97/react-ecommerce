import Container from "../../components/Container/Container";
import { useCart } from "../../context/CartContext";
import "./Cart.css";
import CartProducts from "./CartProducts/CartProducts";
import CartSummary from "./CartSummary/CartSummary";
import CartEmpty from "./CartEmpty/CartEmpty";

const Cart = () => {
  const { cart } = useCart();

  console.log(cart);

  return (
    <div className="cart">
      <Container>
        {cart.length === 0 ? (
          <CartEmpty />
        ) : (
          <>
            <h1>Shopping Bags</h1>

            <CartProducts cart={cart} />

            <CartSummary />
          </>
        )}
      </Container>
    </div>
  );
};

export default Cart;
