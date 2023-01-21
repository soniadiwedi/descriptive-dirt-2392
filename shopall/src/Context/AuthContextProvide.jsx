import { createContext, useState } from "react";


const AuthContext=createContext()

const AuthContextProvider=({children})=>{
    const[isAuth,setisAuth]=useState(true)



    return (
        <>
        <AuthContext.Provider value={{isAuth}}>{children}</AuthContext.Provider>
        </>
    )
}