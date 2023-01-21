import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Icon,
  GridItem,
  Grid,
  Link
} from "@chakra-ui/react";
import { Link as navlink } from 'react-router-dom';

import { BiRupee } from "react-icons/bi";
import { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";

export default function NewProducts({ title, image, price, category,el }) {
  const{setCartItem}=useContext(CartContext)
  return (
    <Box>
      <Box>
    <div>
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
          
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              // backgroundImage: `url(${IMAGE})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              boxShadow="2xl"
              src={image}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {category}
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {title}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                <Icon as={BiRupee} />
                {price}
              </Text>
            </Stack>
          <Link onClick={()=>{setCartItem(el)}} ><Button>Add to Card</Button></Link>
          </Stack>
        </Box>
      </Center>
      {/*/////////////////////////////////////////////////////////  */}
    </div>


</Box>


</Box>

  );
}
