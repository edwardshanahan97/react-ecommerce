import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShopHero from "./ShopHero/ShopHero";
import ProductCard from "../../components/ProductCard/ProductCard";
import Container from "../../components/Container/Container";
import { products } from "../../data/products";
import "./Shop.css";
import ShopFilters from "./ShopFilter/ShopFilter";
import ShopProducts from "./ShopProducts/ShopProducts";
import ShopFeatures from "./ShopFeatures/ShopFeatures";

const Shop = () => {
  const { category } = useParams();
  const [selectedType, setSelectedType] = useState("all");
  const [sort, setSort] = useState("featured");

  const categoryProducts = products.filter(
    (product) => category === product.category,
  );

  const filteredProducts = categoryProducts.filter(
    (product) => selectedType === "all" || product.type === selectedType,
  );

  const sortedProducts = filteredProducts.map((product) => product);

  if (sort === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  useEffect(() => {
    setSelectedType("all");

    setSort("featured");
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
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          categoryProducts={categoryProducts}
          typeCounts={typeCounts}
          setSort={setSort}
          sort={sort}
        />

        <ShopProducts sortedProducts={sortedProducts} />

        <ShopFeatures />
      </Container>
    </main>
  );
};

export default Shop;
