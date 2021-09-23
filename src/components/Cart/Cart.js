import React from "react";

const Cart = (props) => {
    const { cart } = props;
    const total = cart.reduce(
        (previous, current) => previous + current.price,
        0
    );
    // let total = 0;
    // cart.forEach((product) => {
    //     total += product.price;
    // });
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {props.cart.length}</p>
            <br />
            <p>Total: {total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
