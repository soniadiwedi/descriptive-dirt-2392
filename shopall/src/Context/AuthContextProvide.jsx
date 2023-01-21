import { createContext, useState } from "react";


export const AuthContext=createContext()

const AuthContextProvider=({children})=>{
    const[isAuth,setisAuth]=useState(false)

    const login=()=>{
        setisAuth(true)
    }

    const logout=()=>{
        setisAuth(false)
    }

    return (
        <>
        <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>
        </>
    )
}

export default AuthContextProvider;