import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvide";
import {Navigate} from "react-router-dom"


export default function PrivateRountes({children}) {
  const{isAuth}=useContext(AuthContext)
  
  if(!isAuth){
    return <Navigate to= "/login"/>
  }

  return children
};



