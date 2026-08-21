import ProductCard from "../../../components/ProductCard/ProductCard";

const ShopProducts = ({ sortedProducts }) => {
  return (
    <div className="shop__products">
      {sortedProducts.map(({ id, image, category, title, price }) => (
        <ProductCard
          key={id}
          id={id}
          category={category}
          image={image}
          title={title}
          price={price}
        />
      ))}
    </div>
  );
};

export default ShopProducts;
