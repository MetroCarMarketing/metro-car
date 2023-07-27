import React, { useRef } from "react";
import "../CSS/Slideshow.css";
import img1 from "../Assets/Carrousel/carr1.JPG";
import img2 from "../Assets/Carrousel/carr2.JPG";
import img3 from "../Assets/Carrousel/carr3.JPG";
import img4 from "../Assets/Carrousel/carr4.JPG";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";

const Slideshow = () => {
  const slideshow = useRef(null);
  const currentSlide = slideshow.current;

  const next = () => {
    if (currentSlide.children.length > 0) {
      const firstSlide = currentSlide.children[0];

      currentSlide.style.transition = `all .8s ease`;

      currentSlide.style.transform = `translateX(-100%)`;

      const transition = () => {
        currentSlide.style.transition = `none`;

        currentSlide.style.transform = `translateX(0)`;

        currentSlide.appendChild(firstSlide);

        currentSlide.removeEventListener('transitionend', transition)
      };

      currentSlide.addEventListener("transitionend", transition);
    }
  };

  const prev = () => {
    if (currentSlide.children.length > 0) {
      const lastIndex = currentSlide.children.length - 1;
      const lastSlide = currentSlide.children[lastIndex];

      currentSlide.insertBefore(lastSlide, currentSlide.firstChild);

      currentSlide.style.transition = "none";
      currentSlide.style.transform = "translateX(-100%)";

      setTimeout(() => {
        currentSlide.style.transition = "all .8s ease";

        currentSlide.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <div className="slideshow__container">
      <div ref={slideshow} className="slideshow">
        <div className="slide">
          <img src={img1} alt="" />
        </div>
        <div className="slide">
          <img src={img2} alt="" />
        </div>
        <div className="slide">
          <img src={img3} alt="" />
        </div>
        <div className="slide">
          <img src={img4} alt="" />
        </div>
      </div>

      <div className="arrows">
        <Button onClick={prev}>
          <ChevronLeft className="left" />
        </Button>
        <Button onClick={next}>
          <ChevronRight className="right" />
        </Button>
      </div>
    </div>
  );
};

export default Slideshow;
