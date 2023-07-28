import React from 'react';
import Carmap from '../Components/Carmap';

const Coverage = ({ translation, cars }) => {
    return (
        <div>
            <Carmap translation={translation} cars={cars}/>
        </div>
    );
}

export default Coverage;
