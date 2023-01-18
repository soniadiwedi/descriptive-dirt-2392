import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar';
import {ChakraProvider} from "@chakra-ui/react"
import Navbars from './Routes/Menus';
import Home from './Pages/Home';
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div>
      
      <Navbar/>
      
      <AllRoutes/>
     
    </div>
  );
}

export default App;
