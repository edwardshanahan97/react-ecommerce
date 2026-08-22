import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const addToCart = (cartItem) => {
    const existingItem = cart.find(
      (item) =>
        item.cartId === cartItem.cartId &&
        item.selectSize === cartItem.selectSize,
    );

    if (existingItem) {
      const updateCart = cart.map((item) => {
        if (
          item.cartId === cartItem.cartId &&
          item.selectSize === cartItem.selectSize
        ) {
          return {
            ...item,
            quantity: item.quantity + cartItem.quantity,
          };
        }

        return item;
      });

      setCart(updateCart);
    } else {
      setCart((prev) => [...prev, cartItem]);
    }
  };

  const cartQuantity = cart.reduce((acc, item) => {
    return item.quantity + acc;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
