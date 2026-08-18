import "./Footer.css";
import Container from "../../components/Container/Container";
import IconInstagram from "../../assets/icons/icon-instagram.svg";
import IconPinterest from "../../assets/icons/icon-pinterest.svg";
import IconTiktok from "../../assets/icons/icon-tiktok.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <a className="footer__logo" href="#">
          AN FHÍS
        </a>

        <ul className={`footer__list`}>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Women
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Men
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              Beauty
            </a>
          </li>
          <li className="footer__item">
            <a href="#acc" className="footer__link">
              Accessories
            </a>
          </li>
        </ul>

        <div className="footer__icons">
          <a className="footer__icon" href="#">
            <img src={IconInstagram} alt="Instagram Icon" />
          </a>

          <a className="footer__icon" href="#">
            <img src={IconPinterest} alt="Pinterest Icon" />
          </a>

          <a className="footer__icon" href="#">
            <img src={IconTiktok} alt="Tiktok Icon" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
