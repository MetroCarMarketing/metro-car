import React from 'react';
import CarThumbnailMap from './CarThumbnailMap';

const HighlightMap = ({ translation, car, language }) => {
  
    return (
       <CarThumbnailMap item={car} translation={translation} language={language}/>
    );
}

export default HighlightMap;
