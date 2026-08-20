import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopHero from "./ShopHero/ShopHero";
import ProductCard from "../../components/ProductCard/ProductCard";
import Container from "../../components/Container/Container";
import { products } from "../../data/products";
import "./Shop.css";
import ShopFilters from "./ShopFilter/ShopFilter";
import ShopProducts from "./ShopProducts/ShopProducts";

const Shop = () => {
  const { category } = useParams();
  const [selectedType, setSelectedType] = useState("all");

  const categoryProducts = products.filter(
    (product) => category === product.category,
  );

  const filteredProducts = categoryProducts.filter(
    (product) => selectedType === "all" || product.type === selectedType,
  );

  useEffect(() => {
    setSelectedType("all");
  }, [category]);

  const productTypes = categoryProducts.map((product) => product.type);

  const typeCounts = productTypes.reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;

    return acc;
  }, {});

  return (
    <main>
      <ShopHero category={category} />

      <Container>
        <ShopFilters
          setSelectedType={setSelectedType}
          categoryProducts={categoryProducts}
          typeCounts={typeCounts}
        />

        <ShopProducts filteredProducts={filteredProducts} />
      </Container>
    </main>
  );
};

export default Shop;
