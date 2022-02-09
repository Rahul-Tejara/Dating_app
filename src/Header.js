import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className="logo">
          <img src="../assets/img/logo.png" alt="" className="img-fluid" />
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <HeaderNavItem exact to="/" name="Home" />
            </li>
            <li>
              <HeaderNavItem to="/about" name="About Us" />
            </li>
            <li>
              <HeaderNavItem to="/services" name="Features" />
            </li>
            <li>
              <HeaderNavItem to="/faq" name="Faqs" />
            </li>
            <li>
              <HeaderNavItem to="/team" name="Reviews" />
            </li>
            <li>
              <HeaderNavItem to="/contact" name="Contact" />
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

function HeaderNavItem(props) {
  return (
    <Link
      spy={true}
      smooth={true}
      duration={500}
      to={props.to}
      className="nav-link scrollto"
      exact={props.exact ? true : false}
      activeClassName="active"
    >
      {props.name}
    </Link>
  );
}
