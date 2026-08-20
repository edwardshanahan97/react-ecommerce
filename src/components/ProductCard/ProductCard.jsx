import "./ProductCard.css";

const ProductCard = ({ id, image, title, price }) => {
  return (
    <a href="#" className="product-card">
      <div className="product-card__img-wrap">
        <img className="product-card__img" src={image} alt={title} />
      </div>

      <h3 className="product-card__title">{title}</h3>

      <p className="product-card__price">${price}</p>
    </a>
  );
};

export default ProductCard;
