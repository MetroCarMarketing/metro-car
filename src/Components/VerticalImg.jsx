import React from "react";
import '../CSS/VerticalImg.css'

const VerticalImg = ({ className, src }) => {
  return (
    <figure className={className}>
      <img src={src} alt="" />
    </figure>
  );
};

export default VerticalImg;
