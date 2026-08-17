import "./ProductCard.css";

const ProductCard = ({ id, thumbnail, title, price }) => {
  return (
    <div className="product-card">
      <img className="product-card__img" src={thumbnail} alt={title} />

      <h3 className="product-card__title">{title}</h3>

      <p className="product-card__price">{price}</p>
    </div>
  );
};

export default ProductCard;
