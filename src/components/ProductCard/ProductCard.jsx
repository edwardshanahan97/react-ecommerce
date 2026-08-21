import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, title, price, category }) => {
  return (
    <Link to={`/shop/${category}/product/${id}`} className="product-card">
      <div className="product-card__img-wrap">
        <img className="product-card__img" src={image} alt={title} />
      </div>

      <h3 className="product-card__title">{title}</h3>

      <p className="product-card__price">${price}</p>
    </Link>
  );
};

export default ProductCard;
