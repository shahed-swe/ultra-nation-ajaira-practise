import React from 'react';

const Cart = (props) => {

    const cart = props.cart;

    // let totalpopulation = 0;
    // for(let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalpopulation += country.population;
    // }


    const totalpopulation = cart.reduce((sum, country) => {
        return sum + country.population;
    }, 0);
    return (
        <div>
            <h1>Total Number of Countries Added: {cart.length}</h1>
            <h2>Total Population: {totalpopulation}</h2>
        </div>
    );
};

export default Cart;