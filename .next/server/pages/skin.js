"use strict";
(() => {
var exports = {};
exports.id = 665;
exports.ids = [665];
exports.modules = {

/***/ 3001:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6988);
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Skin() {
    const [load, setLoad] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const { isAuthenticated  } = (0,_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_1__.useAuth0)();
    const getData = async ()=>{
        setLoad(true);
        try {
            let res = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("https://json-live-j5qk.onrender.com/skin");
            setPost(res.data);
            setLoad(false);
        } catch (err) {
            console.log(err);
        }
    // console.log(res.data);
    };
    const sortLowByName = ()=>{
        post.sort((a, b)=>{
            return a.title < b.title ? 1 : a.title > b.title ? -1 : 0;
        });
        setPost([
            ...post
        ]);
    };
    //  p1.manufactured > p2.manufactured) ? 1 : (p1.manufactured < p2.manufactured) ? -1 : 0);
    const sortHighByName = ()=>{
        post.sort((a, b)=>{
            return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
        });
        setPost([
            ...post
        ]);
    };
    const sortLowByRating = ()=>{
        post.sort((a, b)=>{
            return b.rating - a.rating;
        });
        setPost([
            ...post
        ]);
    };
    const sortHighByRating = ()=>{
        post.sort((a, b)=>{
            return a.rating - b.rating;
        });
        setPost([
            ...post
        ]);
    };
    const sortLowByPrice = ()=>{
        post.sort((a, b)=>{
            return b.disc_price - a.disc_price;
        });
        setPost([
            ...post
        ]);
    };
    const sortHighByPrice = ()=>{
        post.sort((a, b)=>{
            return a.disc_price - b.disc_price;
        });
        setPost([
            ...post
        ]);
    };
    const handleCart = (el)=>{
        data.push(el);
        {
            isAuthenticated ? localStorage.setItem("cart", JSON.stringify(data)) : alert("Please Login First");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const value = localStorage.getItem("cart");
        const user = !!value ? JSON.parse(value) : [];
        setData(user);
        getData();
    }, []);
    // console.log(user);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: load ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            m: "auto",
            mt: {
                base: "1px",
                lg: "-30px"
            },
            bgColor: "#f3f3f3",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Nikka Official / Skin"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                    p: "30px",
                    mt: {
                        base: "110px",
                        lg: "30px"
                    },
                    fontSize: {
                        base: "25px",
                        md: "30px",
                        lg: "40px"
                    },
                    color: "#ed4a4e",
                    fontWeight: "700",
                    textAlign: "center",
                    children: "Skin Products"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                    border: "2px",
                    w: "80%",
                    m: "auto",
                    borderColor: "#ed4a4e"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                    flexDirection: {
                        base: "column",
                        md: "row"
                    },
                    width: "60%",
                    justifyContent: "center",
                    m: "auto",
                    lineHeight: "30px",
                    gap: {
                        base: "20%",
                        lg: "20%"
                    },
                    cursor: "pointer",
                    mb: {
                        base: "20px",
                        md: "10px"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                                    fontWeight: "600",
                                    color: "#ed4a4e",
                                    children: "Sort By Name"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    h: {
                                        base: "30px",
                                        md: "35px",
                                        lg: "40px"
                                    },
                                    color: {
                                        base: "white",
                                        lg: "black"
                                    },
                                    bgColor: {
                                        base: "#ed4a4e",
                                        md: "gray.100"
                                    },
                                    _hover: {
                                        color: "white",
                                        bg: "#ed4a4e"
                                    },
                                    onClick: sortHighByName,
                                    children: "Ascending"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    h: {
                                        base: "30px",
                                        md: "35px",
                                        lg: "40px"
                                    },
                                    color: {
                                        base: "white",
                                        lg: "black"
                                    },
                                    bgColor: {
                                        base: "#ed4a4e",
                                        md: "gray.100"
                                    },
                                    _hover: {
                                        color: "white",
                                        bg: "#ed4a4e"
                                    },
                                    onClick: sortLowByName,
                                    children: "Descending"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                                    fontWeight: "600",
                                    color: "#ed4a4e",
                                    children: "Sort By Price"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    h: {
                                        base: "30px",
                                        md: "35px",
                                        lg: "40px"
                                    },
                                    color: {
                                        base: "white",
                                        lg: "black"
                                    },
                                    bgColor: {
                                        base: "#ed4a4e",
                                        md: "gray.100"
                                    },
                                    _hover: {
                                        color: "white",
                                        bg: "#ed4a4e"
                                    },
                                    onClick: sortHighByPrice,
                                    children: "Low To High"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    h: {
                                        base: "30px",
                                        md: "35px",
                                        lg: "40px"
                                    },
                                    color: {
                                        base: "white",
                                        lg: "black"
                                    },
                                    bgColor: {
                                        base: "#ed4a4e",
                                        md: "gray.100"
                                    },
                                    _hover: {
                                        color: "white",
                                        bg: "#ed4a4e"
                                    },
                                    onClick: sortLowByPrice,
                                    children: "High To Low"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                                    fontWeight: "600",
                                    color: "#ed4a4e",
                                    children: "Sort By Ratings"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    h: {
                                        base: "30px",
                                        md: "35px",
                                        lg: "40px"
                                    },
                                    color: {
                                        base: "white",
                                        lg: "black"
                                    },
                                    bgColor: {
                                        base: "#ed4a4e",
                                        md: "gray.100"
                                    },
                                    _hover: {
                                        color: "white",
                                        bg: "#ed4a4e"
                                    },
                                    onClick: sortHighByRating,
                                    children: "Lowest Selling"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    h: {
                                        base: "30px",
                                        md: "35px",
                                        lg: "40px"
                                    },
                                    color: {
                                        base: "white",
                                        lg: "black"
                                    },
                                    bgColor: {
                                        base: "#ed4a4e",
                                        md: "gray.100"
                                    },
                                    _hover: {
                                        color: "white",
                                        bg: "#ed4a4e"
                                    },
                                    onClick: sortLowByRating,
                                    children: "Highest Selling"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    gridTemplateColumns: {
                        base: "repeat(1,1fr)",
                        md: "repeat(2,1fr)",
                        lg: "repeat(3,1fr)"
                    },
                    gap: "20px",
                    w: "80%",
                    m: "auto",
                    cursor: "pointer",
                    children: post && post.map((el, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            bgColor: "white",
                            m: "auto",
                            width: "300px",
                            justifyContent: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                    m: "auto",
                                    src: el.img,
                                    alt: ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    color: el.custom == "FEATURED" ? "red" : "green.400",
                                    fontWeight: "600",
                                    fontSize: "13px",
                                    position: "absolute",
                                    mt: "3",
                                    ml: "4",
                                    children: el.custom
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    m: "auto",
                                    fontSize: "14px",
                                    w: "280px",
                                    mt: "10px",
                                    textAlign: "center",
                                    fontWeight: "600",
                                    children: el.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                    m: "auto",
                                    gap: "5px",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            children: "MRP: "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            textDecoration: el.disc_price ? "line-through" : "none",
                                            children: el.original_price
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            fontWeight: "bold",
                                            children: [
                                                " ₹ ",
                                                el.disc_price
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            color: "green.400",
                                            children: el.disc_rate
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    m: "auto",
                                    children: el.rating
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    as: "button",
                                    w: "300px",
                                    h: "2rem",
                                    mt: "20px",
                                    borderRadius: "0",
                                    color: "white",
                                    bgColor: "#ed4a4e",
                                    onClick: ()=>handleCart(el),
                                    _hover: {
                                        color: "red",
                                        bgColor: "gray.300"
                                    },
                                    children: "Add to Bag"
                                })
                            ]
                        }, i + 800))
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
            children: "...Loading"
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().memo(Skin));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6988:
/***/ ((module) => {

module.exports = require("@auth0/auth0-react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3001));
module.exports = __webpack_exports__;

})();