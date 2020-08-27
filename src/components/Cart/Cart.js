import React from 'react';

const Cart = (props) => {
    const cart = props.cart ;

    let total = 0 ;
    for(let i = 0 ; i< cart.length; i++){
        const course = cart[i];
        total = total + course.price;
    }
    return (
        <div>
            <h4 class="font-weight-bold">Order Summary</h4>
            <p class="font-weight-bolder">Course Order: {cart.length}</p>
            <p class="font-weight-bolder">Total Price: $ {total}</p>
            <button type="button" class="btn btn-dark">Check Out</button>
           
        </div>
    );
};

export default Cart;