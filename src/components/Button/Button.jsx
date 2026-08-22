import "./Button.css";

const Button = ({ text, className, func = undefined }) => {
  return (
    <button onClick={func} className={`button ${className}`}>
      {text}
    </button>
  );
};

export default Button;
