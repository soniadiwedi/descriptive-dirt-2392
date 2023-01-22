import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center
} from "@chakra-ui/react";
import { useContext } from "react";
import Toasts from "../Components/Toasts";
import { AuthContext } from "../Context/AuthContextProvide";




export default function LoginPage() {
  const{isAuth,login}=useContext(AuthContext)
  return (
    <Flex justify={"center"} mt={10}>
      <Stack mx={"auto"} w='85%'>
      
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}

        >
          <Center>Login</Center>
          <Stack spacing={4} >
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
             
              </Stack>
              <Button
                onClick={login}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                
                }}
              >
               <Toasts titlemsg="Welcome ....." des="" posi='top' msg="Log In"/>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
