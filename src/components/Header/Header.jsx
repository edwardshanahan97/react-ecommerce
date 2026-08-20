import { useEffect, useState } from "react";
import Announcement from "../Announcement/Announcement";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 150) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className={`${isSticky ? "scroll" : " "}`}>
      <Announcement />
      <Navbar />
    </header>
  );
};

export default Header;
