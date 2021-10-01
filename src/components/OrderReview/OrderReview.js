import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import "./OrderReview.css";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
const OrderReview = () => {
    const [products, setProducts] = useProducts();

    const [cart, setCart] = useCart(products);

    const handleRemove = (key) => {
        const newCart = cart.filter((product) => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    };

    const handleClearCart = () => {
        setCart([]);
        clearTheCart();
    };

    return (
        <div className="review-container">
            <div className="product-container">
                <h3>Order Review Page</h3>
                <h2>Total Products: {cart.length}</h2>
                {cart.map((prod) => (
                    <ReviewProduct
                        handleRemove={handleRemove}
                        product={prod}
                    ></ReviewProduct>
                ))}
            </div>
            <div className="cart-conatiner">
                <Cart handleClearCart={handleClearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;
