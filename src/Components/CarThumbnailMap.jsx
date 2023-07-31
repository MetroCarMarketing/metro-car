import React from "react";
import "../CSS/CarThumbnailMap.css";

const CarThumbnailMap = ({ translation, item }) => {
  return (
    <div className="thumbnail">
      <figure className="thumbnail__wrapper">
        <img src={item.imageMain} alt="" />
      </figure>
      <h2 className="thumbnail__title">{item.name}</h2>
    </div>
  );
};

export default CarThumbnailMap;
