import React from 'react';

const Watermark = ({ translation }) => {
    return (
        <div className='watermark'>
            <h1>{translation.watermark}</h1>
        </div>
    );
}

export default Watermark;
