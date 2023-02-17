(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ListHeader = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
        fontWeight: "500",
        fontSize: "lg",
        mb: 2,
        children: children
    });
};
function Footer() {
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("initial");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        bgColor: "#f3f3f3",
        pt: "40px",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                minH: "20vh",
                align: "center",
                justify: "center",
                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("#3f414d", "gray.800"),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
                    maxW: "lg",
                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("#3f414d", "whiteAlpha.100"),
                    rounded: "lg",
                    p: 6,
                    direction: "column",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                            as: "h2",
                            color: "white",
                            fontSize: {
                                base: "xl",
                                sm: "2xl"
                            },
                            textAlign: "center",
                            mb: 5,
                            children: "Get Special Offer In Your Inbox"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            direction: {
                                base: "column",
                                md: "row"
                            },
                            as: "form",
                            spacing: "12px",
                            onSubmit: (e)=>{
                                e.preventDefault();
                                setError(false);
                                setState("submitting");
                                // remove this code and implement your submit logic right here
                                setTimeout(()=>{
                                    if (email === "fail@example.com") {
                                        setError(true);
                                        setState("initial");
                                        return;
                                    }
                                    setState("success");
                                }, 1000);
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                        variant: "solid",
                                        borderWidth: 1,
                                        color: "gray.800",
                                        _placeholder: {
                                            color: "gray.400"
                                        },
                                        id: "email",
                                        type: "email",
                                        required: true,
                                        placeholder: "Your Email",
                                        "aria-label": "Your Email",
                                        value: email,
                                        disabled: state !== "initial",
                                        onChange: (e)=>setEmail(e.target.value)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                                    w: {
                                        base: "100%",
                                        md: "40%"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        colorScheme: state === "success" ? "green" : "blue",
                                        isLoading: state === "submitting",
                                        w: "100%",
                                        type: state === "success" ? "button" : "submit",
                                        children: state === "success" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.CheckIcon, {}) : "Submit"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            mt: 2,
                            textAlign: "center",
                            color: error ? "red.500" : "gray.500",
                            children: error ? "Oh no an error occured! \uD83D\uDE22 Please try again later." : "You won't receive any spam! ✌️"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("#8c8d94", "gray.900"),
                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("white", "gray.200"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack,
                    maxW: "6xl",
                    py: 10,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SimpleGrid, {
                        templateColumns: "repeat(5,1fr)",
                        spacing: 18,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                spacing: 6,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                            w: {
                                                base: "35px",
                                                lg: "65px"
                                            },
                                            src: "./imgg.png",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                        align: "flex-start",
                                        fontSize: {
                                            base: "12px",
                                            lg: "16px"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                _hover: {
                                                    color: "#fc2779"
                                                },
                                                href: "#",
                                                children: "Who are we?"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                _hover: {
                                                    color: "#fc2779"
                                                },
                                                href: "#",
                                                children: "Careers"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                _hover: {
                                                    color: "#fc2779"
                                                },
                                                href: "#",
                                                children: "Authenticity"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                _hover: {
                                                    color: "#fc2779"
                                                },
                                                href: "#",
                                                children: "Nikka CSR"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                _hover: {
                                                    color: "#fc2779"
                                                },
                                                href: "#",
                                                children: "Investor Relations"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                align: "flex-start",
                                fontSize: {
                                    base: "12px",
                                    lg: "16px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListHeader, {
                                        children: "Help"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Contact Us"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Features"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Store Locator"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Shipping 7 Delivery"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Sell on Nikka"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Frequency asked questions"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                align: "flex-start",
                                fontSize: {
                                    base: "12px",
                                    lg: "16px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListHeader, {
                                        children: "Inspire Me"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Beauty Book"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Nikka TV"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Nikka Network"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Buying Guides"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Partners"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                align: "flex-start",
                                fontSize: {
                                    base: "12px",
                                    lg: "16px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListHeader, {
                                        children: "Quick Links"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Offer Zone"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "New Launches"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Nikka Fashion"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Nikka Pro"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Status"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                align: "flex-start",
                                fontSize: {
                                    base: "12px",
                                    lg: "16px"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListHeader, {
                                        children: "Top Categories"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Makeup"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Skin"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Hair"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Bath & Body"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Mom & Baby"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Appliances"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Natural"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        _hover: {
                                            color: "#fc2779"
                                        },
                                        href: "#",
                                        children: "Wellness"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                src: "./footer.png",
                alt: ""
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1596:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import Image from "next/image";
function Dropdown() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.800"),
                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.600", "white"),
                m: "auto",
                minH: "50px",
                py: {
                    base: 2
                },
                px: {
                    base: 4
                },
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                align: "center",
                width: "100%",
                display: {
                    base: "none",
                    md: "none",
                    lg: "flex"
                },
                justifyContent: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    flex: {
                        base: 1
                    },
                    justify: {
                        base: "center",
                        md: "space-around"
                    },
                    alignItems: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        display: {
                            base: "none",
                            md: "flex"
                        },
                        ml: 10,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DesktopNav, {})
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
        ]
    });
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
            }
        ]
    },
    {
        label: "Skin",
        href: "/skin",
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
                href: "/skin"
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
                href: "/skin"
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
                href: "/skin"
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
                href: "/skin"
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
                href: "/skin"
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
                href: "/skin"
            }
        ]
    },
    {
        label: "Hair",
        href: "/haircare",
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
                href: "/haircare"
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
                href: "/haircare"
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
                href: "/haircare"
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
                href: "/haircare"
            },
            {
                label: "Top Brands",
                subLabel: "Nikka Naturals",
                subLabel1: "L'Oreal Paris",
                subLabel2: "Wella Professionals",
                subLable5: "BBlunt",
                subLabel3: "Herbal Essences",
                subLabel4: "Professionals",
                href: "/haircare"
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
                href: "/haircare"
            }
        ]
    },
    {
        label: "Appliances",
        href: "/nikka_special",
        children: [
            {
                label: "Hair Styling Tools",
                subLabel: "Hair Dryers",
                subLabel1: "Straighters",
                subLabel2: "Curling Iron/Stykers",
                subLabel4: "Multi Stylers",
                href: "/nikka_special"
            },
            {
                label: "Hair Removal Tools",
                subLabel: "Equilators",
                subLabel1: "Body Groomers",
                subLabel2: "Bikini Trimmer",
                href: "/nikka_special"
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
                href: "/nikka_special"
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
                href: "/nikka_special"
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
                href: "/nikka_special"
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
                href: "/nikka_special"
            }
        ]
    },
    {
        label: "Bath & Body",
        href: "/nikka_special",
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
                href: "/nikka_special"
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
                href: "/nikka_special"
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
                href: "/nikka_special"
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
                href: "/makeup"
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
                href: "/nikka_special"
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
                href: "/nikka_special"
            }
        ]
    },
    {
        label: "Natural",
        href: "nikka_special",
        children: [
            {
                label: "All Types",
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
                href: "/skin"
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
                href: "/skin"
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
                href: "/haircare"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
            }
        ]
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
                href: "/makeup"
            },
            {
                label: "Kids Care",
                subLabel: "Toners Under 100",
                subLabel1: "Fash Wash For Oily Skin",
                subLabel2: "Oil Free Face",
                subLabel3: "Moisturizers",
                subLabel4: "Lip Balm Under 500",
                subLabel5: "Vitamin C Serum",
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
            }
        ]
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
            }
        ]
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
            }
        ]
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
            }
        ]
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
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
                href: "/makeup"
            }
        ]
    }
];
const DesktopNav = ()=>{
    const linkColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.600", "gray.200");
    const popoverContentBgColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.800");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        spacing: 4,
        children: [
            NAV_ITEMS.map((navItem, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
                        trigger: "hover",
                        placement: "bottom-start",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PopoverTrigger, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    p: 2,
                                    href: navItem.href ?? "/makeup",
                                    fontSize: "sm",
                                    fontWeight: 600,
                                    color: linkColor,
                                    className: "dropdown",
                                    _hover: {
                                        textDecoration: "none",
                                        color: "#ed4a4e"
                                    },
                                    children: navItem.label
                                })
                            }),
                            navItem.children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PopoverContent, {
                                border: 0,
                                boxShadow: "xl",
                                bg: popoverContentBgColor,
                                p: 4,
                                rounded: "xl",
                                minW: "5xl",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(6,1fr)",
                                    children: navItem.children.map((child, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DesktopSubNav, {
                                            ...child
                                        }, i + 600))
                                })
                            })
                        ]
                    })
                }, i + 500)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                width: "60px",
                bgColor: "transparent",
                src: "https://th.bing.com/th/id/OIP.tdyx54w7Nvnfz2Q7DNbaiQHaDq?pid=ImgDet&rs=1",
                alt: "sale"
            })
        ]
    });
};
const DesktopSubNav = ({ label , label1 , label2 , href , subLabel , subLabel1 , subLabel2 , subLabel3 , subLabel4 , subLabel5 , subLabel6 , subLabel7 , subLabel8 , subLabel9  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
        href: href,
        role: "group",
        display: "block",
        p: 2,
        rounded: "md",
        _hover: {
            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("pink.50", "gray.900")
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
            direction: "row",
            align: "center",
            width: "150px",
            p: "10px",
            bgColor: "gray.100",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            transition: "all .3s ease",
                            _groupHover: {
                                color: "pink.400"
                            },
                            fontWeight: 500,
                            color: "#ed4a4e",
                            children: label
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontSize: "sm",
                                    children: subLabel
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontSize: "sm",
                                    children: subLabel1
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontSize: "sm",
                                    children: subLabel2
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontSize: "sm",
                                    children: subLabel3
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontSize: "sm",
                                    children: subLabel4
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    transition: "all .3s ease",
                                    _groupHover: {
                                        color: "pink.400"
                                    },
                                    fontWeight: 500,
                                    color: "#ed4a4e",
                                    children: label1
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontSize: "sm",
                                    children: subLabel5
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontSize: "sm",
                                    children: subLabel6
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    transition: "all .3s ease",
                                    _groupHover: {
                                        color: "pink.400"
                                    },
                                    fontWeight: 500,
                                    color: "#ed4a4e",
                                    children: label2
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontSize: "sm",
                                    children: subLabel7
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontSize: "sm",
                                    children: subLabel8
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    fontSize: "sm",
                                    children: subLabel9
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    transition: "all .3s ease",
                    transform: "translateX(-10px)",
                    opacity: 0,
                    _groupHover: {
                        opacity: "100%",
                        transform: "translateX(0)"
                    },
                    justify: "flex-end",
                    align: "center",
                    flex: 1,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                        color: "pink.400",
                        w: 5,
                        h: 5,
                        as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronRightIcon
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9468:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6134);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6988);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Promo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6314);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1596);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__, _Promo__WEBPACK_IMPORTED_MODULE_5__, _Dropdown__WEBPACK_IMPORTED_MODULE_6__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__, _Promo__WEBPACK_IMPORTED_MODULE_5__, _Dropdown__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Navbar() {
    const [data, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { user , isAuthenticated , loginWithRedirect , logout  } = (0,_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_4__.useAuth0)();
    const { isOpen , onToggle  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    const handleChange = (e)=>{
        setTimeout(function() {
            window.location = e.target.value;
        }, 2000);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const value = localStorage.getItem("cart");
        const res = !!value ? JSON.parse(value) : [];
        setUser(res);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Promo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                position: "fixed",
                top: {
                    base: "1px",
                    lg: "30px"
                },
                width: "100%",
                bgColor: "white",
                zIndex: "2",
                display: {
                    base: "grid",
                    lg: "flex"
                },
                gridTemplateRows: "2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.800"),
                    color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.600", "white"),
                    m: "auto",
                    mt: {
                        base: "1px",
                        lg: "0.5rem"
                    },
                    minH: "50px",
                    py: {
                        base: 2
                    },
                    px: {
                        base: 4
                    },
                    borderStyle: "solid",
                    borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.200", "gray.900"),
                    align: "center",
                    width: "80%",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            flex: {
                                base: 1,
                                md: "auto"
                            },
                            ml: {
                                base: -2
                            },
                            display: {
                                base: "flex",
                                md: "none"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                onClick: onToggle,
                                icon: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.CloseIcon, {
                                    w: 3,
                                    h: 3
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.HamburgerIcon, {
                                    w: 5,
                                    h: 5
                                }),
                                variant: "ghost",
                                "aria-label": "Toggle Navigation"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                            flex: {
                                base: 1
                            },
                            justify: {
                                base: "center",
                                md: "start"
                            },
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    href: "/homepage",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        width: "50",
                                        height: "50",
                                        src: "imgg.png",
                                        alt: "logo"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                    display: {
                                        base: "none",
                                        md: "flex"
                                    },
                                    ml: 10,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DesktopNav, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            flex: {
                                base: 1,
                                md: 0
                            },
                            justify: "flex-end",
                            direction: "row",
                            spacing: 6,
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                    bgColor: {
                                        base: "transparent",
                                        lg: "#f4f4f4"
                                    },
                                    border: {
                                        base: "",
                                        lg: "1px solid"
                                    },
                                    p: "0px 10px",
                                    borderRadius: "5px",
                                    position: {
                                        base: "absolute",
                                        lg: "relative"
                                    },
                                    display: {
                                        base: "flex",
                                        lg: "inline-flex"
                                    },
                                    alignItems: "center",
                                    width: {
                                        base: "100%",
                                        lg: "250px"
                                    },
                                    mt: {
                                        base: "100px",
                                        lg: "0px"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {
                                            ml: {
                                                base: "140px",
                                                lg: "0px"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                            onChange: handleChange,
                                            border: "transparent",
                                            placeholder: "Search on Nikka"
                                        })
                                    ]
                                }),
                                isAuthenticated && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                            alignItems: "center",
                                            gap: "5px",
                                            display: {
                                                base: "none",
                                                lg: "inline-flex"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                                    width: {
                                                        base: "20px",
                                                        lg: "30px"
                                                    },
                                                    borderRadius: "50%",
                                                    src: user.picture,
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                    fontWeight: "600",
                                                    fontSize: "13px",
                                                    children: user.nickname
                                                })
                                            ]
                                        }),
                                        " "
                                    ]
                                }),
                                isAuthenticated ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    width: {
                                        base: "50px",
                                        sm: "60px",
                                        md: "70px",
                                        lg: "80px"
                                    },
                                    height: {
                                        base: "18px",
                                        sm: "20px",
                                        md: "30px"
                                    },
                                    display: "inline-flex",
                                    fontSize: {
                                        base: "10px",
                                        sm: "11px",
                                        md: "12px",
                                        lg: "sm"
                                    },
                                    fontWeight: 600,
                                    color: "white",
                                    bg: "#ed4a4e",
                                    _hover: {
                                        bg: "pink.300"
                                    },
                                    mr: {
                                        lg: "50px"
                                    },
                                    onClick: ()=>logout({
                                            logoutParams: {
                                                returnTo: window.location.origin
                                            }
                                        }),
                                    children: "Log Out"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    width: {
                                        base: "50px",
                                        sm: "60px",
                                        md: "70px",
                                        lg: "80px"
                                    },
                                    height: {
                                        base: "18px",
                                        sm: "20px",
                                        md: "30px"
                                    },
                                    display: "inline-flex",
                                    fontSize: {
                                        base: "10px",
                                        sm: "11px",
                                        md: "12px",
                                        lg: "sm"
                                    },
                                    fontWeight: 600,
                                    color: "white",
                                    bg: "#ed4a4e",
                                    _hover: {
                                        bg: "pink.300"
                                    },
                                    mr: {
                                        lg: "50px"
                                    },
                                    onClick: ()=>loginWithRedirect(),
                                    children: "Sign In"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    href: "/cart",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                            cursor: "pointer",
                                            _hover: {
                                                p: "1px"
                                            },
                                            width: "21px",
                                            height: "21px",
                                            src: "https://cdn-icons-png.flaticon.com/512/736/736943.png",
                                            alt: "bag"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            position: "absolute",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: "50%",
                                            bgColor: "#ed4a4e",
                                            textAlign: "center",
                                            mt: "-32px",
                                            ml: "10px",
                                            w: "20px",
                                            h: "20px",
                                            color: "white",
                                            children: data && isAuthenticated ? data.length : 0
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
                in: isOpen,
                animateOpacity: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNav, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                mt: {
                    base: "1px",
                    lg: "6.8rem"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            })
        ]
    });
}
const NAV_ITEMS = [
    {
        label: "Categories",
        href: "/homepage"
    },
    {
        label: "Brands",
        href: "/nikka_special",
        children: [
            {
                head: "POPULAR",
                img: "https://adn-static1.nykaa.com/media/wysiwyg/cms/beauty/menu/olaplex.png",
                img1: "https://adn-static2.nykaa.com/media/wysiwyg/2019/lorealparis.png",
                img2: "https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/FacesCanadaa.png",
                img3: "https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/LOTUS-HERBALS.png",
                img4: "https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Estee-Lauder.png"
            },
            {
                head: "LUXE",
                img: "https://adn-static2.nykaa.com/media/wysiwyg/lakme_mega_menu_header.png",
                img1: "https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/Huda.png",
                img2: "https://adn-static2.nykaa.com/media/wysiwyg/HeaderIcons/The-Face-Shop.png",
                img3: "https://adn-static2.nykaa.com/media/wysiwyg/2019/niveaa.png",
                img4: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/murad.png"
            },
            {
                head: "ONLY AT NYKAA",
                img: "https://www.nykaa.com/media/wysiwyg/cms/beauty/menu/acnesquad.png",
                img1: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/gentlemans-crew.png",
                img2: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/gucci.png",
                img3: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/dior.png",
                img4: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/kay-beauty.png"
            },
            {
                head: "NEW LAUNCHES",
                img: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/laneige.png",
                img1: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/nykd-by-nykaa.png",
                img2: "https://adn-static2.nykaa.com/media/wysiwyg/cms/beauty/menu/fyhp.png",
                img3: "https://adn-static2.nykaa.com/media/wysiwyg/2020/BrandslogoMenubar/rsvp.png",
                img4: "https://adn-static2.nykaa.com/media/wysiwyg/ABCD-Two/See-All_CTA.png"
            }
        ]
    },
    {
        label: "Luxe",
        href: "/huda",
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
                href: "/makeup"
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
                href: "/skin"
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
                href: "/huda"
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
                href: "/haircare"
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
                href: "/makeup"
            }
        ]
    },
    {
        label: "Nikka Fashion",
        href: "/nikka_special",
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
                href: "/nikka_special"
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
                href: "/homepage"
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
                href: "/homepage"
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
                href: "/nikka_special"
            },
            {
                img: "https://www.nykaa.com/media/wysiwyg/2022/megamenu_winterwear.jpeg"
            }
        ]
    },
    {
        label: "Beauty Advice",
        href: "/makeup",
        children: [
            {
                img: "https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg",
                label: "BEAUTY BOOK",
                subLabel: "Nikka's Digital Magazine",
                href: "/makeup"
            },
            {
                img: "https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png",
                label: "NYKAA TV",
                subLabel: "MAsterclasses By Experts & Vloggers",
                href: "/makeup"
            },
            {
                img: "https://images-static.naikaa.com/media/wysiwyg/2021/Buying-Guide-Mega-menu-new.jpg",
                label: "BEAUTY GUIDES",
                subLabel: "Tips To Explore While You Shop",
                href: "/makeup"
            }
        ]
    }
];
const DesktopNav = ()=>{
    const popoverContentBgColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.800");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        spacing: 4,
        children: NAV_ITEMS.map((navItem, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
                    trigger: "hover",
                    placement: "bottom-start",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PopoverTrigger, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                p: 2,
                                href: navItem.href ?? "#",
                                fontSize: "sm",
                                fontWeight: 600,
                                color: "black",
                                _hover: {
                                    textDecoration: "none",
                                    color: "#ed4a4e"
                                },
                                children: navItem.label
                            })
                        }),
                        navItem.children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PopoverContent, {
                            border: 0,
                            boxShadow: "xl",
                            bg: popoverContentBgColor,
                            p: 4,
                            minW: "4xl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                display: "grid",
                                gridTemplateColumns: "repeat(5,1fr)",
                                gridAutoRows: "auto",
                                children: navItem.children.map((child, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DesktopSubNav, {
                                        ...child
                                    }, i + 200))
                            })
                        })
                    ]
                })
            }, i + 100))
    });
};
const DesktopSubNav = ({ img , img1 , img2 , img3 , img4 , head , label , label1 , label2 , href , subLabel , subLabel1 , subLabel2 , subLabel3 , subLabel4 , subLabel5 , subLabel6  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
        href: href,
        role: "group",
        display: "block",
        p: 2,
        rounded: "md",
        _hover: {
            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("pink.50", "gray.900")
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                bgColor: "gray.100",
                _hover: {
                    bgColor: "#ed4a4e",
                    color: "white"
                },
                children: head
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                direction: "row",
                align: "center",
                width: "150px",
                justifyContent: "center",
                mt: "20px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: img,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: img1,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: img2,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: img3,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: img4,
                                        alt: ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                display: "grid",
                                gap: "10px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "15px",
                                        color: "#ed4a4e",
                                        fontWeight: "bold",
                                        children: label
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "12px",
                                        children: subLabel
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "12px",
                                        children: subLabel1
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "12px",
                                        children: subLabel2
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "15px",
                                        color: "#ed4a4e",
                                        fontWeight: "bold",
                                        children: label1
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "12px",
                                        children: subLabel3
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "12px",
                                        children: subLabel4
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "15px",
                                        color: "#ed4a4e",
                                        fontWeight: "bold",
                                        children: label2
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "12px",
                                        children: subLabel5
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        fontSize: "12px",
                                        children: subLabel6
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        transition: "all .1s ease",
                        transform: "translateX(-10px)",
                        opacity: 0,
                        _groupHover: {
                            opacity: "100%",
                            transform: "translateX(0)"
                        },
                        justify: "flex-end",
                        align: "center",
                        flex: 1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                            color: "pink.400",
                            w: 5,
                            h: 5,
                            as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronRightIcon
                        })
                    })
                ]
            })
        ]
    });
};
const MobileNav = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        position: "fixed",
        width: "100%",
        zIndex: 3,
        bgColor: "gray.100",
        p: 4,
        display: {
            md: "none"
        },
        children: NAV_ITEMS.map((navItem, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileNavItem, {
                ...navItem
            }, i + 300))
    });
};
const MobileNavItem = ({ label , children , href  })=>{
    const { isOpen , onToggle  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        gap: "120px",
        mt: "5rem",
        spacing: 14,
        onClick: children && onToggle,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                py: 2,
                zIndex: 3,
                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link,
                href: href ?? "#",
                justify: "space-between",
                align: "center",
                _hover: {
                    textDecoration: "none"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        zIndex: 3,
                        position: "fixed",
                        fontWeight: 600,
                        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.600", "gray.200"),
                        children: label
                    }),
                    children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                        as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon,
                        transition: "all .25s ease-in-out",
                        transform: isOpen ? "rotate(180deg)" : "",
                        w: 6,
                        h: 6,
                        position: "fixed",
                        ml: "100px"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
                in: isOpen,
                animateOpacity: true,
                style: {
                    marginTop: "0!important"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    ml: "20px",
                    pl: 4,
                    w: "100%",
                    bgColor: "gray.100",
                    zIndex: 3,
                    borderLeft: 1,
                    borderStyle: "solid",
                    position: "fixed",
                    borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.200", "gray.700"),
                    align: "start",
                    children: children && children.map((child, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                            py: 2,
                            href: child.href,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                    width: "100px",
                                    src: child.img,
                                    alt: ""
                                }),
                                child.label
                            ]
                        }, i + 400))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6314:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Promo = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        position: "fixed",
        top: "0px",
        zIndex: "3",
        width: "100%",
        height: "40px",
        bgColor: "#fe93bc",
        justifyContent: "space-around",
        alignItems: "center",
        fontWeight: "medium",
        display: {
            base: "none",
            md: "none",
            lg: "flex"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                _hover: {
                    color: "white"
                },
                children: "BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                gap: "12px",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        alignItems: "center",
                        gap: "5px",
                        _hover: {
                            color: "white"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                width: "20px",
                                h: "19px",
                                src: "https://cdn-icons-png.flaticon.com/512/244/244210.png",
                                alt: "phone"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: "Get App"
                            })
                        ]
                    }),
                    "|",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        alignItems: "center",
                        gap: "5px",
                        _hover: {
                            color: "white"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                width: "22px",
                                height: "18px",
                                src: "https://cdn-icons-png.flaticon.com/512/2838/2838912.png",
                                alt: "location"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: "Store & Events"
                            })
                        ]
                    }),
                    "|",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        alignItems: "center",
                        gap: "5px",
                        _hover: {
                            color: "white"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                width: "20px",
                                src: "https://cdn-icons-png.flaticon.com/512/612/612804.png",
                                alt: "location"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: "Gift Card"
                            })
                        ]
                    }),
                    "|",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        alignItems: "center",
                        gap: "5px",
                        _hover: {
                            color: "white"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                width: "18px",
                                height: "18px",
                                src: "https://cdn-icons-png.flaticon.com/512/471/471664.png",
                                alt: "location"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                children: "Help"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6988);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8505);
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__, _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__, _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_3__.Auth0Provider, {
            domain: "dev-sszt1eabd2luwupe.us.auth0.com",
            clientId: "bW3IMnB4eEUoxOZMdpKou2E0fa8uCqFj",
            authorizationParams: {
                redirect_uri: "http://localhost:3000/"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6988:
/***/ ((module) => {

"use strict";
module.exports = require("@auth0/auth0-react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6134:
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/icons");;

/***/ }),

/***/ 2210:
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8484));
module.exports = __webpack_exports__;

})();