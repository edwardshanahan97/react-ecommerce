import Button from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";
import "./Hero.css";
import HeroBG from "../../../assets/images/hero-bg.webp";

const Hero = () => {
  return (
    <section className="hero">
      <img className="hero__img" src={HeroBG} />
      <Container>
        <h1 className="heading-primary">THE COLLECTION</h1>

        <p className="text-lead">New arrivals across women and men.</p>

        <div className="hero__buttons">
          <Button text="Shop Women" className="button--full" />

          <Button text="Shop Men" className="button--outline" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
