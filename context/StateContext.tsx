import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Product } from "../types";

const Context = createContext({} as any);

export const StateContext = ({ children }: any) => {
    const [showCart, setShowCart] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<any>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [totalQuantities, setTotalQuantities] = useState<number>(0);
    const [qty, setQty] = useState<number>(1);

    const onAdd = ({ product, quantity }: any) => {
        const checkProductInCart = cartItems.find(
            (item: any) => item._id === product._id
        );

        setTotalPrice(
            (prevTotalPrice) => prevTotalPrice + product.price * quantity
        );
        setTotalQuantities(
            (prevTotalQuantities) => prevTotalQuantities + quantity
        );

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct: any) => {
                if (cartProduct._id === product._id)
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity,
                    };
            });

            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);
        }
        toast.success(`${quantity} ${product.name} added to the cart.`);
    };

    const increaseQuantity = () => {
        setQty((prevQty) => prevQty + 1);
    };

    const decreaseQuantity = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    };

    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                increaseQuantity,
                decreaseQuantity,
                onAdd,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
