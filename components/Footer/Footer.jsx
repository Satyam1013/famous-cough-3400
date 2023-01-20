import { ReactNode } from "react";
import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  FormControl,
  Input,
  Button,
  Heading,
  Flex,
  Image,
} from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons';
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
    const [email, setEmail] = useState('');
    const [state, setState] = useState(
      'initial'
    );
    const [error, setError] = useState(false);
  return (
    <Box bgColor={'#f3f3f3'} pt='40px'>
       <Flex
      minH={'20vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('#3f414d', 'gray.800')}>
      <Container
        maxW={'lg'}
        bg={useColorModeValue('#3f414d', 'whiteAlpha.100')}
        rounded={'lg'}
        p={6}
        direction={'column'}>
        <Heading
          as={'h2'}
          color='white'
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}>
          Get Special Offer In Your Inbox
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={(e) => {
            e.preventDefault();
            setError(false);
            setState('submitting');

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === 'fail@example.com') {
                setError(true);
                setState('initial');
                return;
              }

              setState('success');
            }, 1000);
          }}>
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
             
              id={'email'}
              type={'email'}
              required
              placeholder={'Your Email'}
              aria-label={'Your Email'}
              value={email}
              disabled={state !== 'initial'}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
              colorScheme={state === 'success' ? 'green' : 'blue'}
              isLoading={state === 'submitting'}
              w="100%"
              type={state === 'success' ? 'button' : 'submit'}>
              {state === 'success' ? <CheckIcon /> : 'Submit'}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          color={error ? 'red.500' : 'gray.500'}>
          {error
            ? 'Oh no an error occured! 😢 Please try again later.'
            : "You won't receive any spam! ✌️"}
        </Text>
      </Container>
    </Flex>
    <Box
      bg={useColorModeValue("#8c8d94", "gray.900")}
      color={useColorModeValue("white", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={"repeat(5,1fr)"}
          spacing={18}
        >
          <Stack spacing={6}>
            <Box>
              <Image w="65px" src="./imgg.png" alt="" />
            </Box>
            <Stack align={"flex-start"} fontSize={{base:'12px', lg:'16px'}}>
              <Link  _hover={{ color: "#fc2779" }} href={"#"}>
                Who are we?
              </Link>
              <Link _hover={{ color: "#fc2779" }} href={"#"}>
                Careers
              </Link>
              <Link _hover={{ color: "#fc2779" }} href={"#"}>
                Authenticity
              </Link>
              <Link _hover={{ color: "#fc2779" }} href={"#"}>
                Nikka CSR
              </Link>
              <Link _hover={{ color: "#fc2779" }} href={"#"}>
                Investor Relations
              </Link>
            </Stack>
          </Stack>
          <Stack align={"flex-start"} fontSize={{base:'12px', lg:'16px'}}>
            <ListHeader>Help</ListHeader>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Contact Us
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Features
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Store Locator
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Shipping 7 Delivery
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Sell on Nikka
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Frequency asked questions
            </Link>
          </Stack>
          <Stack align={"flex-start"} fontSize={{base:'12px', lg:'16px'}}>
            <ListHeader>Inspire Me</ListHeader>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Beauty Book
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Nikka TV
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Nikka Network
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Buying Guides
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Partners
            </Link>
          </Stack>
          <Stack align={"flex-start"} fontSize={{base:'12px', lg:'16px'}}>
            <ListHeader>Quick Links</ListHeader>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Offer Zone
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              New Launches
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Nikka Fashion
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Nikka Pro
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Status
            </Link>
          </Stack>
          <Stack align={"flex-start"} fontSize={{base:'12px', lg:'16px'}}>
            <ListHeader>Top Categories</ListHeader>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Makeup
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Skin
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Hair
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Bath & Body
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Mom & Baby
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Appliances
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Natural
            </Link>
            <Link _hover={{ color: "#fc2779" }} href={"#"}>
              Wellness
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    <Image src='./footer.png' alt=''/>
    </Box>
  );
}
