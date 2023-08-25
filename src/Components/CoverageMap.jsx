import React from 'react';
import '../CSS/CoverageMap.css'

const CoverageMap = ({ src }) => {
    return (
        <div className='coverage__map--wrapper'>
            <iframe title='bogotaMap' src={src}></iframe>
        </div>
    );
}

export default CoverageMap;
