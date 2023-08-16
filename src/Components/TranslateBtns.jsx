import { Button, IconButton } from "@mui/material";
import React from "react";
import "../CSS/TranslateBtns.css";

const TranslateBtns = ({ setEnglish, setSpanish }) => {
  return (
    <div className="translate__btns">
      <IconButton className="translate__btns--phone" onClick={setSpanish}>
        <p>🇪🇸</p>
      </IconButton>
      <IconButton className="translate__btns--phone" onClick={setEnglish}>
        <p>🇺🇸</p>
      </IconButton>
      <Button className="translate__btns--desktop" onClick={setSpanish}>
        <h1>Español</h1>
      </Button>
      <Button className="translate__btns--desktop" onClick={setEnglish}>
        <h1>English</h1>
      </Button>
    </div>
  );
};

export default TranslateBtns;
