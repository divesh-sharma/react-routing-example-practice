import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <NavLink to="/" exact="" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/contact" exact="" activeClassName="active">
        Contact
      </NavLink>
      <NavLink to="/contact/Name" exact="" activeClassName="active">
        Contact Name
      </NavLink>
    </div>
  );
};

export default Menu;
