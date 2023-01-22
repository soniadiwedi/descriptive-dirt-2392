import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    HStack,
    Link,    
    Button
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  import { BiRupee } from "react-icons/bi";

  import {Link as lanvlink} from "react-router-dom"
import { useContext } from 'react';
import { CartContext } from '../Context/CartContextProvider';
import Toasts from '../Components/Toasts'; 
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };
  
//   interface RatingProps {
//     rating: number;
//     numReviews: number;
//   }
  
  function Rating({ rating, numReviews }) {
    numReviews=Math.floor(Math.random()*1000)
    return (
        <>
        <HStack d="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
      
      </HStack>
      <HStack>
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </HStack>
      
        </>
      
    );
  }
  
  function SingleProduct({id,image,description,category,discount,name,rating,price,el}) {

    const {setCartItem}= useContext(CartContext);

    return (
      <Flex marginBottom="10px" paddingBottom="40px" w="90%" alignItems="center" justifyContent="center" margin="auto" boxShadow="l" >
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          minH="md"
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <Image
          minH="md"
            maxH="md"
            src={image}
            alt={name}
            roundedTop="lg"
            
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="l" colorScheme="red">
                  {name}
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="l"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {/* {data.name} */}
                {category}
              </Box>

                

              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                 <Icon onClick={()=>{setCartItem(el)}} as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                 
                </chakra.a>
              </Tooltip>
            </Flex>
            <Box>
                {/* {description} */}
                </Box>
                
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={data.rating} numReviews={data.numReviews} />
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                    <Icon as={BiRupee}/>
                </Box>
               
                {price}
              </Box>
              
            </Flex>
            <Link as={lanvlink} to={`/products/${id}`}>More Information</Link>
            {/* <Button>More Information</Button> */}
          </Box>
        </Box>
      </Flex>

                

    );
  }
  
  export default SingleProduct
  ;