import { Stack,Heading,Divider,ButtonGroup,  Button, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function CartPage() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
   
    <Wrap>
   
  

      {
        cart.map((el)=>{
            return (
  <WrapItem>
            
            <Card maxW='sm'>
  <CardBody >
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
      
      <Button variant='ghost' colorScheme='blue'>
       +
      </Button>
      <Button>1</Button>
      <Button variant='ghost' colorScheme='blue'>
       -
      </Button>
      <Button variant='solid' colorScheme='blue'>
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
  );
}
