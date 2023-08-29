import React, { useEffect, useState } from "react";
import "../CSS/VerticalImg.css";

const VerticalImg = ({ className, src, skeleton }) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 600);
    };
  });

  return (
    <>
      {img ? (
        <figure className={`${className}__img--wrapper vertical--img__wrapper`}>
          <img src={img.src} alt="" />
        </figure>
      ) : (
        <>
          <div className={`${skeleton} skeleton`}></div>
        </>
      )}
    </>
    // <figure className={className}>
    //   <img src={src} alt="" />
    // </figure>
  );
};

export default VerticalImg;
