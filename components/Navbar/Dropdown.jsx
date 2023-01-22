import {
  Box,
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Link,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import Image from "next/image";

export default function Dropdown() {

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        m="auto"
        minH={"50px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        align={"center"}
        width="100%"
        display={{ base: "none", md: "none", lg: "flex" }}
        justifyContent="center"
      >
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "space-around" }}
          alignItems="center"
        >
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
      <hr />
     
    </Box>
  );
}
const NAV_ITEMS = [
  {
    label: "Makeup",
    href: "/makeup",
    children: [
      {
        label: "Face",
        subLabel: "Face Primer",
        subLabel1: "Concealer",
        subLabel2: "Foundation",
        subLabel3: "Compact",
        subLabel4: "Contour",
        subLabel5: "Loose Powder",
        subLabel6: "Face Primer",
        subLabel7: "Face Primer",

        href: "/#",
      },
      {
        label: "Eyes",
        subLabel: "Kajal",
        subLabel1: "Eyeliner",
        subLabel2: "Mascara",
        subLabel3: "Eye Shadow",
        subLabel4: "Eye Brow Enhancers",
        subLabel5: "False Eyelashes",
        subLabel6: "Eye Makeup Remover",
        label1: "Makeup Kits & Combos",
        subLabel7: "Contact Lenses",
        subLabel8: "Makeup Remover",
        subLabel9: "Sindoor",
        href: "#",
      },
      {
        label: "Lips",
        subLabel: "Lipstick",
        subLabel1: "Liquid Lipstick",
        subLabel2: "Lip Crayon",
        subLabel3: "Lip Gloss",
        subLabel4: "Lip Liner",
        subLabel5: "Lip Plumper",
        subLabel6: "Lip Stain",
        label1: "Nails",
        subLabel7: "Nail Polish",
        subLabel8: "Nail Art Kits",
        subLabel9: "Nail Care",

        href: "#",
      },
      {
        label: "Tools & Brushes",
        subLabel: "Face Brush",
        subLabel1: "Eye Brush",
        subLabel2: "Lip Brush",
        subLabel3: "Brush Sets",
        subLabel4: "Brush Cleaners",
        subLabel5: "Eyelash Curlers",
        subLabel6: "Mirrors",
        subLabel7: "Makeup Pouches",
        subLabel8: "Sharpeners",
        subLabel9: "Tweezers",
        label1: "Multi-Functional Makeup",
        href: "#",
      },
      {
        label: "Top Brands",
        subLabel: "Kay Beauty",
        subLabel1: "Huda Beauty",
        subLabel2: "Charlotte Tilbury",
        subLabel3: "M.A.C",
        subLabel4: "Maybelline New York",
        subLabel5: "L'Oreal Paris",
        subLabel6: "Nikka Cosmetics",
        subLabel7: "Lakme",
        subLabel8: "Nyx Pro.Makeup",

        href: "#",
      },
      {
        label: "Ouick Links",
        subLabel: "Combos @ Nikka",
        subLabel1: "New Launches",
        subLabel2: "NFBA Nominess 2022",
        subLabel3: "Gifts @ Nikka",
        subLabel4: "The Gift Store",
        label1: "Trending Searches",
        subLabel5: "Nude Lipstick",
        subLabel6: "Matte Lipstick",
        subLabel7: "Red Lipstick",
        subLabel8: "Pink Lipstick",

        href: "#",
      },
    ],
  },
  {
    label: "Skin",
    children: [
      {
        label: "Mosturizers",
        subLabel: "Face Moisturizers",
        subLabel1: "Cream",
        subLabel2: "Night Cream",
        subLabel3: "Face Oils",
        subLabel4: "All Purpous Gels",
        label1: "Cleansers",
        subLabel5: "Face Wash",
        subLabel6: "Micellar Water",
        subLabel7: "Face Wipes",
        subLabel8: "Makeup Remover",
        subLabel7: "Scrubs & Exfoliators",

        href: "#",
      },
      {
        label: "Trending",
        subLabel: "Toners Under 100",
        subLabel1: "Fash Wash For Oily Skin",
        subLabel2: "Oil Free Face",
        subLabel3: "Moisturizers",
        subLabel4: "Lip Balm Under 500",
        subLabel5: "Vitamin C Serum",
        label1: "Masks",
        subLabel6: "Sheet Masks",
        subLabel7: "Masks & Peels",
        subLabel8: "Face Packs",
        subLabel9: "Face Bleach",
        href: "#",
      },
      {
        label: "Body Care",
        subLabel: "Lotions & Creams",
        subLabel1: "Body Butter",
        subLabel2: "Massage Oils",
        subLabel3: "Shower Gels & Body",
        subLabel4: "Wash",
        subLabel5: "Soaps",
        subLabel6: "Scrubs",
        label1: "Hands & Feet",
        subLabel7: "Foot Creams",
        subLabel8: "Hand & Foor Masks",

        href: "#",
      },
      {
        label: "Specialised Skincare",
        subLabel: "Acne Spot Correctors",
        subLabel1: "Nose Strips",
        subLabel2: "Facial Peels",
        label1: "Eye Care",
        subLabel3: "Under Eye Cream & Serums",
        subLabel4: "Eye Masks",
        label2: "Lip Care",
        subLabel5: "Lip Balm",
        subLabel6: "Lip Scrubs",
        subLabel7: "Lip Masks",
        href: "#",
      },
      {
        label: "Kits & Combos",
        subLabel: "Facial Kits",
        subLabel1: "Combos @ Nikka",
        subLabel2: "Gift Sets",
        label1: "Skin Tools",
        subLabel3: "Face Massagers",
        subLabel4: "Cleansing Brushes",
        subLabel5: "Blackhead Remover",
        label2: "Skin Suppplements",
        subLabel6: "Vitamins & Minerals",
        subLabel7: "Ayurveda Herbs",

        href: "#",
      },
      {
        label: "Shop By Concern",
        subLabel: "Acne",
        subLabel1: "Dull  Skin",
        subLabel2: "Pigmentation",
        subLabel3: "Pores",
        subLabel4: "Oil Control",
        label1: "Quick Links",
        subLabel5: "NFBA Nominees 2022",
        subLabel6: "The Gift Store",

        href: "#",
      },
    ],
  },
  {
    label: "Hair",
    children: [
      {
        label: "Hair Care",
        subLabel: "Shampoo",
        subLabel1: "Hair Cream",
        subLabel2: "Night Cream",
        subLabel3: "Hair Oils",
        subLabel4: "Hair Gels",
        subLabel5: "Hair Supplements",
        subLabel6: "Hair Masks",
        subLabel7: "Conditioner",
        subLabel8: "Dry Shampoo",

        href: "#",
      },
      {
        label: "Tools & Accessories",
        subLabel: "Hair Brushes",
        subLabel1: "Hair Wash For Oily Skin",
        subLabel2: "Oil Free Hair",
        subLabel3: "Moisturizers For Hairs",
        subLabel4: "Best Hair Cream Under 500",
        subLabel5: "Vitamin C Serum",
        subLabel6: "Hair Extensions",
        subLabel7: "Hair Accessories",
        href: "#",
      },
      {
        label: "Hair Styling",
        subLabel: "Hair Color",
        subLabel1: "Hair Spray",
        subLabel2: "Hair Wax",
        subLabel3: "Gels",
        label1: "Shop By Hair Type",
        subLabel4: "Straight",
        subLabel5: "Curly & Wavy",
        subLabel6: "Scrubs",

        href: "#",
      },
      {
        label: "Shop By Concern",
        subLabel: "Hairfall & Thinning",
        subLabel1: "Dandruff",
        subLabel2: "Split Ends",
        subLabel2: "Color Protection",

        label1: "Trending Searches",
        subLabel3: "Hair Cream & Serums",
        subLabel4: "Hair Masks",
        label2: "Hair Care",
        subLabel5: "Castor Oil For Hair",
        subLabel6: "Sulphate Free Shampoo",
        href: "#",
      },
      {
        label: "Top Brands",
        subLabel: "Nikka Naturals",
        subLabel1: "L'Oreal Paris",
        subLabel2: "Wella Professionals",
        subLable5: "BBlunt",
        subLabel3: "Herbal Essences",
        subLabel4: "Professionals",

        href: "#",
      },
      {
        label: "Quick Links",
        subLabel: "Combos @ Nikka",
        subLabel1: "New Launches",
        subLabel2: "NFBA Nominees 2022",
        subLabel3: "Herbal Hair Care",
        subLabel4: "Routine Finder",
        subLabel5: "The Safe Beauty Edit",
        subLabel6: "The Gift Store",

        href: "#",
      },
    ],
  },
  {
    label: "Appliances",
    children: [
      {
        label: "Hair Styling Tools",
        subLabel: "Hair Dryers",
        subLabel1: "Straighters",
        subLabel2: "Curling Iron/Stykers",
        subLabel4: "Multi Stylers",

        href: "#",
      },
      {
        label: "Hair Removal Tools",
        subLabel: "Equilators",
        subLabel1: "Body Groomers",
        subLabel2: "Bikini Trimmer",

        href: "#",
      },
      {
        label: "Shaving Tools",
        subLabel: "Shavers For Men",
        subLabel1: "Trimmers For Men",
        subLabel2: "Cell Trimmers",
        subLabel3: "Waxing Cream",
        subLabel4: "Hair Removing Gel",
        label1: "Oral Care",
        subLabel5: "Electric Toothbrushes",
        subLabel6: "Electric Flossers",

        href: "#",
      },
      {
        label: "Face/Skin Tools",
        subLabel: "Face Epilator",
        subLabel1: "Dermarollers",
        subLabel2: "Cleansing Brushes",
        subLabel3: "Under Eye Cream & Serums",
        subLabel4: "Eye Masks",
        label1: "Massage Tools",
        subLabel5: "Massagers",
        subLabel6: "Lip Scrubs",
        subLabel7: "Lip Masks",
        href: "#",
      },
      {
        label: "Top Brands",
        subLabel: "FOREO",
        subLabel1: "Philips",
        subLabel2: "Alan Truman",
        subLabel3: "VEGA",
        subLabel4: "Braun",
        subLabel5: "Nova",
        subLabel6: "Flawless",

        href: "#",
      },
      {
        label: "Quick Links",
        subLabel: "Acne",
        subLabel1: "Dull  Skin",
        subLabel2: "Pigmentation",
        subLabel3: "Pores",
        subLabel4: "Oil Control",
        label1: "Quick Links",
        subLabel5: "NFBA Nominees 2022",
        subLabel6: "The Gift Store",

        href: "#",
      },
    ],
  },
  {
    label: "Bath & Body",
    children: [
      {
        label: "Shower Gels & Body",
        subLabel: "Body Scrubs",
        subLabel1: "Soaps",
        subLabel2: "Bath Salts",
        subLabel3: "Bath Accessories",
        subLabel4: "Exfoliants",
        label1: "Body Care",
        subLabel5: "Face Wash",
        subLabel6: "Body Lotions",
        subLabel7: "Deodorants",
        subLabel8: "Perfume",
        subLabel9: "Scrubs",

        href: "#",
      },
      {
        label: "Feminine Hygiene",
        subLabel: "Sanitary Napkins",
        subLabel1: "Menstrual Cups",
        subLabel2: "Tampons",
        subLabel3: "Intimate Wash",
        subLabel4: "Lip Balm Under 500",
        label1: "Shaving & Hair Removal",
        subLabel6: "Sheet Masks",
        subLabel7: "Cartidges",
        subLabel8: "Wax & Wax Strips",
        subLabel9: "Trimmers",
        href: "#",
      },
      {
        label: "Men's Grooming",
        subLabel: "Razors & Catridges",
        subLabel1: "Body Butter",
        subLabel2: "Pre & Post Shaves",
        subLabel3: "Shaves & Trimmers",
        subLabel4: "Intimate Care",
        label1: "Hands & Feet",
        subLabel5: "Hand Wash",
        subLabel6: "Scrubs",
        subLabel7: "Foot Creams",
        subLabel8: "Hand & Foor Masks",

        href: "#",
      },
      {
        label: "Hygiene Essentials",
        subLabel: "Face Mask",
        subLabel1: "Hand Sanitizer",
        subLabel2: "Facial Peels",
        subLabel3: "Under Eye Cream & Serums",
        subLabel4: "Eye Masks",
        label1: "Oral Care",
        subLabel5: "Toothpastes",
        subLabel6: "Mouthwash",
        subLabel7: "Floss & Tougue Cleaners",
        href: "#",
      },
      {
        label: "Kits & Combos",
        subLabel: "Facial Kits",
        subLabel1: "Combos @ Nikka",
        subLabel2: "Gift Sets",
        subLabel3: "Face Massagers",
        subLabel4: "Cleansing Brushes",
        label1: "Top Brands",
        subLabel5: "MCaffeine",
        subLabel6: "Gillette",
        subLabel7: "Dove",
        subLabel8: "Sanfe",
        subLabel9: "Whisper",

        href: "#",
      },
      {
        label1: "Trending Searches",
        subLabel: "Acne",
        subLabel1: "Dull  Skin",
        subLabel2: "Pigmentation",
        subLabel3: "Pores",
        subLabel4: "Oil Control",
        label: "Quick Links",
        subLabel5: "NFBA Nominees 2022",
        subLabel6: "The Gift Store",

        href: "#",
      },
    ],
  },
  {
    label: "Natural",
    children: [
      {
        label: "Skin",
        subLabel: "Face Moisturizers",
        subLabel1: "Cream",
        subLabel2: "Night Cream",
        subLabel3: "Face Oils",
        subLabel4: "All Purpous Gels",
        subLabel5: "Face Wash",
        subLabel6: "Micellar Water",
        subLabel7: "Face Wipes",
        subLabel8: "Makeup Remover",
        subLabel7: "Scrubs & Exfoliators",

        href: "#",
      },
      {
        label: "Skin",
        subLabel: "Toners Under 100",
        subLabel1: "Fash Wash For Oily Skin",
        subLabel2: "Oil Free Face",
        subLabel3: "Moisturizers",
        subLabel4: "Lip Balm Under 500",
        subLabel5: "Vitamin C Serum",
        label1: "Body Care",
        subLabel6: "Sheet Masks",
        subLabel7: "Masks & Peels",
        subLabel8: "Face Packs",
        subLabel9: "Face Bleach",
        href: "#",
      },
      {
        label: "Hair",
        subLabel: "Hair Conditioners",
        subLabel1: "Hair Oil",
        subLabel3: "Shower Gels & Body",
        subLabel4: "Hair Wash",
        subLabel5: "Soaps",
        subLabel6: "Scrubs",
        label1: "Aromatherapy",
        subLabel7: "Massage Oils",
        subLabel2: "Hair Masks",
        subLabel8: "Hand & Foor Masks",

        href: "#",
      },
      {
        label: "Makeup",
        subLabel: "Lipstick",
        subLabel1: "Kajal",
        subLabel2: "Eye Liner",
        subLabel3: "Under Eye Cream & Serums",
        subLabel4: "Eye Masks",
        label1: "Trending Search",
        subLabel5: "Tea Balm",
        subLabel6: "Rosemary Scrubs",
        subLabel7: "Lip Masks",
        href: "#",
      },
      {
        label: "Top Brands",
        subLabel: "Biotique",
        subLabel1: "Lotus Herbals",
        subLabel2: "The Body Shop",
        subLabel3: "Nikka Naturals",
        subLabel4: "Kama Ayurveda",
        label1: "Types Of Skin",
        subLabel5: "Dry Skins",
        subLabel6: "Oily Skins",
        subLabel7: "Combination Skin",

        href: "#",
      },
      {
        label: "Shop By Concern",
        subLabel: "Acne",
        subLabel1: "Dull  Skin",
        subLabel2: "Pigmentation",
        subLabel3: "Pores",
        subLabel4: "Oil Control",
        label1: "Quick Links",
        subLabel5: "NFBA Nominees 2022",
        subLabel6: "The Gift Store",
        subLabel7: "The Safe (And Clean)",
        subLabel8: "Beauty Edit",

        href: "#",
      },
    ],
  },
  {
    label: "Mom & Baby",
    children: [
      {
        label: "Body Care",
        subLabel: "Face Moisturizers",
        subLabel1: "Cream",
        subLabel2: "Night Cream",
        subLabel3: "Face Oils",
        subLabel4: "All Purpous Gels",
        subLabel5: "Face Wash",
        subLabel6: "Micellar Water",
        subLabel7: "Face Wipes",
        subLabel8: "Makeup Remover",
        subLabel7: "Scrubs & Exfoliators",

        href: "#",
      },
      {
        label: "Kids Care",
        subLabel: "Toners Under 100",
        subLabel1: "Fash Wash For Oily Skin",
        subLabel2: "Oil Free Face",
        subLabel3: "Moisturizers",
        subLabel4: "Lip Balm Under 500",
        subLabel5: "Vitamin C Serum",
        href: "#",
      },
      {
        label: "Maternity Care",
        subLabel: "Lotions & Creams",
        subLabel1: "Body Butter",
        subLabel2: "Massage Oils",
        subLabel3: "Shower Gels & Body",
        subLabel4: "Wash",
        subLabel5: "Soaps",
        subLabel6: "Scrubs",

        href: "#",
      },
      {
        label: "Specialised Skincare",
        subLabel: "Acne Spot Correctors",
        subLabel1: "Nose Strips",
        subLabel2: "Facial Peels",
        label1: "Eye Care",
        subLabel3: "Under Eye Cream & Serums",
        subLabel4: "Eye Masks",
        label2: "Lip Care",
        subLabel5: "Lip Balm",
        subLabel6: "Lip Scrubs",
        subLabel7: "Lip Masks",
        href: "#",
      },
      {
        label: "Health & Safety",
        subLabel: "Facial Kits",
        subLabel1: "Combos @ Nikka",
        subLabel2: "Gift Sets",
        label1: "Maternity Wear",
        subLabel3: "Face Massagers",
        subLabel4: "Cleansing Brushes",
        subLabel5: "Blackhead Remover",
        subLabel6: "Vitamins & Minerals",
        subLabel7: "Ayurveda Herbs",

        href: "#",
      },
      {
        label: "Shop By Concern",
        subLabel: "Acne",
        subLabel1: "Dull  Skin",
        subLabel2: "Pigmentation",
        subLabel3: "Pores",
        subLabel4: "Oil Control",
        label1: "Quick Links",
        subLabel5: "NFBA Nominees 2022",
        subLabel6: "The Gift Store",

        href: "#",
      },
    ],
  },
  {
    label: "Health & Wellness",
    children: [
      {
        label: "Health Supplements",
        subLabel: "Multivitamins",
        subLabel1: "Calcium & Vitamin D",
        subLabel2: "Omega 3 & Fish Oil",
        subLabel3: "Magnesium",
        subLabel4: "Zinc",
        label1: "Beauty Supplements",
        subLabel5: "Face Wash",
        subLabel6: "Micellar Water",
        subLabel7: "Face Wipes",
        subLabel8: "Makeup Remover",
        subLabel7: "Scrubs & Exfoliators",

        href: "#",
      },
      {
        label: "Sports Nutritions",
        subLabel: "Whey Protien",
        subLabel1: "Plant Protien",
        subLabel2: "Creatine",
        subLabel3: "Mass Gainers",
        subLabel4: "Protein Snacks",
        label1: "Weight Management",
        subLabel5: "Green Tea",
        subLabel6: "Fat Burner",
        subLabel7: "Cardio",
        subLabel8: "Yoga",
        subLabel9: "Apple Cider",
        href: "#",
      },
      {
        label: "Health Foods",
        subLabel: "Almonds",
        subLabel1: "Apples",
        subLabel2: "Bananas",
        subLabel3: "Oils & Ghees",
        subLabel4: "Edible Seeds",
        subLabel5: "Honer",
        subLabel6: "Dry Fruits Like Cashew",

        href: "#",
      },
      {
        label: "Wellness Equipment",
        subLabel: "Weighing Scales",
        subLabel1: "Fitness",
        subLabel2: "Sports",
        subLabel3: "Dumbells",
        subLabel4: "Barbell",

        label1: "Pain Relief",
        label2: "Mascular & Ortho",
        subLabel5: "Period Cramps",
        subLabel6: "Other Pain",
        href: "#",
      },
      {
        label: "Ayurveda & Herbs",
        subLabel: "Facial Kits",
        subLabel7: "Combos @ Nikka",
        subLabel2: "Neem",
        subLabel3: "Amla",
        subLabel4: "Aloe Vera",
        subLabel5: "Tulsi",
        subLabel6: "Vitamins & Minerals",
        subLabel1: "Ayurveda Herbs",

        href: "#",
      },
      {
        label: "Shop By Concern",
        subLabel: "Acne",
        subLabel1: "Dull  Skin",
        subLabel2: "Pigmentation",
        subLabel3: "Pores",
        subLabel4: "Oil Control",
        subLabel5: "NFBA Nominees 2022",
        subLabel6: "The Gift Store",

        href: "#",
      },
    ],
  },
  {
    label: "Men",
    children: [
      {
        label: "Shaving",
        subLabel: "Face Moisturizers",
        subLabel1: "Cream",
        subLabel2: "Night Cream",
        subLabel3: "Face Oils",
        subLabel4: "All Purpous Gels",
        subLabel5: "Face Wash",
        subLabel6: "Micellar Water",
        subLabel7: "Face Wipes",
        subLabel8: "Makeup Remover",
        subLabel7: "Scrubs & Exfoliators",

        href: "#",
      },
      {
        label: "Beard Care",
        subLabel: "Toners Under 100",
        subLabel1: "Fash Wash For Oily Skin",
        subLabel2: "Oil Free Face",
        subLabel3: "Moisturizers",
        subLabel4: "Lip Balm Under 500",
        subLabel5: "Vitamin C Serum",
        subLabel6: "Sheet Masks",
        subLabel7: "Masks & Peels",
        subLabel8: "Face Packs",
        subLabel9: "Face Bleach",
        href: "#",
      },
      {
        label: "Hair Care",
        subLabel: "Lotions & Creams",
        subLabel1: "Body Butter",
        subLabel2: "Massage Oils",
        subLabel3: "Shower Gels & Body",
        subLabel4: "Wash",
        subLabel5: "Soaps",
        subLabel6: "Scrubs",
        label1: "Skin Care",
        subLabel7: "Foot Creams",
        subLabel8: "Hand & Foor Masks",

        href: "#",
      },
      {
        label: "Bath & Body",
        subLabel: "Acne Spot Correctors",
        subLabel1: "Nose Strips",
        subLabel2: "Facial Peels",
        label1: "Fragrance",
        subLabel3: "Under Eye Cream & Serums",
        subLabel4: "Eye Masks",
        subLabel5: "Lip Balm",
        subLabel6: "Lip Scrubs",
        subLabel7: "Lip Masks",
        href: "#",
      },
      {
        label: "Wellness",
        subLabel: "Facial Kits",
        subLabel1: "Combos @ Nikka",
        subLabel2: "Gift Sets",
        label1: "Skin Tools",
        subLabel3: "Face Massagers",
        subLabel4: "Cleansing Brushes",
        subLabel5: "Blackhead Remover",
        label2: "Skin Suppplements",
        subLabel6: "Vitamins & Minerals",
        subLabel7: "Ayurveda Herbs",

        href: "#",
      },
      {
        label: "Shop By Concern",
        subLabel: "Acne",
        subLabel1: "Dull  Skin",
        subLabel2: "Pigmentation",
        subLabel3: "Pores",
        subLabel4: "Oil Control",
        label1: "Quick Links",
        subLabel5: "NFBA Nominees 2022",
        subLabel6: "The Gift Store",

        href: "#",
      },
    ],
  },
  {
    label: "Fragrance",
    children: [
      {
        label: "Womes Fragrance",
        subLabel: "Perfumes (EDT/EDP)",
        subLabel1: "Body Mists",
        subLabel2: "Night Cream",
        subLabel3: "Face Oils",
        subLabel4: "All Purpous Gels",
        label1: "Men's Fragrance",
        subLabel5: "Face Wash",
        subLabel6: "Micellar Water",
        subLabel7: "Face Wipes",
        subLabel8: "Makeup Remover",
        subLabel7: "Scrubs & Exfoliators",

        href: "#",
      },
      {
        label: "Giftsets & Combos",
        subLabel: "Toners Under 100",
        subLabel1: "Fash Wash For Oily Skin",
        subLabel2: "Oil Free Face",
        subLabel3: "Moisturizers",
        subLabel4: "Lip Balm Under 500",
        subLabel5: "Vitamin C Serum",
        subLabel6: "Sheet Masks",
        subLabel7: "Masks & Peels",
        subLabel8: "Face Packs",
        subLabel9: "Face Bleach",
        href: "#",
      },
      {
        label: "Candles",
        subLabel: "Lotions & Creams",
        subLabel1: "Body Butter",
        subLabel2: "Massage Oils",
        subLabel3: "Shower Gels & Body",
        subLabel4: "Wash",
        subLabel5: "Soaps",
        subLabel6: "Scrubs",
        subLabel7: "Foot Creams",
        subLabel8: "Hand & Foor Masks",

        href: "#",
      },
      {
        label: "Top Brands",
        subLabel: "Acne Spot Correctors",
        subLabel1: "Nose Strips",
        subLabel2: "Facial Peels",
        label1: "Eye Care",
        subLabel3: "Under Eye Cream & Serums",
        subLabel4: "Eye Masks",
        label2: "Lip Care",
        subLabel5: "Lip Balm",
        subLabel6: "Lip Scrubs",
        subLabel7: "Lip Masks",
        href: "#",
      },
      {
        label: "PREMIUM AND DESIGNER BRANDS",
        subLabel: "Explore All",
        subLabel1: "Dior",
        subLabel2: "PRADA",
        subLabel3: "Hermes",
        subLabel4: "FENDI",
        subLabel5: "AMIRI",
        subLabel6: "Vitamins & Minerals",
        subLabel7: "Elie Saab",

        href: "#",
      },
      {
        subLabel: "Acne",
        subLabel1: "Dull  Skin",
        subLabel2: "Pigmentation",
        subLabel3: "Pores",
        subLabel4: "Oil Control",
        label: "Quick Links",
        subLabel5: "NFBA Nominees 2022",
        subLabel6: "The Gift Store",

        href: "#",
      },
    ],
  },
  {
    label: "Pop Ups",
    children: [
      {
        label: "Bras",
        subLabel: "T-Shirt Bras",
        subLabel1: "Padded Bra",
        subLabel2: "Wireless Bra",
        subLabel3: "Underwired bra",
        subLabel4: "Brallete",
        label1: "Underwear",
        subLabel5: "Briefs",
        subLabel6: "Bikini",
        subLabel7: "Boyshorts",
        subLabel8: "Shorties",
        subLabel9: "Period Panties",

        href: "#",
      },
      {
        label: "Sleep & Lounge",
        subLabel: "Toners Under 100",
        subLabel1: "Fash Wash For Oily Skin",
        subLabel2: "Oil Free Face",
        subLabel3: "Moisturizers",
        subLabel4: "Lip Balm Under 500",
        subLabel5: "Vitamin C Serum",
        label1: "The Activewear",
        subLabel6: "Sports Bra",
        subLabel7: "Masks & Peels",
        subLabel8: "Shorts",
        subLabel9: "Swimwear",
        href: "#",
      },
      {
        label: "Bags",
        subLabel: "Lotions & Creams",
        subLabel1: "Body Butter",
        subLabel2: "Massage Oils",
        subLabel3: "Shower Gels & Body",
        subLabel4: "Wash",
        subLabel5: "Soaps",
        subLabel6: "Scrubs",
        label1: "Shapewear",
        subLabel7: "Foot Creams",
        subLabel8: "Hand & Foor Masks",

        href: "#",
      },
      {
        label: "Footwear",
        subLabel: "Acne Spot Correctors",
        subLabel1: "Nose Strips",
        subLabel2: "Facial Peels",
        subLabel3: "Under Eye Cream & Serums",
        subLabel4: "Eye Masks",
        label1: "Jewellery",
        subLabel5: "Earrings",
        subLabel6: "Gold Chains",
        subLabel7: "Maang Tikka",
        subLabel8: "Gold Bracelets",
        subLabel9: "Rings",

        href: "#",
      },
      {
        label: "Gadgets & Tech",
        subLabel: "Headphones",
        subLabel1: "Speakers",
        subLabel2: "Gift Sets",
        label1: "Watches",
        subLabel3: "Watches",
        subLabel4: "Cases & Covers",
        subLabel5: "Computer Peripherals",
        label2: "Skin Suppplements",
        subLabel6: "Vitamins & Minerals",
        subLabel7: "Ayurveda Herbs",

        href: "#",
      },
      {
        label: "Featured Brands",
        subLabel: "NYKD By Nikka",
        subLabel1: "Twenty Dresses",
        subLabel2: "RSVP",
        subLabel3: "KICA",
        subLabel4: "Prada",
        subLabel5: "NFBA",
        subLabel6: "Jockey",
        subLabel7: "Fendi",
        subLabel8: "Likha",
        subLabel9: "Gloot",

        href: "#",
      },
    ],
  },
];

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
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
                className="dropdown"
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
                rounded={"xl"}
                minW={"5xl"}
              >
                <Stack display={"grid"} gridTemplateColumns="repeat(6,1fr)">
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
      <Image
        width="60px"
        bgColor={"transparent"}
        src="https://th.bing.com/th/id/OIP.tdyx54w7Nvnfz2Q7DNbaiQHaDq?pid=ImgDet&rs=1"
        alt="sale"
      />
    </Stack>
  );
};

const DesktopSubNav = ({
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
  subLabel7,
  subLabel8,
  subLabel9,
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
      <Stack
        direction={"row"}
        align={"center"}
        width="150px"
        p="10px"
        bgColor={"gray.100"}
      >
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
            color="#ed4a4e"
          >
            {label}
          </Text>
          <Box>
            <Text fontSize={"sm"}>{subLabel}</Text>
            <Text fontSize={"sm"}>{subLabel1}</Text>
            <Text fontSize={"sm"}>{subLabel2}</Text>
            <Text fontSize={"sm"}>{subLabel3}</Text>
            <Text fontSize={"sm"}>{subLabel4}</Text>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
              color="#ed4a4e"
            >
              {label1}
            </Text>
            <Text fontSize={"sm"}>{subLabel5}</Text>

            <Text fontSize={"sm"}>{subLabel6}</Text>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
              color="#ed4a4e"
            >
              {label2}
            </Text>
            <Text fontSize={"sm"}>{subLabel7}</Text>

            <Text fontSize={"sm"}>{subLabel8}</Text>
            <Text fontSize={"sm"}>{subLabel9}</Text>
          </Box>
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
