import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    //products to be rendered on UI
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    /* useEffect(() => {
        if (products.length) {
            const localCart = getStoredCart();
            const newCart = [];
            for (const key in localCart) {
                const addedProduct = products.find(
                    (product) => product.key === key
                );
                addedProduct.quantity = localCart[key];
                // console.log(key, addedProduct);
                newCart.push(addedProduct);
            }
            setCart(newCart);
        }
    }, [products]); */

    const handleAddToCart = (product) => {
        const prod = cart.find((prod) => prod.key === product.key);
        if (prod) {
            const newCart = cart.map((prod) => {
                if (prod.key === product.key) {
                    prod.quantity++;
                }
                return prod;
            });
            setCart(newCart);
        } else {
            product.quantity = 1;
            setCart([...cart, product]);
        }
        addToDb(product.key);
    };

    const handleSearch = (ev) => {
        const searchText = ev.target.value;
        console.log(searchText);
        const searchProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setDisplayProducts(searchProducts);
    };

    return (
        <div>
            <div className="search-container">
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search here"
                />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {displayProducts.map((product) => (
                        <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={() => handleAddToCart(product)}
                        ></Product>
                    ))}
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="add-btn">Review Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
