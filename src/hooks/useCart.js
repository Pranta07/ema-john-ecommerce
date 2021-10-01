/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (products.length) {
            const localCart = getStoredCart();
            const newCart = [];
            for (const key in localCart) {
                const prod = products.find((product) => product.key === key);
                prod.quantity = localCart[key];
                newCart.push(prod);
            }
            setCart(newCart);
        }
    }, [products]);

    return [cart, setCart];
};

export default useCart;
