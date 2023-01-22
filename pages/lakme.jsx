import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

export async function getStaticProps() {
  const res = await axios.get("http://localhost:3001/lakme");
  const posts = res.data;

  return {
    props: {
      posts,
    },
  };
}
export default function Lakme({ posts }) {
  const handleCart = (el) => {
    localStorage.setItem("cart", JSON.stringify({ ...el }));
  };

  return (
    <Box m="auto" bgColor={"#f3f3f3"}>
      {/* <cart handleCart={handleCart}/> */}
      <Text mt="30px" fontSize={"30px"} fontWeight="600" textAlign={"center"}>
        All Products
      </Text>
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="20px"
        w="80%"
        m={"auto"}
      >
        {posts.map((el) => (
          <Grid
            key={el.type}
            bgColor={"white"}
            m="auto"
            width="300px"
            justifyContent={"center"}
          >
            <Image m="auto" src={el.img} alt="" />
            <Text
              m="auto"
              fontSize={"14px"}
              w="280px"
              mt="10px"
              textAlign={"center"}
              fontWeight="600"
            >
              {el.title}
            </Text>
            <Flex m="auto" gap="5px">
              <Text>MRP: </Text>
              <Text textDecoration={el.disc_price ? "line-through" : "none"}>
                {el.original_price}
              </Text>
              <Text fontWeight="bold">{el.disc_price}</Text>
              <Text color="green.400">{el.disc_rate}</Text>
            </Flex>
            <Text m="auto" color={"#ed4a4e"}>
              Get Free Product
            </Text>
            <Text m="auto">{el.rating}</Text>
            <Button
              w="300px"
              mt="20px"
              borderRadius={"0"}
              color="white"
              bgColor="#ed4a4e"
              onClick={() => handleCart(el)}
            >
              Add to Bag
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
