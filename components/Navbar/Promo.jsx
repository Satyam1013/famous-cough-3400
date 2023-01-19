import { Box, Flex, Text, Image, Fade } from "@chakra-ui/react";
import React from "react";


const Promo = () => {
  return (
    <Flex
      height={"40px"}
      bgColor={"#fe93bc"}
      justifyContent="space-around"
      alignItems={"center"} fontWeight='medium'
      display={{base:'none',md:'none',lg:'flex'}}
    >
      <Box _hover={{color:'white'}}>
  BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals
      </Box>
      
      <Flex gap='12px' >
        <Flex alignItems={'center'} gap='5px' _hover={{color:'white'}}  >
     <Image width='20px' h={'19px'} src='https://cdn-icons-png.flaticon.com/512/244/244210.png' alt='phone'/>
          <Text>Get App</Text>
        </Flex>
        
|

        <Flex alignItems={'center'} gap='5px'  _hover={{color:'white'}}>
            <Image width={'22px'} height='18px' src='https://cdn-icons-png.flaticon.com/512/2838/2838912.png' alt='location'/>
            <Text>Store & Events</Text>
        
        </Flex>

              
|

<Flex alignItems={'center'} gap='5px'  _hover={{color:'white'}}>
    <Image width={'20px'} src='https://cdn-icons-png.flaticon.com/512/612/612804.png' alt='location'/>
    <Text>Gift Card</Text>

</Flex>

      
|

<Flex alignItems={'center'} gap='5px'  _hover={{color:'white'}}>
    <Image width={'18px'} height='18px' src='https://cdn-icons-png.flaticon.com/512/471/471664.png' alt='location'/>
    <Text>Help</Text>

</Flex>
      </Flex>
    </Flex>
  );
};

export default Promo;
