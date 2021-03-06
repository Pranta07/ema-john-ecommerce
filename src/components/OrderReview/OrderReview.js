import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import "./OrderReview.css";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import { Link } from "react-router-dom";
const OrderReview = () => {
    const [products, setProducts] = useProducts();

    const [cart, setCart] = useCart(products);

    const handleRemove = (key) => {
        const newCart = cart.filter((product) => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    };

    const handlePlaceOrder = () => {
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
                        key={prod.key}
                        handleRemove={handleRemove}
                        product={prod}
                    ></ReviewProduct>
                ))}
            </div>
            <div className="cart-conatiner">
                <Cart cart={cart}>
                    <Link to="/shop">
                        <button onClick={handlePlaceOrder} className="add-btn">
                            Place Order
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;
