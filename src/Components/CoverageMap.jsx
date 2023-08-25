import React from 'react';
import '../CSS/CoverageMap.css'

const CoverageMap = ({ title, src }) => {
    return (
        <div className='coverage__map--wrapper'>
            <iframe title={title} src={src}></iframe>
        </div>
    );
}

export default CoverageMap;
