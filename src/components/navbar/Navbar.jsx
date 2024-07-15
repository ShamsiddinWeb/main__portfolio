import React from "react";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav__start">
      <nav className="nav__links">
        <Link className="accaunt" href="https://google.com">
          Google
        </Link>
        <Link className="accaunt" href="/portfolio">
          MY PORTFOLIO
        </Link>
        <Link className="accaunt" href="https://t.me/shamsiddin_1101">
          My telegram
        </Link>
      </nav>

      <div className="container">
        <span className="text-1">WELCOME IN</span>
        <span className="text-2">Shamsiddin Norov</span>
      </div>
    </div>
  );
};

export default Navbar;
