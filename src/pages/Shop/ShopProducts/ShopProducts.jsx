import ProductCard from "../../../components/ProductCard/ProductCard";

const ShopProducts = ({ filteredProducts }) => {
  return (
    <div className="shop__products">
      {filteredProducts.map(({ id, image, title, price }) => (
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
