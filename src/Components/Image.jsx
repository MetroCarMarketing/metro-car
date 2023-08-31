import React, { useEffect, useState } from "react";
import "../CSS/Image.css";


const Image = ({ className, src }) => {
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
        <figure className={`${className}__img--wrapper img--wrapper`}>
          <img src={img.src} alt="" />
        </figure>
      ) : (
        <>
          <div
            className={`${className}__img--skelton skeleton skeleton`}
          ></div>
        </>
      )}
    </>
  );
};

export default Image;
