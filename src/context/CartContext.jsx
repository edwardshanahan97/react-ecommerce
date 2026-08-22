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

  const onDecrement = (cartId, selectSize) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.cartId === cartId && item.selectSize === selectSize) {
          if (item.quantity <= 1) {
            return item;
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        } else {
          return item;
        }
      }),
    );
  };

  const onIncrement = (cartId, selectSize) => {
    setCart((prev) =>
      prev.map((item) => {
        return item.cartId === cartId && item.selectSize === selectSize
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      }),
    );
  };

  const removeItem = (cartId, selectSize) => {
    setCart((prev) =>
      prev.filter(
        (item) => item.cartId !== cartId || item.selectSize !== selectSize,
      ),
    );
  };

  const cartTotal = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        cartQuantity,
        onDecrement,
        onIncrement,
        removeItem,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
