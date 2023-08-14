import React, { useEffect, useRef, useState } from "react";
import "../CSS/Slideshow.css";
import img1 from "../Assets/Carrousel/carr1.JPG";
import img2 from "../Assets/Carrousel/carr2.JPG";
import img3 from "../Assets/Carrousel/carr3.JPG";
import img4 from "../Assets/Carrousel/carr4.JPG";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";

const Slideshow = () => {
  const slideshow = useRef(null);
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  const [slide1, setSlide1] = useState();
  const [slide2, setSlide2] = useState();

  useEffect(() => {
    const image = new Image();
    image.src = img1;
    image.onload = () => {
      setTimeout(() => {
        setSlide1(image);
      }, 1000);
    };
    const image2 = new Image();
    image2.src = img2;
    image2.onload = () => {
      setTimeout(() => {
        setSlide2(image2);
      }, 1000);
    };
  });

  const next = () => {
    if (slideshow.current.children.length > 0) {
      const firstSlide = slideshow.current.children[0];

      slideshow.current.style.transition = `all .8s ease`;

      slideshow.current.style.transform = `translateX(-100%)`;

      const transition = () => {
        slideshow.current.style.transition = `none`;

        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(firstSlide);

        slideshow.current.removeEventListener("transitionend", transition);
      };

      slideshow.current.addEventListener("transitionend", transition);
    }
  };

  const prev = () => {
    if (slideshow.current.children.length > 0) {
      const lastIndex = slideshow.current.children.length - 1;
      const lastSlide = slideshow.current.children[lastIndex];

      slideshow.current.insertBefore(lastSlide, slideshow.current.firstChild);

      slideshow.current.style.transition = "none";
      slideshow.current.style.transform = "translateX(-100%)";

      setTimeout(() => {
        slideshow.current.style.transition = "all .8s ease";

        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    let timer;
    if (autoplayPaused === false) {
      timer = setInterval(next, 2000);
    }
    return () => clearInterval(timer);
  }, [autoplayPaused]);

  const pause = () => {
    setAutoplayPaused(true);
  };

  const play = () => {
    setAutoplayPaused(false);
  };

  return (
    <div
      onMouseEnter={pause}
      onMouseLeave={play}
      className="slideshow__container"
    >
      {slide1 ? (
        <>
          <div ref={slideshow} className="slideshow">
            <div className="slide">
              <img src={slide1.src} alt="" />
            </div>
            {slide2 ? (
              <>
                <div className="slide">
                  <img src={slide2.src} alt="" />
                </div>
                <div className="slide">
                  <img src={img3} alt="" />
                </div>
                <div className="slide">
                  <img src={img4} alt="" />
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="arrows">
            <Button onClick={prev}>
              <ChevronLeft className="left" />
            </Button>
            <Button onClick={next}>
              <ChevronRight className="right" />
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="slideshow__container--skeleton skeleton"></div>
        </>
      )}
      {/* {slide1 ? (
        <>
          <div ref={slideshow} className="slideshow">
            <div className="slide">
              <img src={img.src} alt="" />
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
        </>
      ) : (
        <><div className="slideshow__container--skeleton skeleton"></div></>
      )} */}
    </div>
  );
};

export default Slideshow;
