import React from "react";
import "./Product.css";

const Product = (props) => {
    const { name, seller, price, stock, img, star, features } = props.product;
    console.log(props.product);
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
                        <button className="add-btn">Add to cart</button>
                    </div>
                    <div className="product-features">
                        <p>Rating: {star}*</p>
                        <h3>Features</h3>
                        <ul>
                            {features.map((feature) => (
                                <li>
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
