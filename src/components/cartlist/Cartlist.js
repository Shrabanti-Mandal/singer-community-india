import React from 'react';

const Cartlist = (props) => {
    const {name}=props.cartName
    return (
        <div>
            <h5>You Votted for: {name}</h5>

        </div>
    );
};

export default Cartlist;