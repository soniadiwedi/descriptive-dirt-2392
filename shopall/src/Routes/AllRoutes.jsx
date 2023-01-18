import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import NewinShopAll from "../Pages/NewinShopAll"
import Offers from "../Pages/Offers"
import Products from "../Pages/Products"



export default function AllRoutes() {
    

    return <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/newinShopAll" element={<NewinShopAll/>}/>
            <Route path="/offers" element={<Offers/>}/>
        </Routes>
    
    </>
};
