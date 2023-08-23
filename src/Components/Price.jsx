import React from 'react';

const Price = ({ price }) => {

    const nPrice = Number(price).toFixed(2)

    return (
        <span className="number">$ {nPrice} USD</span>
    );
}

export default Price;
