(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 4875:
/***/ ((module) => {

// Exports
module.exports = {
	"line": "cart_line___zEjx",
	"pop_outin": "cart_pop_outin__73Q3S",
	"anim-popoutin": "cart_anim-popoutin__wLqqP"
};


/***/ }),

/***/ 9491:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6988);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6134);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2210);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _cart_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4875);
/* harmony import */ var _cart_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_cart_module_css__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Cart = ()=>{
    const { isAuthenticated  } = (0,_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__.useAuth0)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)();
    const btnRef = react__WEBPACK_IMPORTED_MODULE_5___default().useRef();
    const checkout = ()=>{
        alert("Your Order Will Be Dispatch in 5 days");
    };
    // console.log(total);
    const LS_data = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        const value = localStorage.getItem("cart");
        const user = !!value ? JSON.parse(value) : [];
        setData(user);
    }, []);
    const totalPrice = ()=>{
        let total = 0;
        data?.map((el)=>{
            total += el.disc_price;
        });
        setTotal(total);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        LS_data();
        totalPrice();
    }, [
        total
    ]);
    const deleteCart = (id)=>{
        let arr = data.filter((el)=>el.id !== id);
        localStorage.setItem("cart", JSON.stringify(arr));
        const value = localStorage.getItem("cart");
        const user = !!value ? JSON.parse(value) : [];
        setData(user);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Cart Page"
                })
            }),
            isAuthenticated ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        className: (_cart_module_css__WEBPACK_IMPORTED_MODULE_6___default().line),
                        pb: "100px",
                        mt: {
                            base: "70px",
                            lg: "10px"
                        },
                        children: data.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                            zIndex: 0,
                            className: (_cart_module_css__WEBPACK_IMPORTED_MODULE_6___default().pop_outin),
                            fontSize: {
                                base: "15px",
                                md: "20px",
                                lg: "35px"
                            },
                            textAlign: "center",
                            mt: {
                                base: "3rem",
                                md: "3rem",
                                lg: "1px"
                            },
                            children: [
                                " ",
                                "Grand Total = ₹ ",
                                total ? total : "...Calculating"
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                            zIndex: 0,
                            className: (_cart_module_css__WEBPACK_IMPORTED_MODULE_6___default().pop_outin),
                            fontSize: {
                                base: "15px",
                                md: "20px",
                                lg: "35px"
                            },
                            textAlign: "center",
                            mt: {
                                base: "3rem",
                                md: "3rem",
                                lg: "1px"
                            },
                            children: "Your Cart is Empty"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        w: "90%",
                        m: "auto",
                        templateColumns: {
                            base: "repeat(1,1fr)",
                            md: "repeat(2,1fr)",
                            lg: "repeat(4,1fr)"
                        },
                        gap: "20px",
                        children: data && data.map((el, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                width: "85%",
                                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                m: "auto",
                                p: "2%",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {
                                        m: "auto",
                                        src: el.img,
                                        alt: "products"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                        color: "#ed4a4e",
                                        h: "2rem",
                                        fontWeight: "600",
                                        m: "auto",
                                        mt: "20px",
                                        textAlign: "center",
                                        w: "95%",
                                        children: el.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "5px",
                                        m: "30px",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                _hover: {
                                                    bgColor: "red",
                                                    color: "white"
                                                },
                                                bgColor: "transparent",
                                                children: "-"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                                children: "Qty: "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                _hover: {
                                                    bgColor: "green",
                                                    color: "white"
                                                },
                                                bgColor: "transparent",
                                                children: "+"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                            fontWeight: "600",
                                            textAlign: "center",
                                            mb: "10px",
                                            children: [
                                                "₹ ",
                                                el.disc_price
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                            w: "25px",
                                            position: "absolute",
                                            ml: "13rem",
                                            mt: "-45rem",
                                            color: "white",
                                            bgColor: "red",
                                            onClick: ()=>deleteCart(el.id),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.DeleteIcon, {})
                                        })
                                    })
                                ]
                            }, i))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {
                        m: "20px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                            borderRadius: "",
                            bgColor: "#ed4a4e",
                            color: "white",
                            ref: btnRef,
                            mt: "2rem",
                            w: "220px",
                            fontSize: "lg",
                            onClick: onOpen,
                            children: "CONTINUE"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Drawer, {
                        isOpen: isOpen,
                        placement: "right",
                        onClose: onClose,
                        finalFocusRef: btnRef,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerOverlay, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerContent, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerCloseButton, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerHeader, {
                                        fontSize: "30px",
                                        children: "New Address"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerHeader, {
                                        children: "Address"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerBody, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                                placeholder: "Pincode"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                                mt: "20px",
                                                placeholder: "House/Flat/Office No."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                                mt: "20px",
                                                placeholder: "Road Name/ Area/ Colony"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerHeader, {
                                        children: "Contact"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerBody, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                                placeholder: "Name"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                                mt: "20px",
                                                placeholder: "Phone"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
                                                mt: "20px",
                                                placeholder: "Email ID (Optional)"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.DrawerFooter, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                variant: "outline",
                                                mr: 3,
                                                onClick: onClose,
                                                children: "Cancel"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                                borderRadius: "",
                                                bgColor: "#ed4a4e",
                                                color: "white",
                                                onClick: checkout,
                                                children: "CHECKOUT"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    " "
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                justifyContent: "center",
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                        mt: {
                            base: "100px",
                            lg: "30px"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Alert, {
                            status: "error",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AlertIcon, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AlertTitle, {
                                    children: "Please Login First"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AlertDescription, {
                                    children: "You Cant Access This Page Without Login."
                                })
                            ]
                        })
                    }),
                    " "
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6988:
/***/ ((module) => {

"use strict";
module.exports = require("@auth0/auth0-react");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__(9491));
module.exports = __webpack_exports__;

})();