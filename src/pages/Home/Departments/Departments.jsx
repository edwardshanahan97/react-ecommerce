import Container from "../../../components/Container/Container";
import "./Departments.css";

const Departments = () => {
  return (
    <section className="departments">
      <Container>
        <a href="#" className="department department--women">
          <div className="department__content">
            <h2 className="">Women</h2>

            <p>Shop Women →</p>
          </div>
        </a>

        <a href="#" className="department department--men">
          <div className="department__content">
            <h2 className="">Men</h2>

            <p>Shop Men →</p>
          </div>
        </a>

        <a href="#" className="department department--beuaty">
          <div className="department__content">
            <h2 className="">Beauty</h2>

            <p>Shop Beauty →</p>
          </div>
        </a>

        <a href="#" className="department department--accesories">
          <div className="department__content">
            <h2 className="">Accessories</h2>

            <p>Shop Accessories →</p>
          </div>
        </a>
      </Container>
    </section>
  );
};

export default Departments;
