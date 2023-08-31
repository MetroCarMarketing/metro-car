import React, { useEffect, useState } from "react";
import "../CSS/Img.css";


const Img = ({ className, src }) => {
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
            className={`${className}__img--skeleton skeleton`}
          ><span class="loader"></span></div>
        </>
      )}
    </>
  );
};

export default Img;
