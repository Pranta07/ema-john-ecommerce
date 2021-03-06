import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const { cart } = props;
    // console.log(props.children);

    const totalItems = cart.reduce(
        (previous, current) => previous + current.quantity,
        0
    );

    const total = cart.reduce(
        (previous, current) => previous + current.price * current.quantity,
        0
    );

    const shippingTotal = cart.reduce(
        (previous, current) => previous + current.shipping,
        0
    );

    const tax = (total / 100) * 15;
    const grandTotal = total + shippingTotal + tax;

    return (
        <div className="cart">
            <h3 className="mid">Order Summary</h3>
            <p className="mid">
                <span className="bold">Items Ordered: </span>
                {totalItems}
            </p>
            <p className="tb-row">
                <span className="bold">Items: </span>
                <span>${total.toFixed(2)}</span>
            </p>
            <p className="tb-row">
                <span className="bold">Shipping: </span>
                <span>${shippingTotal.toFixed(2)}</span>
            </p>
            <p className="tb-row">
                <span className="bold">Tax: </span>
                <span>${tax.toFixed(2)}</span>
            </p>
            <p className="tb-row">
                <span className="bold">Total: </span>
                <span>${grandTotal.toFixed(2)}</span>
            </p>
            <div className="mid">{props.children}</div>
        </div>
    );
};

export default Cart;
