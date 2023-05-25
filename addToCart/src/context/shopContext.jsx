import { createContext, useState } from "react";
import products from '../products';

export const ShopContext = createContext();


const getDefaultCart = () => {
    let cart={};

    for(let i=1; i< products.length + 1; i++){
        cart[i]=0;
    }
    return cart;
};

const ShopContextProvider = ({children}) => {

    const [cartList, setCartList] = useState(getDefaultCart());

    const getTotalAmount = () => {
        let totalAmount = 0;

        for(const item in cartList){
            if(cartList[item]>0){
                let itemInfo = products.find((p)=>Number(item) === p.id);
                totalAmount += cartList[item] * itemInfo.price;
            }
        }
        return totalAmount
    }

    const addToCart = (itemId) => {
        setCartList((prev)=>({...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartList((prev)=>({...prev, [itemId]: prev[itemId] - 1 }))
    }

    const contextValue = {
        cartList, addToCart, removeFromCart, getTotalAmount
    }

    return <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>
};

export default ShopContextProvider;