import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
    const { name, seller, price, stock, img, star, features } = props.product;
    // console.log(props);

    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h2 className="product-name">{name}</h2>
                <p>
                    <small>By: {seller}</small>
                </p>
                <div className="product-info">
                    <div className="product-details">
                        <h3>${price}</h3>
                        <p>
                            <small>
                                Only {stock} left in stock - order soon!
                            </small>
                        </p>
                        <button
                            onClick={props.buttonHandler}
                            className="add-btn"
                        >
                            <FontAwesomeIcon icon={faShoppingCart} /> Add to
                            cart
                        </button>
                    </div>
                    <div className="product-features">
                        <Rating
                            initialRating={star}
                            readonly
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                        />
                        <h3>Features</h3>
                        <ul>
                            {features.map((feature) => (
                                <li key={feature.description}>
                                    {feature.description}: {feature.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
