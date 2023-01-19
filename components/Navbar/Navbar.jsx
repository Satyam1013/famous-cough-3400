import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  Heading,
  Grid,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import Dropdown from "./Dropdown";
import Promo from "./Promo";
// import Image from "next/image";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Promo />
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        m="auto"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        width="80%"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems="center"
        >
          <Image width="50" height={"50"} src="images.png" alt="logo" />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          alignItems="center"
        >
          <Flex
            bgColor={"#f4f4f4"}
            p="0px 10px"
            borderRadius={"5px"}
            display={{ base: "none", md: "inline-flex" }}
            alignItems="center"
            width={"250px"}
          >
            <SearchIcon />
            <Input border={"transparent"} placeholder="Search on Nikka" />
          </Flex>

          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"#ed4a4e"}
            href={"#"}
            _hover={{
              bg: "pink.300",
            }}
            mr={{ lg: "50px" }}
          >
            Sign In
          </Button>

          <Image
            width="20px"
            height={"20px"}
            src="https://cdn-icons-png.flaticon.com/512/736/736943.png"
            alt="bag"
          />
        </Stack>
      </Flex>
      <hr />
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      <Dropdown />
    </Box>
  );
}
const NAV_ITEMS = [
  {
    label: "Categories",
    href: "#",
  },
  {
    label: "Brands",
    children: [
      {
        head: "POPULAR",
        img: "https://adn-static1.nykaa.com/media/wysiwyg/cms/beauty/menu/olaplex.png",
        img1: "https://adn-static2.nykaa.com/media/wysiwyg/2019/lorealparis.png",
        img2: "https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/FacesCanadaa.png",
        img3: "https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/LOTUS-HERBALS.png",
        img4: "https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Estee-Lauder.png",
      },
      {
        head: "LUXE",
        img: "https://adn-static2.nykaa.com/media/wysiwyg/lakme_mega_menu_header.png",
        img1: "https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Huda.png",
        img2: "https://adn-static2.nykaa.com/media/wysiwyg/HeaderIcons/The-Face-Shop.png",
        img3: "https://adn-static2.nykaa.com/media/wysiwyg/2019/niveaa.png",
        img4: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/murad.png",
      },
      {
        head: "ONLY AT NYKAA",
        img: "https://www.nykaa.com/media/wysiwyg/cms/beauty/menu/acnesquad.png",
        img1: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/gentlemans-crew.png",
        img2: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/gucci.png",
        img3: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/dior.png",
        img4: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/kay-beauty.png",
      },
      {
        head: "NEW LAUNCHES",
        img: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/laneige.png",
        img1: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/nykd-by-nykaa.png",
        img2: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/fyhp.png",
        img3: "https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/rsvp.png",
        img4: "https://adn-static2.nykaa.com/media/wysiwyg/ABCD-Two/See-All_CTA.png",
      },
    ],
  },
  {
    label: "Luxe",
    children: [
      {
        head: "Makeup",
        label: "Makeup Collection",
        subLabel: "Foundation",
        subLabel1: "Compact",
        subLabel2: "Highlighter",
        subLabel3: "Primer",
        subLabel4: "Blush",
        subLabel5: "Bronzer",
        href: "#",
      },
      {
        head: "Skin",
        label: "Face",

        subLabel: "Serums & Essence",
        subLabel1: "Face Moisturizers",
        subLabel2: "Cream",
        subLabel3: "Toner",
        subLabel4: "Face Mist",
        subLabel5: "Sunscreen",
        href: "#",
      },
      {
        head: "Fragrance",
        label: "Womens Fragrance",
        subLabel: "Gifts",
        subLabel1: "Deodorants",
        label1: "Mens Fragrance",
        subLabel2: "Perfumes",
        subLabel3: "Aftershave",
        subLabel4: "Face & Body Mist",
        subLabel5: "Deodorants",
        href: "#",
      },
      {
        head: "Hair",
        label: "Hair Care",
        subLabel: "Shampoo",
        subLabel1: "Conditioner",
        subLabel2: "Hair Oil",
        subLabel3: "Hair Serums & Masks",
        label1: "Tools & Accessories",
        subLabel4: "Dryers & Stylers",
        subLabel5: "Hair Brushes & Combs",
        lable2: "Hair Styling Collection",
        subLabel6: "Hair Spray",
        href: "#",
      },
      {
        head: "Bath & Body",
        label: "Bath",
        subLabel: "Shower Gels & Body",
        subLabel1: "Wash",
        subLabel2: "Soaps",
        subLabel3: "Scrubs",

        label1: "Body",
        subLabel4: "Body Lotion",
        subLabel5: "Body Oil",
        subLabel6: "Sunscreen",
        href: "#",
      },
    ],
  },
  {
    label: "Nikka Fashion",
    children: [
      {
        label: "What's New",
        subLabel: "Recently Added",
        label1: "Women",
        subLabel1: "Indianwear",
        subLabel2: "Westernwear",
        subLabel3: "Footwear",
        label2: "Men",
        subLabel4: "Bags",
        subLabel5: "Lingerie",
        subLabel6: "Watches",

        href: "#",
      },
      {
        label: "Tech",
        subLabel: "Smart Wearables",
        subLabel1: "Headphones",
        subLabel2: "Speakers",
        subLabel3: "Power Banks",

        label1: "Kids",
        subLabel4: "Feeding",
        subLabel5: "Toys & Games",
        subLabel6: "Winterwear",

        href: "#",
      },
      {
        label: "Home",
        subLabel: "Kitchen & Dining",
        subLabel1: "Decor",
        subLabel2: "Bath",
        subLabel3: "Storage",

        label1: "House Of Nikka",
        subLabel4: "Gajra Gang",
        subLabel5: "Pipa Bella",
        subLabel6: "Kica",

        href: "#",
      },
      {
        label: "Top Brands",
        subLabel: "Puma",
        subLabel1: "Campus",
        subLabel2: "Na-Kd",
        subLabel3: "Forever New",
        subLabel4: "Vero Moda",
        subLabel5: "Aurelia",
        subLabel6: "Shoetopia",

        href: "#",
      },
      {
        img: "https://www.nykaa.com/media/wysiwyg/2022/megamenu_winterwear.jpeg",
      },
    ],
  },
  {
    label: "Beauty Advice",
    children: [
      {
        img: "https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg",
        label: "BEAUTY BOOK",
        subLabel: "Nikka's Digital Magazine",

        href: "#",
      },
      {
        img: "https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png",
        label: "NYKAA TV",
        subLabel: "MAsterclasses By Experts & Vloggers",

        href: "#",
      },
      {
        img: "https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg",
        label: "BEAUTY BUYING GUIDES",
        subLabel: "Tips To Explore While You Shop",

        href: "#",
      },
    ],
  },
];

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={600}
                color={"black"}
                _hover={{
                  textDecoration: "none",
                  color: "#ed4a4e",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                minW={"4xl"}
              >
                <Stack
                  display={"grid"}
                  gridTemplateColumns="repeat(5,1fr)"
                  gridAutoRows={"auto"}
                >
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({
  img,
  img1,
  img2,
  img3,
  img4,
  head,
  label,
  label1,
  label2,
  href,
  subLabel,
  subLabel1,
  subLabel2,
  subLabel3,
  subLabel4,
  subLabel5,
  subLabel6,
}) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Button
        bgColor={"gray.100"}
        _hover={{ bgColor: "#ed4a4e", color: "white" }}
      >
        {head}
      </Button>
      <Flex
        direction={"row"}
        align={"center"}
        width="150px"
        justifyContent={"center"}
        mt="20px"
      >
        <Box>
          <Box>
            <Image src={img} alt="" />
            <Image src={img1} alt="" />
            <Image src={img2} alt="" />
            <Image src={img3} alt="" />
            <Image src={img4} alt="" />
          </Box>

          {/* <Text>{label}</Text> */}

          <Box display={"grid"} gap="10px">
            <Text fontSize={"15px"} color="#ed4a4e" fontWeight={"bold"}>
              {label}
            </Text>
            <Text fontSize={"12px"}>{subLabel}</Text>
            <Text fontSize={"12px"}>{subLabel1}</Text>
            <Text fontSize={"12px"}>{subLabel2}</Text>
            <Text fontSize={"15px"} color="#ed4a4e" fontWeight={"bold"}>
              {label1}
            </Text>

            <Text fontSize={"12px"}>{subLabel3}</Text>
            <Text fontSize={"12px"}>{subLabel4}</Text>
            <Text fontSize={"15px"} color="#ed4a4e" fontWeight={"bold"}>
              {label2}
            </Text>

            <Text fontSize={"12px"}>{subLabel5}</Text>
            <Text fontSize={"12px"}>{subLabel6}</Text>
          </Box>
        </Box>
        <Flex
          transition={"all .1s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Flex>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
