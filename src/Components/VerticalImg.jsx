import React, { useEffect, useState } from "react";
import "../CSS/VerticalImg.css";

const VerticalImg = ({ className, src }) => {
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
        <figure className={`${className}__img--wrapper vertical__img--wrapper`}>
          <img src={img.src} alt="" />
        </figure>
      ) : (
        <>
          <div className={`${className}__img--skeleton vertical__skeleton skeleton`}><span class="loader"></span></div>
        </>
      )}
    </>
  );
};

export default VerticalImg;
