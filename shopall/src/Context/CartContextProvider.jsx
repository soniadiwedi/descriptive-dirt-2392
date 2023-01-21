import { createContext, useEffect, useState } from "react";


export const CartContext= createContext();
export default function CartContextProvider({children}) {
    const [cart,setCart]=useState(JSON.parse(localStorage.getItem('cart'))||[]);

    const setCartItem=(obj)=>{
        setCart([...cart,obj]);
    }
useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart)||[]);
},[cart])
    console.log(cart);
    return <CartContext.Provider value={{cart,setCartItem}}>{children}</CartContext.Provider>

};
