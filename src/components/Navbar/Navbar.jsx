import { useState } from "react";
import Container from "../Container/Container";
import "./Navbar.css";
import { Heart, Search, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar">
      <Container>
        <a className="navbar__logo" href="#">
          AN FHÍS
        </a>

        <ul className={`navbar__list ${isActive ? "active" : ""}`}>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Women
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Men
            </a>
          </li>
          <li className="navbar__item">
            <a href="#" className="navbar__link">
              Beauty
            </a>
          </li>
          <li className="navbar__item">
            <a href="#acc" className="navbar__link">
              Accessories
            </a>
          </li>
        </ul>

        <div className="navbar__icons-desktop">
          <a href="#" className="navbar__icon" aria-label="Search">
            <Search color="#171717" size={20} strokeWidth={1.5} />
          </a>

          <a href="#" className="navbar__icon" aria-label="Profile">
            <User color="#171717" size={20} strokeWidth={1.5} />
          </a>

          <a href="#" className="navbar__icon" aria-label="Wishlist">
            <Heart color="#171717" size={20} strokeWidth={1.5} />
          </a>

          <a href="#" className="navbar__icon" aria-label="Cart">
            <ShoppingBag color="#171717" size={20} strokeWidth={1.5} />
          </a>
        </div>

        <div className="navbar__icons-mobile">
          <a href="#" className="navbar__icon" aria-label="Search">
            <Search color="#171717" size={20} strokeWidth={1.5} />
          </a>

          <a href="#" className="navbar__icon" aria-label="Cart">
            <ShoppingBag color="#171717" size={20} strokeWidth={1.5} />

            {/* <span>2</span> */}
          </a>
        </div>

        <div className={`navbar__icons-menu ${isActive ? "active" : ""}`}>
          <a href="#" className="navbar__icon" aria-label="Profile">
            <User color="#faf9f6" size={20} strokeWidth={1.5} />
          </a>

          <a href="#" className="navbar__icon" aria-label="Wishlist">
            <Heart color="#faf9f6" size={20} strokeWidth={1.5} />
          </a>
        </div>

        <button
          onClick={() => setIsActive(!isActive)}
          className={`navbar__menu ${isActive ? "active" : ""}`}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
        </button>

        <div className={`navbar__overlay ${isActive ? "active" : ""}`}></div>
      </Container>
    </nav>
  );
};

export default Navbar;
