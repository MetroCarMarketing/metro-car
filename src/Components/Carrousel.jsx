import React, { useState } from "react";
import "../CSS/Carrousel.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Carrousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    aspectRatio: '16 / 9',
    borderRadius: "10px",
    backgroundImage: `url(${slides[currentIndex].img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const goToPrevious = () => {
    const firstSlide = currentIndex === 0
    const newIndex = firstSlide ? slides.length -1 : currentIndex -1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const lastSlide = currentIndex === slides.length - 1
    const newIndex = lastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div id="Carrousel" style={sliderStyles}>
        <ChevronLeft onClick={goToPrevious} />
      <div style={slideStyles}></div>
        <ChevronRight onClick={goToNext}/>
    </div>
  );
};

export default Carrousel;
