import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Icon,
  Text,
  Grid,
  Heading,
  Flex,
  Box,
  ButtonGroup,
  Spacer,
  Stack,
  useColorModeValue,
  HStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { BiUser } from "react-icons/bi";
import LoginPage from "./LoginPage";
export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      
      <Icon _hover={{bg:"grey",cursor:"pointer"}}  as={BiUser} onClick={onOpen} fontSize={30}>Hej! Log in or sign up</Icon>
      <Text>Hej! Log in or sign up</Text>
     
      
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="white">
            <Flex justify={"center"}>
              <Stack mx={"auto"} maxW={"sm"}>
               
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={6}
                >
                  <Stack >
                    <HStack>
                      <Box>
                        <FormControl id="firstName" isRequired>
                          <FormLabel>First Name</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id="lastName">
                          <FormLabel>Last Name</FormLabel>
                          <Input type="text" />
                        </FormControl>
                      </Box>
                    </HStack>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input type={showPassword ? "text" : "password"} />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        Sign up
                      </Button>
                    </Stack>
                  
                  </Stack>
                </Box>
              </Stack>
            </Flex>
            <LoginPage />
          </DrawerHeader>

          <DrawerBody>
           
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
