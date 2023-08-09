import React, { useEffect, useState } from "react";
import "../CSS/CarThumbnailMap.css";
import { useNavigate } from "react-router-dom";

const CarThumbnailMap = ({ item }) => {
  const navigateTo = useNavigate();

  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image()
    image.src = item.imageMain
    image.onload = () => {
      setTimeout(() => {
        setImg(image)
      },600)
    }
    
  })

  return (
    <div className="thumbnail" onClick={() => navigateTo(`/fleet/${item.id}`)}>
      {img ? (
        <>
          <figure className="thumbnail__wrapper">
            <img src={img.src} alt="" />
          </figure>
          <div className="thumbnail__info">
            <h2 className="thumbnail__title">{item.name}</h2>
            <h3 className="thumbnail__price number">
              $ {item.price} <span>/ h</span>
            </h3>
          </div>
        </>
      ) : (
        <>
        <div className="thumbnail__wrapper--skeleton skeleton"></div>
        <div className="thumbnail__title--skeleton skeleton"></div>
        <div className="thumbnail__price--skeleton skeleton"></div>
        </>
      )}
    </div>
  );
};

export default CarThumbnailMap;
