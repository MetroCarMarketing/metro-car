import React, { useEffect, useState } from 'react';
import CarThumbnailMap from './CarThumbnailMap';

const HighlightMap = ({ translation, car }) => {
  
    return (
       <CarThumbnailMap item={car} translation={translation}/>
    );
}

export default HighlightMap;
