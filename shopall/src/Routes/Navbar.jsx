import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  Badge
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Search2Icon,

} from '@chakra-ui/icons';
import logo from './logo.jpg'
import Menus from './Menus';
import Login from './Login';
import { FiTruck } from "react-icons/fi";
import { BsFillBasket2Fill,BsSearch } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvide';
import { Link as navlink } from 'react-router-dom';
import { CartContext } from '../Context/CartContextProvider';





export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
 
const {cart}=useContext(CartContext);
  const links=[{path:"/", title:"Home"},{path:"/products", title:"Products"},{path:"./newinShopAll", title:"NewinShopAll"},{path:"/offers", title:"Offers"}]
  const style={
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    textDecoration:'none',
    padding:'20px',
    width:"40%"
  }


  return (
    <Box>
      <Flex margin="auto" width="94%"
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
       <Menus/>
          <Flex display={{ base: 'none', md: 'flex' }} alignItems='center' ml={10}>
           <Link as={navlink} to="/"> <Image src={logo}  width="50%"/></Link>
                <Input placeholder="What are you looking for?" borderRadius='none' variant='filled' htmlSize={60} padding={6}   />
                <Button size='md' pt='1.6rem' pb='1.6rem' borderRadius='none'><Icon fontSize='28' as={BsSearch}></Icon></Button>
              </Flex>
        </Flex>
        <Flex alignItems='center' justifyContent='space-around' w='30%'>

        <Login/>

        <Icon as={FiTruck} fontSize="25"></Icon> 
        <Box><Link as={navlink} to='/cartpage'><Icon as={BsFillBasket2Fill} fontSize="25" ></Icon>
        <Badge colorScheme='green' position='absolute'>{cart.length}</Badge>
        </Link>
        </Box>
        </Flex>
      </Flex>
      <Box style={style}>
      {
          links.map((el)=>{
                return ( <NavLink style={({isActive})=>{
                    return isActive? { textDecoration:'none'}:
                          { textDecoration:'none', color:"black"}
                        }} key={el.path} to={el.path}>{el.title}</NavLink>)
                    })
                }
      </Box>

    </Box>
  );
}






  
 

