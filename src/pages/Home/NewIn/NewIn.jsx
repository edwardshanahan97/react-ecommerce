import Container from "../../../components/Container/Container";
import Button from "../../../components/Button/Button";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { products } from "../../../data/products";
import "./NewIn.css";
import { useEffect, useState } from "react";

const NewIn = () => {
  const [error, setError] = useState("");

  return (
    <section className="new-in">
      <Container>
        <div className="new-in__header">
          <div>
            <h2>New In</h2>

            <p>Recently added.</p>
          </div>

          <Button text="View all" className="button--inline" />
        </div>

        <div className="new-in__products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewIn;
