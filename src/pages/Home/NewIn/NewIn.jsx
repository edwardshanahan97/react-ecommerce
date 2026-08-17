import Container from "../../../components/Container/Container";
import Button from "../../../components/Button/Button";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { fetchData } from "../../../services/fetchData";
import "./NewIn.css";
import { useEffect, useState } from "react";

const NewIn = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData("products/category/mens-shirts?limit=4")
      .then((res) => setProducts(res.products))
      .catch((err) => setError(err));
  }, []);

  console.log(products);

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
              thumbnail={product.thumbnail}
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
