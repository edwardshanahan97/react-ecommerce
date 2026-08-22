import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import "./Navbar.css";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { cartQuantity } = useCart();

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  return (
    <nav className={`navbar`}>
      <Container>
        <NavLink to="/" className="navbar__logo" href="#">
          AN FHÍS
        </NavLink>

        <ul className={`navbar__list ${isActive ? "active" : ""}`}>
          <li className="navbar__item">
            <NavLink to="/shop/women" className="navbar__link">
              Women
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/shop/men" href="#" className="navbar__link">
              Men
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/shop/beauty" href="#" className="navbar__link">
              Beauty
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/shop/accessories" className="navbar__link">
              Accessories
            </NavLink>
          </li>
        </ul>

        <div className="navbar__icons-desktop">
          <Search color="#171717" size={20} strokeWidth={1.5} />

          <NavLink to="/profile" className="navbar__icon" aria-label="Profile">
            <User color="#171717" size={20} strokeWidth={1.5} />
          </NavLink>

          <NavLink
            to="/wishlist"
            className="navbar__icon"
            aria-label="Wishlist"
          >
            <Heart color="#171717" size={20} strokeWidth={1.5} />
          </NavLink>

          <NavLink
            to="/cart"
            className="navbar__icon navbar__cart"
            aria-label="Cart"
          >
            <ShoppingBag color="#171717" size={20} strokeWidth={1.5} />

            <span className="navbar__cart-count">{cartQuantity}</span>
          </NavLink>
        </div>

        <div className="navbar__icons-mobile">
          <Search color="#171717" size={20} strokeWidth={1.5} />

          <NavLink
            to="cart"
            className="navbar__icon navbar__cart"
            aria-label="Cart"
          >
            <ShoppingBag color="#171717" size={20} strokeWidth={1.5} />

            <span className="navbar__cart-count">{cartQuantity}</span>
          </NavLink>
        </div>

        <div className={`navbar__icons-menu ${isActive ? "active" : ""}`}>
          <NavLink to="/profile" className="navbar__icon" aria-label="Profile">
            <User color="#faf9f6" size={20} strokeWidth={1.5} />
          </NavLink>

          <NavLink
            to="/whishlist"
            className="navbar__icon"
            aria-label="Wishlist"
          >
            <Heart color="#faf9f6" size={20} strokeWidth={1.5} />
          </NavLink>
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
