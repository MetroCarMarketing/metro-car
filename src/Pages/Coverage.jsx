import React from 'react';
import Carmap from '../Components/Carmap';

const Coverage = ({ translation, cars }) => {
    return (
        <div className="container top__container">
            <div className="row">
                <div className='coverage'>
                    <Carmap translation={translation} cars={cars} />
                </div>
            </div>
        </div>
    );
}

export default Coverage;
