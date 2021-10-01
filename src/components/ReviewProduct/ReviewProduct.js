import React from "react";

const ReviewProduct = (props) => {
    const { key, name, price, stock, quantity } = props.product;

    const { handleRemove } = props;

    return (
        <div className="product">
            <div className="details">
                <h2 className="product-name">{name}</h2>
                <div className="product-info">
                    <div className="product-details">
                        <h4>Quantity: {quantity}</h4>
                        <h3>${price}</h3>
                        <p>
                            <small>
                                Only {stock} left in stock - order soon!
                            </small>
                        </p>
                        <button
                            onClick={() => handleRemove(key)}
                            className="add-btn"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewProduct;
