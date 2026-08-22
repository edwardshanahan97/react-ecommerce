import "./QuantityButton.css";

const QuantityButton = ({ quantity, onDecrement, onIncrement }) => {
  return (
    <div className="quantity-button">
      <button onClick={onDecrement}>-</button>

      <span>{quantity}</span>

      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default QuantityButton;
