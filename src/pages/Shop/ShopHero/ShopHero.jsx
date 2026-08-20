import { shopHeaderData } from "../../../data/shopHeaderData";
import Container from "../../../components/Container/Container";
import "./ShopHero.css";

const ShopHero = ({ category }) => {
  const headerData = shopHeaderData[category];

  const { title, text, image } = headerData;

  return (
    <section
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="shop-hero"
    >
      <Container>
        <h1>{title}</h1>

        <p className="text-lead">{text}</p>
      </Container>
    </section>
  );
};

export default ShopHero;
