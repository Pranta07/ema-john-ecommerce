import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const { cart } = props;

    let newCart = [];
    cart.forEach((cartProduct) => {
        if (newCart.find((newCartProduct) => newCartProduct === cartProduct)) {
            cartProduct["quantity"]++;
        } else {
            cartProduct["quantity"] = 1;
            newCart = [...newCart, cartProduct];
        }
    });
    // console.log(newCart);

    const total = cart.reduce(
        (previous, current) => previous + current.price,
        0
    );

    const shippingTotal = newCart.reduce(
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
                {props.cart.length}
            </p>
            <p className="tb-row">
                <span className="bold">Items: </span>
                <span>${total.toFixed(2)}</span>
            </p>
            <p className="tb-row">
                <span className="bold">Shipping: </span>
                <span>{shippingTotal.toFixed(2)}</span>
            </p>
            <p className="tb-row">
                <span className="bold">Tax: </span>
                <span>{tax.toFixed(2)}</span>
            </p>
            <p className="tb-row">
                <span className="bold">Total: </span>
                <span>{grandTotal.toFixed(2)}</span>
            </p>
        </div>
    );
};

export default Cart;
