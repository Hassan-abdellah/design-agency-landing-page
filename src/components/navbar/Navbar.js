import React, { useState } from "react";
import "./navbar.css";
import Hamburger from "../hamburger/Hamburger";
import { AiFillCaretDown } from "react-icons/ai";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  return (
    <header className="header">
      <div className="wrapper">
        <nav className="navbar">
          <div className="logo">
            Desgin<span>Agency</span>
          </div>
          <div className={active ? "main-nav active" : "main-nav"}>
            <ul>
              <li>
                <a href="!#">Home</a>
              </li>
              <li>
                <a href="!#">Portofolio</a>
              </li>
              <li
                className="submenu-link"
                onClick={() => active && setSubmenu(!submenu)}
              >
                <a href="!#">
                  Services
                  <AiFillCaretDown />
                </a>
                <ul className={submenu ? "submenu active" : "submenu"}>
                  <li>
                    <a href="#!">Logo Design</a>
                  </li>
                  <li>
                    <a href="#!">Website Design</a>
                  </li>
                  <li>
                    <a href="#!">Mobile APP Design</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="!#">Pricing</a>
              </li>
              <li>
                <a href="!#">Contact Us</a>
              </li>
            </ul>
            <a href="!#" className="btn sign-in-btn">
              <span>Sign In</span>
            </a>
          </div>
          <Hamburger active={active} setActive={setActive} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
