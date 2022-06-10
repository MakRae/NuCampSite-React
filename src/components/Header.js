import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import NucampLogo from "../app/assets/img/logo.png";

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand href="/">
        <img src={NucampLogo} alt="nucamp logo" />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
