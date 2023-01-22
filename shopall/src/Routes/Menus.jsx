import { Button,Drawer,DrawerOverlay,DrawerContent,DrawerCloseButton,DrawerHeader,DrawerBody,Input,DrawerFooter,useDisclosure,Image, Heading, Text,
  UnorderedList, ListItem,useBreakpointValue, Flex, Center,Grid,Link} from "@chakra-ui/react"
import { Icon } from '@chakra-ui/react'
import {HamburgerIcon} from "@chakra-ui/icons"
import React from "react"
import { NavLink as navlink } from "react-router-dom"
import logo from './logo.jpg'



export default function Menus() {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>  
          <Grid templateRow='repeat(2, 1fr)'> 
          <Icon as={HamburgerIcon} onClick={onOpen} fontSize={30} />
          <Text>Menu</Text>
          </Grid>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader  >
                <Image src={logo} width="60%"/>
                <Heading as="h1"  size="xl"> Rooms NEW at SHOPALL Offers</Heading>
                <Text   fontFamily={'heading'} textAlign={useBreakpointValue({ base: 'center', md: 'left' })} style={{lineHeight:"20px"}} fontSize='md'>Tips and inspirations Currently at SHOPALL Track your order</Text>
            </DrawerHeader>
  
            <DrawerBody>
            <UnorderedList lineHeight={10} style={{listStyleType: "none"  }}>
                 <Link as={navlink} to="/products/bedroome"> <ListItem>Join SHOPALL Family</ListItem>
                    <ListItem>SHOPALL Business</ListItem>
                    <ListItem>SHOPALL Restaurant</ListItem>
                    <ListItem>Our stores</ListItem>
                    <ListItem>Design your room </ListItem>
                    <ListItem> Customer service </ListItem>
                    <ListItem>Download the SHOPALL app</ListItem></Link>  
                    </UnorderedList>

            
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </>
    )
};
