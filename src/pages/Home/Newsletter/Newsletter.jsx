import Button from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <h2>Stay in the loop</h2>

        <p>New arrivals and updates, occasionally.</p>

        <form>
          <input placeholder="Email Address" type="email" required />

          <Button text="Sign up" className="button--full" />
        </form>
      </Container>
    </section>
  );
};

export default Newsletter;
