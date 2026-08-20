import { useParams } from "react-router-dom";
import ShopHero from "./ShopHero/ShopHero";

const Shop = () => {
  const { category } = useParams();

  return (
    <main>
      <ShopHero category={category} />
    </main>
  );
};

export default Shop;
