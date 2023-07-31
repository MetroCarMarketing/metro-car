import React from "react";
import "../CSS/CarThumbnailMap.css";
import { useNavigate } from "react-router-dom";

const CarThumbnailMap = ({ item }) => {

  const navigateTo = useNavigate();


  return (
    <div className="thumbnail" onClick={() => navigateTo(`/fleet/${item.id}`)}>
      <figure className="thumbnail__wrapper">
        <img src={item.imageMain} alt="" />
      </figure>
      <div className="thumbnail__info">
        <h2 className="thumbnail__title">{item.name}</h2>
        <h3 className="thumbnail__price number">
          $ {item.price} <span>/ h</span>
        </h3>
      </div>
    </div>
  );
};

export default CarThumbnailMap;
