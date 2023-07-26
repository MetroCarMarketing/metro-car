import React, { useState } from "react";
import "../CSS/Carrousel.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Carrousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div id="Carrousel">
      <IconButton>
        <ChevronLeft onClick={goToPrevious} />
      </IconButton>
      <div>
        <img src={slides[currentIndex]} alt="" />
      </div>
      <IconButton>
        <ChevronRight onClick={goToNext} />
      </IconButton>
    </div>
  );
};

export default Carrousel;
