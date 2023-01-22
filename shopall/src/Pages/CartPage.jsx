import { Stack,Heading,Divider,ButtonGroup,  Button, Image, Text, Wrap, WrapItem, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useState } from "react";
import { useEffect } from "react";
import Footers from "./Footer";

export default function CartPage() {
  const { cart,setCart,remove,increQuantity,totalprice } = useContext(CartContext);
  console.log(cart);
  const[price,setprice]=useState(0)
  /////////////////////////////////////////////////
 
 
 
 


//////////////////////////////////////////////////
  

////////////////////////////////////////////////////////
 
  return (
     <>
      <Heading> Cart Total :{totalprice}  </Heading>
    <Wrap>
      
      {
        cart.map((el)=>{
            return (
  <WrapItem>
            
            <Card maxW='sm'>
  <CardBody key={el.id}>
    <Image
      src={el.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    
    />
    <Stack mt='6' spacing='4'>
      <Heading size='md'>{el.category}</Heading>
      <Text>
       {el.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {el.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      
      <Button variant='ghost' onClick={()=>{increQuantity(el.id,-1)}} colorScheme='blue' _isdisabled={el.quantity==1}>
       -
      </Button>
      <Button >{el.quantity}</Button>
      <Button variant='ghost' onClick={()=>{increQuantity(el.id,1)}} colorScheme='blue' >
       +
      </Button>
      <Button variant='solid' colorScheme='blue' onClick={()=>remove(el.id)}>
       Remove
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</WrapItem> 
            
     )
     
        })
      }     
   </Wrap> 
    <Box marginTop="50%">
   <Footers/>
   </Box>
   </>   
  );
}
