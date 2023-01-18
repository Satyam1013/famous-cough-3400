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
  } from "@chakra-ui/react";
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from "@chakra-ui/icons";
  // import Image from "next/image";
  
  export default function Dropdown() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          m='auto'
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
          width='80%'
          
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
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} alignItems='center'>
            {/* <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              Logo
            </Text> */}
            
  
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
         
        </Flex>
        <hr/>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  const NAV_ITEMS = [
   
    {
      label: "Makeup",
      children: [
        {
          label: "Explore Design Work",
          subLabel: "Trending Design to inspire you",
          href: "#",
        },
        {
          label: "New & Noteworthy",
          subLabel: "Up-and-coming Designers",
          href: "#",
        },
      ],
    },
    {
      label: "Skin",
      children: [
        {
          label: "Job Board",
          subLabel: "Find your dream design job",
          href: "#",
        },
        {
          label: "Freelance Projects",
          subLabel: "An exclusive list for contract work",
          href: "#",
        },
      ],
    },
    {
      label: "Hair",
      children: [
        {
          label: "Job Board",
          subLabel: "Find your dream design job",
          href: "#",
        },
        {
          label: "Freelance Projects",
          subLabel: "An exclusive list for contract work",
          href: "#",
        },
      ],
    },
    {
      label: "Appliances",
      children: [
        {
          label: "Job Board",
          subLabel: "Find your dream design job",
          href: "#",
        },
        {
          label: "Freelance Projects",
          subLabel: "An exclusive list for contract work",
          href: "#",
        },
      ],
    },
    {
        label: "Bath & Body",
        children: [
          {
            label: "Explore Design Work",
            subLabel: "Trending Design to inspire you",
            href: "#",
          },
          {
            label: "New & Noteworthy",
            subLabel: "Up-and-coming Designers",
            href: "#",
          },
        ],
      },
      {
        label: "Natural",
        children: [
          {
            label: "Job Board",
            subLabel: "Find your dream design job",
            href: "#",
          },
          {
            label: "Freelance Projects",
            subLabel: "An exclusive list for contract work",
            href: "#",
          },
        ],
      },
      {
        label: "Mom & Baby",
        children: [
          {
            label: "Job Board",
            subLabel: "Find your dream design job",
            href: "#",
          },
          {
            label: "Freelance Projects",
            subLabel: "An exclusive list for contract work",
            href: "#",
          },
        ],
      },
      {
        label: "Health & Wellness",
        children: [
          {
            label: "Job Board",
            subLabel: "Find your dream design job",
            href: "#",
          },
          {
            label: "Freelance Projects",
            subLabel: "An exclusive list for contract work",
            href: "#",
          },
        ],
      },
      {
        label: "Men",
        children: [
          {
            label: "Explore Design Work",
            subLabel: "Trending Design to inspire you",
            href: "#",
          },
          {
            label: "New & Noteworthy",
            subLabel: "Up-and-coming Designers",
            href: "#",
          },
        ],
      },
      {
        label: "Fragrance",
        children: [
          {
            label: "Job Board",
            subLabel: "Find your dream design job",
            href: "#",
          },
          {
            label: "Freelance Projects",
            subLabel: "An exclusive list for contract work",
            href: "#",
          },
        ],
      },
      {
        label: "Pop Ups",
        children: [
          {
            label: "Job Board",
            subLabel: "Find your dream design job",
            href: "#",
          },
          {
            label: "Freelance Projects",
            subLabel: "An exclusive list for contract work",
            href: "#",
          },
        ],
      },
  ];
  
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue("gray.600", "gray.200");
    const linkHoverColor = useColorModeValue("gray.800", "white");
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
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
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
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>

          </Box>
        ))}
            <Image width='60px' bgColor={'transparent'} src='https://th.bing.com/th/id/OIP.tdyx54w7Nvnfz2Q7DNbaiQHaDq?pid=ImgDet&rs=1' alt='sale'/>
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
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
  