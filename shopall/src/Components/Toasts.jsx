import { Button, useToast } from '@chakra-ui/react'

function Toasts({titlemsg,msg,posi,des}) {
    const toast = useToast()
    return (
      <Button
      color="black"
      _hover="black"
        onClick={() =>
          toast({
            title: `${titlemsg}`,
            description: `${des}` ,
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: `${posi}`
          })
        }
      >
        {msg}
      </Button>
    )
  }

  export default Toasts