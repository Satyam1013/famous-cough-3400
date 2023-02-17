exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 6294:
/***/ ((module) => {

// Exports
module.exports = {
	"bd_best": "homepage_bd_best__RumxA",
	"bd_best_list": "homepage_bd_best_list__lL_Dk",
	"bdBestCarousel": "homepage_bdBestCarousel__K8uJj",
	"bd_best_item": "homepage_bd_best_item__s2Jzj",
	"footer": "homepage_footer__znFOR",
	"kl_img": "homepage_kl_img__0JM7N"
};


/***/ }),

/***/ 4379:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// Here we have used react-icons package for the icons

// And react-slick as our Carousel Lib

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
};
function Carousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
        base: "90%",
        md: "50%"
    });
    const side = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
        base: "30%",
        md: "10px"
    });
    // These are the images used in the slide
    const cards = [
        "https://images-static.nykaa.com/creatives/2d96fd53-a09e-4598-890c-f3929e03da11/default.jpg?tr=w-1200,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/3da148ac-ca97-4f2c-91a7-670f5dfbbef7.gif?tr=w-1200,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/9262075e-9623-4fc0-824d-b410754c6a3f.jpg?tr=w-1200,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/04d0c1d0-3bd5-49cd-8d38-655a9f3c003b.jpg?tr=w-1200,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/9ef6a6c2-9107-487c-8a4b-e886becea619.jpg?tr=w-1200,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/4cfa562a-2f35-4aa4-8df3-dab8650d23a2.jpg?tr=w-1200,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/4e0cc868-6e20-4dd9-9200-3e5dfa660a88.jpg?tr=w-1200,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/3efe954d-bbb7-4c6e-99cc-992037b42b06.jpg?tr=w-1200,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/a294f8d2-8bb6-4912-9ac9-896cfa2685dc.jpg?tr=w-1200,cm-pad_resize",
        "https://images-static.nykaa.com/uploads/087be75e-8b3d-40f0-bd0a-bef5bfcc8dd3.jpg?tr=w-1200,cm-pad_resize"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        position: "relative",
        height: {
            base: "250px",
            lg: "400px"
        },
        m: "auto",
        width: "95%",
        overflow: "hidden",
        borderRadius: "10px",
        mt: {
            base: "110px",
            lg: "20px"
        },
        zIndex: 0,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                zIndex: 0,
                mt: "0px",
                m: "10px",
                fontWeight: "bold",
                fontSize: {
                    lg: "24px"
                },
                children: "Best in Beauty"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                type: "text/css",
                charSet: "UTF-8",
                href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "stylesheet",
                type: "text/css",
                href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                "aria-label": "left-arrow",
                colorScheme: "gray",
                borderRadius: "full",
                display: {
                    base: "none",
                    md: "grid"
                },
                position: "absolute",
                left: side,
                top: top,
                transform: "translate(0%, -50%)",
                zIndex: 1,
                onClick: ()=>slider?.slickPrev(),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiLeftArrowAlt, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                "aria-label": "right-arrow",
                display: {
                    base: "none",
                    md: "grid"
                },
                colorScheme: "gray",
                borderRadius: "full",
                position: "absolute",
                right: side,
                top: top,
                transform: "translate(0%, -50%)",
                zIndex: 1,
                onClick: ()=>slider?.slickNext(),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiRightArrowAlt, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_4___default()), {
                ...settings,
                ref: (slider)=>setSlider(slider),
                children: cards.map((url, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        zIndex: 0,
                        height: {
                            base: "170px",
                            lg: "sm"
                        },
                        position: "relative",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundImage: `url(${url})`
                    }, index))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4836:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4379);
/* harmony import */ var _homepage_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6294);
/* harmony import */ var _homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_homepage_module_css__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_Carousel__WEBPACK_IMPORTED_MODULE_4__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_Carousel__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const top_brands = [
    {
        id: 1,
        img: "https://images-static.nykaa.com/uploads/f78980bd-8cbe-4346-aece-c759cc904528.jpg?tr=w-400,cm-pad_resize",
        dis: "Up To 30% Off + Pick Your Compact at ₹799",
        desc: "Rich, Soft and Smooth matte lips all day long!",
        add: "/lakme"
    },
    {
        id: 2,
        img: "https://images-static.nykaa.com/uploads/977c5e94-1721-482d-9087-51bae5366ee0.png?tr=w-400,cm-pad_resize",
        dis: "Up To 25% Off",
        desc: "#GetThatGlow With Illuminating Primer Drops",
        add: "/loreal"
    },
    {
        id: 3,
        img: "https://images-static.nykaa.com/uploads/87210c5c-f9ec-4fdb-8589-c7ba9e49fc5a.jpg?tr=w-400,cm-pad_resize",
        dis: "Up To 50% Off + Free Serum",
        desc: "Worth ₹799 On ₹999",
        add: "/loreal"
    },
    {
        id: 4,
        img: "https://images-static.nykaa.com/uploads/05d0a5aa-79a8-4a8e-bea3-c1e2b3dc06c0.jpg?tr=w-400,cm-pad_resize",
        dis: "Up To 40% Off",
        desc: "New Fit Me Fresh Tint with Vitamin C",
        add: "/loreal"
    },
    {
        id: 5,
        img: "https://images-static.nykaa.com/uploads/98d95b38-b55a-4313-b970-7db21626ab56.jpg?tr=w-400,cm-pad_resize",
        dis: "Up To 40% Off",
        desc: "72HR Hydrated Hair with Hyaluronic Acid",
        add: "/loreal"
    },
    {
        id: 6,
        img: "https://images-static.nykaa.com/uploads/940abd44-9a9c-456e-b2dd-ed3fd8113a5c.jpg?tr=w-400,cm-pad_resize",
        dis: "Up To 30% Off",
        desc: "Skin specialist face serums",
        add: "/loreal"
    },
    {
        id: 7,
        img: "https://images-static.nykaa.com/uploads/dcd0793c-d987-4ad9-bdd9-8427f1efece7.jpg?tr=w-400,cm-pad_resize",
        dis: "Offers you can't resist",
        desc: "On your favourite luxe brands!",
        add: "/loreal"
    },
    {
        id: 8,
        img: "https://images-static.nykaa.com/uploads/4450a9f1-a943-4968-91a1-f5b3e455f1ad.jpg?tr=w-400,cm-pad_resizee",
        dis: "50% Off on GloWish Franchise +",
        desc: "2 Complimentary Gifts on ₹2500",
        add: "/huda"
    },
    {
        id: 9,
        img: "https://images-static.nykaa.com/uploads/46ba9dc1-b6da-4787-9c9e-b49cfae73289.jpg?tr=w-400,cm-pad_resize",
        dis: "Exciting Holiday Kits",
        desc: "Starting at ₹2300",
        add: "/loreal"
    }
];
const only_at_nykaa = [
    {
        id: 1,
        img: "https://images-static.nykaa.com/creatives/5a17a3b4-4709-47e3-9955-5a8d94f836f6/default.png?tr=w-400,cm-pad_resize",
        dis: "Up To 30% Off",
        desc: "Sleeping Mask on 699"
    },
    {
        id: 2,
        img: "https://images-static.nykaa.com/creatives/66f98c99-f5ca-450a-9787-606a1c2130b1/default.jpg?tr=w-400,cm-pad_resize",
        dis: "On  ₹6000:Mini Lipstick & Serum",
        desc: "Magical Skincare Secrets!"
    },
    {
        id: 3,
        img: "https://images-static.nykaa.com/creatives/6d3e730a-62c7-4476-8156-b3301f1219ed/default.jpg?tr=w-400,cm-pad_resize",
        dis: "Upto 50% Off + Serum on 999",
        desc: "Fragrances for every mood"
    },
    {
        id: 4,
        img: "https://images-static.nykaa.com/creatives/cf5e9c15-0c40-4ea4-85fd-da6d20ff3fe6/default.jpg?tr=w-400,cm-pad_resize",
        dis: "Mini Worth ₹1750 On ₹3500 +",
        desc: "2 Samples On All Orders!"
    }
];
const featured_brands = [
    {
        id: 1,
        img: "https://images-static.nykaa.com/creatives/ab903c83-e546-4bbc-9008-ffce3cc34111/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Ace Your Base!",
        desc: "15% off on Face!"
    },
    {
        id: 2,
        img: "https://images-static.nykaa.com/creatives/1f49c7f4-8682-4136-b7b9-2cdda4588e6a/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Up To 40% Off",
        desc: "On Entire Range"
    },
    {
        id: 3,
        img: "https://images-static.nykaa.com/creatives/479b9a37-7965-4125-8de6-ba7809207a3a/default.png?tr=w-240,cm-pad_resize",
        dis: "Min 20% Off",
        desc: "Serum of 799 on 799"
    },
    {
        id: 4,
        img: "https://images-static.nykaa.com/creatives/b7bb4577-9d92-4078-bde2-22ee5f87a526/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Upto 30% Off",
        desc: "On Entire Range"
    },
    {
        id: 5,
        img: "https://images-static.nykaa.com/creatives/c162bebb-6dfd-4dd2-9bb1-fcc91c03f8e2/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Up To 20% Off",
        desc: "On Entire Range"
    },
    {
        id: 6,
        img: "https://images-static.nykaa.com/creatives/c80a1c73-f27d-400b-aae9-1063f4eb92ba/default.png?tr=w-240,cm-pad_resize",
        dis: "Upto 30% Off",
        desc: "Sleeping Mask on 699"
    },
    {
        id: 7,
        img: "https://images-static.nykaa.com/creatives/8d0a43c4-9a58-4efd-b22b-8c976da11221/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Upto 30% Off",
        desc: "Extra 10% off on 799"
    },
    {
        id: 8,
        img: "https://images-static.nykaa.com/creatives/0bbae885-82c3-4ecc-a6a6-dacc4c6575b0/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Buy 1 Get 1",
        desc: "On Entire Range"
    },
    {
        id: 9,
        img: "https://images-static.nykaa.com/creatives/108e2743-5b45-40bc-89f4-83b2748624f5/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Upto 30% Off",
        desc: "On Entire Range"
    },
    {
        id: 10,
        img: "https://images-static.nykaa.com/creatives/447890f2-c927-44f9-94ed-09e902b77d9a/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Upto 30% Off",
        desc: "On Entire Range"
    }
];
const only = [
    {
        id: 1,
        img: "https://images-static.nykaa.com/creatives/ffe2ea97-34a3-4719-be95-50631ca1da8b/default.jpg?tr=w-400,cm-pad_resize",
        dis: "On ₹4000: Lip Duo + 3 Gifts",
        desc: "On ₹2100: 3 Gifts"
    },
    {
        id: 2,
        img: "https://images-static.nykaa.com/creatives/7cca4030-f05e-46c6-9303-6e0c5e2a2cdf/default.jpg?tr=w-400,cm-pad_resize",
        dis: "Flat 10% Off On All Orders!",
        desc: "Vegan, Sulphate-Free Haircare"
    },
    {
        id: 3,
        img: "https://images-static.nykaa.com/creatives/94b05faf-c817-43e4-ac5f-3c8b6ebf532f/default.jpg?tr=w-400,cm-pad_resize",
        dis: "Upto 25% Off",
        desc: "Pick a Pouch worth ₹450 On ₹1099+"
    }
];
const more = [
    {
        id: 1,
        img: "https://images-static.nykaa.com/creatives/aa2e1811-d053-4f5e-ba92-9082dceb09e9/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Welcome To",
        desc: "Your Always On Salon"
    },
    {
        id: 2,
        img: "https://images-static.nykaa.com/creatives/5914808d-206f-40f5-8973-ffb9bd89118c/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Upto To 20% Off",
        desc: "Off Entire Range"
    },
    {
        id: 3,
        img: "https://images-static.nykaa.com/creatives/8c9eeb91-13ae-4dcc-bffb-90313893bef1/default.png?tr=w-240,cm-pad_resize",
        dis: "Upto 40% Off",
        desc: "Intimacy Essentials"
    }
];
const everydayEss = [
    {
        id: 1,
        img: "https://images-static.nykaa.com/uploads/c59db0d6-872e-4fd1-bc64-8331897b3965.jpg?tr=w-240,cm-pad_resize",
        dis: "Moisturisers"
    },
    {
        id: 2,
        img: "https://images-static.nykaa.com/uploads/8f8b55d5-0bfc-4545-ba05-df0177672474.jpg?tr=w-240,cm-pad_resize",
        dis: "Bath & Body"
    },
    {
        id: 3,
        img: "https://images-static.nykaa.com/uploads/aff3b609-5b3e-4d8c-8ccb-ad9157824b2d.jpg?tr=w-240,cm-pad_resize",
        dis: "Face Wash"
    },
    {
        id: 4,
        img: "https://images-static.nykaa.com/uploads/e3424d3e-3c6f-4dd2-9cd3-d9ce46570133.jpg?tr=w-240,cm-pad_resize",
        dis: "Budget Makeup"
    },
    {
        id: 5,
        img: "https://images-static.nykaa.com/uploads/4bec33e3-9145-442b-9171-308834402eb3.jpg?tr=w-240,cm-pad_resize",
        dis: "Value Combos"
    },
    {
        id: 6,
        img: "https://images-static.nykaa.com/uploads/d4eba2cb-bbf9-4f6c-ac47-281819f52385.jpg?tr=w-240,cm-pad_resize",
        dis: "Shampoos & Conditioners"
    }
];
const brands_you_cant_miss = [
    {
        id: 1,
        img: "https://images-static.nykaa.com/creatives/d6f15b78-2161-4e51-a4f2-1f006f8aeba8/default.png?tr=w-240,cm-pad_resize",
        dis: "Easy To-Go",
        desc: "Makeup & Skincare"
    },
    {
        id: 2,
        img: "https://images-static.nykaa.com/creatives/0662fd88-b6d9-447d-9000-578ed4c29295/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Impressive",
        desc: "Makeup & Brushes"
    },
    {
        id: 3,
        img: "https://images-static.nykaa.com/creatives/6385efda-6681-4121-8d36-67f94deab92a/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Fragrance By",
        desc: "Huda & Mona Kattan"
    },
    {
        id: 4,
        img: "https://images-static.nykaa.com/creatives/82506caf-d6d0-42d7-8eba-3b0cb3fc171f/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Up To 20% Off",
        desc: "On All Orders"
    },
    {
        id: 5,
        img: "https://images-static.nykaa.com/creatives/1f634467-5f84-4271-8c05-132863121814/default.jpg?tr=w-240,cm-pad_resize",
        dis: "On ₹3500",
        desc: "Fragrances for every mood"
    },
    {
        id: 6,
        img: "https://images-static.nykaa.com/creatives/04e860f9-53bf-4295-9b66-d30826079aa3/default.jpg?tr=w-240,cm-pad_resize",
        dis: "On ₹4500:",
        desc: "2-Piece Kit+2 Gifts!"
    }
];
const makeup = [
    {
        id: 1,
        img: "https://images-static.nykaa.com/creatives/7199915c-1f48-47c9-9dd1-9b103f56c145/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Feel Good",
        desc: "Clean Formulas"
    },
    {
        id: 2,
        img: "https://images-static.nykaa.com/creatives/ae13f30b-8d24-462f-973d-735e26660bd9/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Up To 20% Off",
        desc: "On Entire Range"
    },
    {
        id: 3,
        img: "https://images-static.nykaa.com/creatives/76d06350-a7c8-4e3d-9237-03872888e61c/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Up To 40% Off",
        desc: "On Entire Range"
    },
    {
        id: 4,
        img: "https://images-static.nykaa.com/creatives/754035b1-ce14-460c-bb2f-a7bb353665c1/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Up To 30% Off",
        desc: "On Entire Range"
    },
    {
        id: 5,
        img: "https://images-static.nykaa.com/creatives/21fa5704-4c46-473e-8d10-d9e8b2f454b6/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Mega Fabulous",
        desc: "Multi-Use Minis"
    }
];
const skin = [
    {
        id: 1,
        img: "https://images-static.nykaa.com/creatives/53d29f6f-946b-4dfe-8be4-64cdab313e08/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Flat 25%",
        desc: "On Entire Range"
    },
    {
        id: 2,
        img: "https://images-static.nykaa.com/creatives/103494aa-63f7-4094-92c8-3ff067cf15b0/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Up To 30% Off",
        desc: "On Entire Range"
    },
    {
        id: 3,
        img: "https://images-static.nykaa.com/creatives/6b74e15b-5d28-4cdf-9a74-ef607bfc25b5/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Sheet Masks",
        desc: "For A Radiant Glow"
    },
    {
        id: 4,
        img: "https://images-static.nykaa.com/creatives/1b23a428-80ce-4469-9856-68ac833f6b26/default.jpg?tr=w-240,cm-pad_resize",
        dis: "On All Orders",
        desc: "2 Bestseller Samples"
    },
    {
        id: 5,
        img: "https://images-static.nykaa.com/creatives/f2611b74-427b-4e32-bd4d-e4bd5b71c053/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Glow Oils",
        desc: "For Face and Body"
    },
    {
        id: 6,
        img: "https://images-static.nykaa.com/creatives/18238bf6-d86f-42f8-8b5c-c5078d134c7b/default.jpg?tr=w-240,cm-pad_resize",
        dis: "Even Skintone",
        desc: "Reduced Dark Spots"
    },
    {
        id: 7,
        img: "https://images-static.nykaa.com/creatives/aeabb1b1-ac11-4b76-a2f5-fd7e73a2e971/default.png?tr=w-240,cm-pad_resize",
        dis: "GentleSkincare",
        desc: "By Huda Kattan"
    }
];
const Homepage = ()=>{
    const [scrollPosition, setScrollPosition] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const handleScroll = ()=>{
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Nikka Official"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: "/nikka_special",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    width: "95%",
                    m: "auto",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                            width: "49%",
                            src: "https://images-static.nykaa.com/uploads/fad4269e-a68e-4eca-9244-da27880090c7.jpg?tr=w-600,cm-pad_resize",
                            alt: "div"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                            width: "49%",
                            src: "https://images-static.nykaa.com/uploads/59474f07-bbae-4245-9c7b-b07a4c03fa58.jpg?tr=w-600,cm-pad_resize",
                            alt: "div"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                width: "95%",
                m: "auto",
                mt: {
                    base: "10px",
                    lg: "3rem"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                    w: "100%",
                    src: "https://images-static.nykaa.com/uploads/2030f573-1d09-432d-aacb-24672ba9a0e1.jpg?tr=w-1200,cm-pad_resize",
                    alt: "div1"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                mt: "50px",
                ml: {
                    base: "20px",
                    lg: "55px"
                },
                fontWeight: "bold",
                fontSize: {
                    lg: "24px"
                },
                children: "Top Brands"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                width: "95%",
                m: "auto",
                display: "grid",
                gridTemplateColumns: {
                    base: "repeat(1,1fr)",
                    md: "repeat(2,1fr)",
                    lg: "repeat(3,1fr)"
                },
                children: top_brands.map((el, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        m: "auto",
                        borderRadius: "10px",
                        w: {
                            base: "100%",
                            md: "95%",
                            lg: "95%"
                        },
                        mt: "20px",
                        border: "1px solid gray",
                        _hover: {
                            border: "3px solid pink"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                href: el.add,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    borderTopRadius: "10px",
                                    w: "100%",
                                    src: el.img,
                                    alt: "products"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                ml: "1rem",
                                mt: "10px",
                                fontWeight: "bold",
                                fontSize: "20px",
                                color: "#e80471",
                                children: el.dis
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                mb: "10px",
                                ml: "1rem",
                                children: el.desc
                            })
                        ]
                    }, i))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: "/nikka_special",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        mt: "50px",
                        ml: {
                            base: "20px",
                            lg: "55px"
                        },
                        fontWeight: "bold",
                        fontSize: {
                            lg: "24px"
                        },
                        children: "Only At Nykaa"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        width: "95%",
                        m: "auto",
                        display: "grid",
                        gridTemplateColumns: {
                            base: "repeat(1,1fr)",
                            md: "repeat(2,1fr)",
                            lg: "repeat(3,1fr)"
                        },
                        children: only_at_nykaa.map((el, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                m: "auto",
                                borderRadius: "10px",
                                w: {
                                    base: "100%",
                                    md: "95%",
                                    lg: "95%"
                                },
                                mt: "20px",
                                border: "1px solid gray",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        w: "100%",
                                        src: el.img,
                                        alt: "products"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        ml: "1rem",
                                        mt: "10px",
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                        color: "#e80471",
                                        children: el.dis
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        mb: "10px",
                                        ml: "1rem",
                                        children: el.desc
                                    })
                                ]
                            }, i))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                mt: "50px",
                ml: {
                    base: "20px",
                    lg: "55px"
                },
                fontWeight: "bold",
                fontSize: {
                    lg: "24px"
                },
                children: "Discover Our Favourites"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                width: "95%",
                m: "auto",
                mt: {
                    base: "10px",
                    lg: "1rem"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                    w: "100%",
                    borderRadius: "10px",
                    src: "https://images-static.nykaa.com/uploads/82eed1ab-64b2-4cb9-818b-9b39cd9284ec.jpg?tr=w-1200,cm-pad_resize",
                    alt: "div1"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_list),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/fdc3b122-62f6-436e-ab58-e4a2c5a253e3.jpg?tr=w-240,cm-pad_resizeg",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/9716ea78-057b-46c1-a5a6-72e0741c71b8.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/2e8f18d5-06d0-4aab-8d8e-7644aa54023f.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/4162f650-31a3-4d41-a420-ac02caccce89.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/92447a8b-4cbc-4cfa-9c65-818137cbddf7.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/c01444d8-5b41-43af-b11c-a63fc9d4d5a6.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/b2df2716-c39d-40a7-b2a5-76c728a2590b.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/fdc3b122-62f6-436e-ab58-e4a2c5a253e3.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/a75736c9-793c-4e69-9dce-558bcd011968.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/9716ea78-057b-46c1-a5a6-72e0741c71b8.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/4162f650-31a3-4d41-a420-ac02caccce89.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/92447a8b-4cbc-4cfa-9c65-818137cbddf7.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/b2df2716-c39d-40a7-b2a5-76c728a2590b.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/4162f650-31a3-4d41-a420-ac02caccce89.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().bd_best_item),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_5___default().kl_img),
                                    src: "https://images-static.nykaa.com/uploads/9716ea78-057b-46c1-a5a6-72e0741c71b8.jpg?tr=w-240,cm-pad_resize",
                                    alt: ""
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: "/skin",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        mt: "50px",
                        ml: {
                            base: "20px",
                            lg: "55px"
                        },
                        fontWeight: "bold",
                        fontSize: {
                            lg: "24px"
                        },
                        children: "Featured Brands"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        width: "95%",
                        m: "auto",
                        display: "grid",
                        gap: {
                            base: "10px"
                        },
                        gridTemplateColumns: {
                            base: "repeat(2,1fr)",
                            md: "repeat(3,1fr)",
                            lg: "repeat(5,1fr)"
                        },
                        children: featured_brands.map((el, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                m: "auto",
                                borderRadius: "10px",
                                w: {
                                    base: "100%",
                                    md: "95%",
                                    lg: "95%"
                                },
                                mt: "20px",
                                border: "1px solid gray",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        w: "100%",
                                        src: el.img,
                                        alt: "products"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        ml: "1rem",
                                        mt: "10px",
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                        color: "#e80471",
                                        children: el.dis
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        mb: "10px",
                                        ml: "1rem",
                                        children: el.desc
                                    })
                                ]
                            }, i))
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: "/skin",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    width: "95%",
                    m: "auto",
                    mt: "20px",
                    display: "grid",
                    gridTemplateColumns: {
                        base: "repeat(1,1fr)",
                        md: "repeat(2,1fr)",
                        lg: "repeat(3,1fr)"
                    },
                    children: only.map((el, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            m: "auto",
                            borderRadius: "10px",
                            w: {
                                base: "100%",
                                md: "95%",
                                lg: "95%"
                            },
                            mt: "20px",
                            border: "1px solid gray",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    w: "100%",
                                    src: el.img,
                                    alt: "products"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    ml: "1rem",
                                    mt: "10px",
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                    color: "#e80471",
                                    children: el.dis
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    mb: "10px",
                                    ml: "1rem",
                                    children: el.desc
                                })
                            ]
                        }, i))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: "/nikka_special",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    bgColor: "#e5f2f4",
                    mt: "40px",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            p: "20px",
                            ml: {
                                base: "20px",
                                lg: "35px"
                            },
                            fontWeight: "bold",
                            fontSize: {
                                lg: "24px"
                            },
                            children: "Everyday Essentials"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                            borderRadius: "10px",
                            m: "auto",
                            w: "95%",
                            src: "https://images-static.nykaa.com/uploads/2adda7a5-567a-4db1-b408-06c96be60287.jpg?tr=w-1200,cm-pad_resize",
                            alt: "ee"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            width: "95%",
                            gap: "5px",
                            m: "auto",
                            display: "grid",
                            gridTemplateColumns: {
                                base: "repeat(3,1fr)",
                                md: "repeat(4,1fr)",
                                lg: "repeat(6,1fr)"
                            },
                            children: everydayEss.map((el)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                    m: "auto",
                                    borderRadius: "10px",
                                    w: {
                                        base: "100%",
                                        md: "95%",
                                        lg: "95%"
                                    },
                                    mt: "20px",
                                    border: "1px solid gray",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                            w: "100%",
                                            src: el.img,
                                            alt: "products"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            ml: "1rem",
                                            mt: "10px",
                                            fontWeight: "bold",
                                            fontSize: {
                                                base: "12px",
                                                lg: "16px"
                                            },
                                            children: el.dis
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            mb: "10px",
                                            ml: "1rem",
                                            children: el.desc
                                        })
                                    ]
                                }, el.dis))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: "/makeup",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        mt: "40px",
                        ml: {
                            base: "20px",
                            lg: "45px"
                        },
                        fontWeight: "bold",
                        fontSize: {
                            lg: "24px"
                        },
                        children: "Categories In Focus"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        width: "95%",
                        m: "auto",
                        mt: "20px",
                        justifyContent: "space-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                borderRadius: "10px",
                                width: "49%",
                                src: "https://images-static.nykaa.com/uploads/e0c3b01f-ae84-4e5a-a774-e6197d83787b.jpg?tr=w-600,cm-pad_resize",
                                alt: "div"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                borderRadius: "10px",
                                width: "49%",
                                src: "https://images-static.nykaa.com/uploads/733aca33-0db3-4b1b-82ed-1bd58f2cbc18.jpg?tr=w-600,cm-pad_resize",
                                alt: "div"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: "/nikka_special",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        mt: "40px",
                        ml: {
                            base: "20px",
                            lg: "45px"
                        },
                        fontWeight: "bold",
                        fontSize: {
                            lg: "24px"
                        },
                        children: "Brands You Cant Miss"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontWeight: "600",
                        ml: {
                            base: "20px",
                            lg: "45px"
                        },
                        children: "Luxe"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        width: "95%",
                        m: "auto",
                        gap: "5px",
                        display: "grid",
                        gridTemplateColumns: {
                            base: "repeat(3,1fr)",
                            md: "repeat(4,1fr)",
                            lg: "repeat(6,1fr)"
                        },
                        children: brands_you_cant_miss.map((el, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                m: "auto",
                                borderRadius: "10px",
                                w: {
                                    base: "100%",
                                    md: "95%",
                                    lg: "95%"
                                },
                                mt: "20px",
                                border: "1px solid gray",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        w: "100%",
                                        src: el.img,
                                        alt: "products"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        ml: "1rem",
                                        mt: "10px",
                                        fontWeight: "bold",
                                        fontSize: {
                                            base: "12px",
                                            lg: "16px"
                                        },
                                        children: el.dis
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: {
                                            base: "10px",
                                            lg: "15px"
                                        },
                                        mb: "10px",
                                        ml: "1rem",
                                        children: el.desc
                                    })
                                ]
                            }, i))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: "/makeup",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        mt: "30px",
                        fontWeight: "600",
                        ml: {
                            base: "20px",
                            lg: "45px"
                        },
                        children: "Makeup"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        width: "95%",
                        m: "auto",
                        gap: "5px",
                        display: "grid",
                        gridTemplateColumns: {
                            base: "repeat(3,1fr)",
                            md: "repeat(4,1fr)",
                            lg: "repeat(6,1fr)"
                        },
                        children: makeup.map((el, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                m: "auto",
                                borderRadius: "10px",
                                w: {
                                    base: "100%",
                                    md: "95%",
                                    lg: "95%"
                                },
                                mt: "20px",
                                border: "1px solid gray",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        w: "100%",
                                        src: el.img,
                                        alt: "products"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        ml: "1rem",
                                        mt: "10px",
                                        fontWeight: "bold",
                                        fontSize: {
                                            base: "12px",
                                            lg: "16px"
                                        },
                                        children: el.dis
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: {
                                            base: "10px",
                                            lg: "15px"
                                        },
                                        mb: "10px",
                                        ml: "1rem",
                                        children: el.desc
                                    })
                                ]
                            }, i))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: "/skin",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        mt: "30px",
                        fontWeight: "600",
                        ml: {
                            base: "20px",
                            lg: "45px"
                        },
                        children: "Skin"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        width: "95%",
                        m: "auto",
                        gap: "5px",
                        display: "grid",
                        gridTemplateColumns: {
                            base: "repeat(3,1fr)",
                            md: "repeat(4,1fr)",
                            lg: "repeat(7,1fr)"
                        },
                        children: skin.map((el, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                m: "auto",
                                borderRadius: "10px",
                                w: {
                                    base: "100%",
                                    md: "95%",
                                    lg: "95%"
                                },
                                mt: "20px",
                                border: "1px solid gray",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        w: "100%",
                                        src: el.img,
                                        alt: "products"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        ml: "1rem",
                                        mt: "10px",
                                        fontWeight: "bold",
                                        fontSize: {
                                            base: "12px",
                                            lg: "16px"
                                        },
                                        children: el.dis
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: {
                                            base: "10px",
                                            lg: "15px"
                                        },
                                        mb: "10px",
                                        ml: "1rem",
                                        children: el.desc
                                    })
                                ]
                            }, i))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: "/skin",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        mt: "30px",
                        fontWeight: "600",
                        ml: {
                            base: "20px",
                            lg: "45px"
                        },
                        children: "More In Beauty"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        width: "95%",
                        m: "auto",
                        gap: "5px",
                        display: "grid",
                        gridTemplateColumns: {
                            base: "repeat(3,1fr)",
                            md: "repeat(4,1fr)",
                            lg: "repeat(6,1fr)"
                        },
                        children: more.map((el, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                m: "auto",
                                borderRadius: "10px",
                                w: {
                                    base: "100%",
                                    md: "95%",
                                    lg: "95%"
                                },
                                mt: "20px",
                                border: "1px solid gray",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        w: "100%",
                                        src: el.img,
                                        alt: "products"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        ml: "1rem",
                                        mt: "10px",
                                        fontWeight: "bold",
                                        fontSize: {
                                            base: "12px",
                                            lg: "16px"
                                        },
                                        children: el.dis
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: {
                                            base: "10px",
                                            lg: "15px"
                                        },
                                        mb: "10px",
                                        ml: "1rem",
                                        children: el.desc
                                    })
                                ]
                            }, i))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        mt: "40px",
                        ml: {
                            base: "20px",
                            lg: "45px"
                        },
                        fontWeight: "bold",
                        fontSize: {
                            lg: "24px"
                        },
                        children: "Game Zone"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        ml: {
                            base: "20px",
                            lg: "45px"
                        },
                        children: "Play & Win"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                        width: "95%",
                        m: "auto",
                        mt: "1rem",
                        borderRadius: "10px",
                        src: "https://images-static.nykaa.com/uploads/ea4f8daa-4cb5-484a-90f5-b0d3e2998353.png?tr=w-1200,cm-pad_resize",
                        alt: ""
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                mt: "40px",
                ml: {
                    base: "20px",
                    lg: "45px"
                },
                fontWeight: "bold",
                fontSize: {
                    lg: "24px"
                },
                children: "Gifting at Nikka"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                ml: {
                    base: "20px",
                    lg: "45px"
                },
                children: "Give The Present of Beauty"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                width: "95%",
                m: "auto",
                mt: "20px",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                        borderRadius: "10px",
                        width: "49%",
                        src: "https://images-static.nykaa.com/uploads/a92dac26-400d-4158-af51-a7d247658835.jpg?tr=w-600,cm-pad_resize",
                        alt: "div"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                        borderRadius: "10px",
                        width: "49%",
                        src: "https://images-static.nykaa.com/uploads/fc68d953-2b29-42f9-8df6-5ee176ad8d01.jpg?tr=w-600,cm-pad_resize",
                        alt: "div"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                mt: "40px",
                ml: {
                    base: "20px",
                    lg: "45px"
                },
                fontWeight: "bold",
                fontSize: {
                    lg: "24px"
                },
                children: "Beauty Advice"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                ml: {
                    base: "20px",
                    lg: "45px"
                },
                children: "Discover Latest Tips & Tricks"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                width: "95%",
                m: "auto",
                mt: "20px",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                        borderRadius: "10px",
                        width: "49%",
                        src: "https://images-static.nykaa.com/uploads/71c7558d-637c-40ee-b09b-7dfda35cf125.jpg?tr=w-600,cm-pad_resize",
                        alt: "div"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                        borderRadius: "10px",
                        width: "49%",
                        src: "https://images-static.nykaa.com/uploads/a3720b61-fd58-40ff-90cd-72eb5b5ee3d4.jpg?tr=w-600,cm-pad_resize",
                        alt: "div"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                width: "95%",
                m: "auto",
                mt: {
                    base: "2rem",
                    lg: "6rem"
                },
                src: "https://images-static.nykaa.com/uploads/49e43a50-37b5-405a-be2d-ab90055115ec.jpg?tr=w-1200,cm-pad_resize",
                alt: ""
            }),
            scrollPosition > 500 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                href: "/#top",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    position: "fixed",
                    borderRadius: "50%",
                    bottom: "20px",
                    right: [
                        "1px",
                        "14px"
                    ],
                    zIndex: 1,
                    bgColor: "#ececec",
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                        p: "10px",
                        borderRadius: "50%",
                        src: "https://thumbs.dreamstime.com/z/gray-arrow-up-icon-isolated-background-modern-simple-flat-upload-sign-business-internet-concep-concept-trendy-minimal-vector-go-122653042.jpg",
                        w: "50px",
                        h: "50px",
                        alt: ""
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;