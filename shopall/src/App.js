import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar';
import {ChakraProvider} from "@chakra-ui/react"
import Navbars from './Routes/Menus';
import Home from './Pages/Home';
import AllRoutes from './Routes/AllRoutes';
import CartContextProvider from './Context/CartContextProvider';
function App() {
  return (
    <div>
  <CartContextProvider>

      <Navbar/>
      
      <AllRoutes/>
  </CartContextProvider>
     
    </div>
  );
}

export default App;
