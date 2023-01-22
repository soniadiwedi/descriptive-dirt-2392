import {Routes,Route} from "react-router-dom"
import Bedroom from "../Pages/Bedroom"
import CartPage from "../Pages/CartPage"
import Home from "../Pages/Home"
import NewinShopAll from "../Pages/NewinShopAll"
import Offers from "../Pages/Offers"
import Products from "../Pages/Products"
import SingleItem from "../Pages/SingleItem"
import LoginPage from "./LoginPage"
import PrivateRountes from "./PrivateRountes"



export default function AllRoutes() {
    

    return <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/bedroome" element={<Bedroom/>}/>           
            <Route path="/products/:id" element={<SingleItem/>}/>           
            <Route path="/newinShopAll" element={<NewinShopAll/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/cartpage" element={<PrivateRountes><CartPage/></PrivateRountes> }/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    
    </>
};
