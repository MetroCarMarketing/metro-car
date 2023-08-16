import { Button } from "@mui/material";
import React from "react";

const NavBtn = ({ text, isActive, navTo, test }) => {
  return (
    <Button
      className={isActive ? `nav__btn-active` : ""}
      onClick={navTo ? navTo : test}
    >
      <h1>{text}</h1>
    </Button>
  );
};

export default NavBtn;
