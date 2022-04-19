import React from "react";
import { Toggle } from "./Toggle";
import { NavBarDiv, NavItems, NavItem, Logo } from "./Styles";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const menus = [
  { id: 0, name: "Home", css: "home" },
  { id: 1, name: "About", css: "about" },
  { id: 2, name: "Skills", css: "skills" },
  { id: 3, name: "Projects", css: "projects" },
  { id: 4, name: "Contact", css: "contact" },
];


function Navbar({ themeToggler }) {
  
  return (
    <NavBarDiv>
      <Logo onClick={() => scroll.scrollToTop()}>
        <span className="grey-color"> &lt;</span>
        <span className="logo-name">Rounak Mojumder</span>
        <span className="grey-color">/&gt;</span>
      </Logo>

      <NavItems>
        {menus.map((item) => (
          <Link
            key={item.id}
            activeClass="active"
            to={item.css}
            spy={true}
            smooth={true}
            duration={500}
          >
            <NavItem key={item.id}>{item.name}</NavItem>
          </Link>
        ))}
      </NavItems>
      <Toggle themeToggler={themeToggler} />
    </NavBarDiv>
  );
}

export default Navbar;
