import { Box, Heading ,Image } from "@chakra-ui/react"
import Footers from "./Footer"

export default function Offers() {
   


    return (
        <>
        <Box margin="auto" width="94%">
        <Image src="https://www.ikea.com/images/4e/c8/4ec8337e9084fa59cada03f6e6e19efc.jpg?f=sg"></Image>
        </Box>
        <Box marginLeft="10%" >
        <Image src="https://www.ikea.com/images/64/59/64590555f664d1bdd02bea79ec655a1e.jpg?f=l"></Image>
        </Box>
        <Footers/>
        </>
    )
};
