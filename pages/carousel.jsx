import React from 'react';
import { Box, Heading, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://images-static.nykaa.com/uploads/04d0c1d0-3bd5-49cd-8d38-655a9f3c003b.jpg?tr=w-1200,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/9ef6a6c2-9107-487c-8a4b-e886becea619.jpg?tr=w-1200,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/4cfa562a-2f35-4aa4-8df3-dab8650d23a2.jpg?tr=w-1200,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/4e0cc868-6e20-4dd9-9200-3e5dfa660a88.jpg?tr=w-1200,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/9ef6a6c2-9107-487c-8a4b-e886becea619.jpg?tr=w-1200,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/a294f8d2-8bb6-4912-9ac9-896cfa2685dc.jpg?tr=w-1200,cm-pad_resize'

  ];

  return (
    <Box
      position={'relative'}
      height={'400px'}
      width={'full'}
      overflow={'hidden'}
      borderRadius='10px'
      >
      <Text mt='20px' m='10px' fontWeight={'bold'} fontSize={{lg:'24px'}}>Best in Beauty</Text>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'sm'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}