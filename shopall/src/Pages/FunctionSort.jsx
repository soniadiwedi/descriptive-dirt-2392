import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    
  } from '@chakra-ui/react'


export default function FunctionSort({setorder}) {


 


  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Sort By Price
        </MenuButton>
        <MenuList>
        

          <MenuItem onClick={()=>{setorder("asc")}}>Low to High</MenuItem>
          <MenuItem onClick={()=>{setorder("desc")}}>High to Low</MenuItem>
          
        </MenuList>
      </Menu>
    </>
  );
}
