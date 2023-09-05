import React, { useEffect, useState } from "react";
import "../CSS/CarThumbnailMap.css";
import { useNavigate } from "react-router-dom";
import { Check } from "@mui/icons-material";

const CarThumbnailMap = ({ item, translation, language }) => {
  const navigateTo = useNavigate();

  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = item.imageMain;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 600);
    };
  });

  return (
    <div className="thumbnail" onClick={() => navigateTo(`/fleet/${item.id}`)}>
      {img ? (
        <>
          <figure className="thumbnail__wrapper">
            <img src={img.src} alt="" />
          </figure>
          <div className="thumbnail__info">
            <span>
              <h2 className="thumbnail__title">{item.brand}</h2>
              {language === "english" ? (
                <h2 className="thumbnail__title">{item.name}</h2>
              ) : (
                <h2 className="thumbnail__title">{item.nameEsp}</h2>
              )}
            </span>
            <h3 className="thumbnail__price number">
              $ {item.priceHour} <span>/ h</span>
            </h3>
            <div className="thumbnail__organizer">
              <h4>
                pax : <span className="number">{item.pax}</span>
              </h4>
              <Check />
            </div>
            <div className="thumbnail__organizer">
              <h4>
                {translation.bags} : <span className="number">{item.bags}</span>
              </h4>
              <Check />
            </div>
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
