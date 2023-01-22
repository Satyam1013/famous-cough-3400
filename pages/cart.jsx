import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Grid, Heading, Image, Input, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [user, setUser] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const checkout = () => {
  alert('Your Order Will Be Dispatch in 5 days')
  }
  useEffect(() => {
    const value = localStorage.getItem('cart');
    const user = !!value ? JSON.parse(value) : undefined;
    setUser(user)
    console.log(user.img)
  }, [])
  return (<>
    <Heading m='20px' textAlign={'center'}>Cart Page</Heading>
    <Grid w='90%' m={'auto'} templateColumns={('repeat(3,1fr)')}>
    <Box width={'300px'} border='1px solid gray'>
      <Image m='auto' src={user.img} alt="" />
      <Text fontWeight={'600'} textAlign={'center'} w='300px'>{user.title}</Text>
      <Text fontWeight={'600'} textAlign={'center'}>{user.disc_price}</Text>
      </Box>
    </Grid>
    <Center m='20px'>
    <Button borderRadius={''} bgColor='#ed4a4e' color={'white'} ref={btnRef} onClick={onOpen}>Proceed</Button>

    </Center>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={'30px'}>New Address</DrawerHeader>
          <br/>
          <DrawerHeader>Address</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Pincode' />
            <Input mt='20px' placeholder='House/Flat/Office No.' />
            <Input mt='20px'  placeholder='Road Name/ Area/ Colony' />

          </DrawerBody>
          <DrawerHeader>Contact</DrawerHeader>
          <DrawerBody>
            <Input placeholder='Name' />
            <Input mt='20px' placeholder='Phone' />
            <Input mt='20px' placeholder='Email ID (Optional)' />

          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button borderRadius={''} bgColor='#ed4a4e' color={'white'} onClick={checkout}>CHECKOUT</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  </>
  );
};

export default Cart;
