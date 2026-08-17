import Button from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";
import "./Edit.css";

const Edit = () => {
  return (
    <section className="edit">
      <Container>
        <h2>THE EDIT</h2>

        <p>A selection from across the collection.</p>

        <Button text="Explore The Edit" className="button--light" />
      </Container>
    </section>
  );
};

export default Edit;
