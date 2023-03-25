import React from 'react';

const Cosmetic = (props) => {
    const {name, price, id} =props.cosmetic
    return (
        <div>
            <h3>Buy this: {name}</h3>
            <p>Only for: $ {price}</p>
            <p><small>It has id: {id}</small></p>
        </div>
    );
};

export default Cosmetic;