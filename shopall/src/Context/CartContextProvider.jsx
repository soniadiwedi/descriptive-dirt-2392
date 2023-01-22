import { createContext, useEffect, useState } from "react";


export const CartContext= createContext();
export default function CartContextProvider({children}) {
    const [cart,setCart]=useState(JSON.parse(localStorage.getItem('cart'))||[]);
    const[totalprice,settotalprice]=useState(1)
    const setCartItem=(obj)=>{
        setCart([...cart,{...obj,quantity:1}]);
        
    }

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart)||[]);
    },[cart])

const remove=(id)=>{
    setCart([...cart.filter((el)=>el.id!=id)]);
}

const increQuantity=(id,val)=>{
    console.log(id,val);
   setCart([...cart.filter((el)=>{
        if(el.id==id){
           el.quantity=Number(el.quantity)+val;
        }
        return el;
   })])
}

const TotalPrice=()=>{
    let sum=0
    cart.forEach((el)=>{
      return  sum+=el.price*el.quantity

    })
        settotalprice(sum)
}


useEffect(()=>{
    TotalPrice()
},[cart])

    console.log(totalprice)   

    console.log(cart);
    return <CartContext.Provider value={{cart,setCartItem,setCart,remove,increQuantity,totalprice}}>{children}</CartContext.Provider>

};
