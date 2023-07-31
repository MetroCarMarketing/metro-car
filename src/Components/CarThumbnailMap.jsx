import React from "react";
import "../CSS/CarThumbnailMap.css";

const CarThumbnailMap = ({ translation, item }) => {
  return (
    <div className="thumbnail">
      <figure className="thumbnail__wrapper">
        <img src={item.imageMain} alt="" />
      </figure>
      <div className="thumbnail__info">
        <h2 className="thumbnail__title">{item.name}</h2>
        <h3 className="thumbnail__price">
          $ {item.price} <span>/ h</span>
        </h3>
      </div>
    </div>
  );
};

export default CarThumbnailMap;
