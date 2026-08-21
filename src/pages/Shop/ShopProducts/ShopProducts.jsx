import ProductCard from "../../../components/ProductCard/ProductCard";

const ShopProducts = ({ sortedProducts }) => {
  return (
    <div className="shop__products">
      {sortedProducts.map(({ id, image, title, price }) => (
        <ProductCard
          key={id}
          id={id}
          image={image}
          title={title}
          price={price}
        />
      ))}
    </div>
  );
};

export default ShopProducts;
