"use strict";
exports.id = 148;
exports.ids = [148];
exports.modules = {

/***/ 8148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/popup/VideoPopup.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close()
                                        ,
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: videoID,
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const { 0: video , 1: setVideo  } = (0,external_react_.useState)(false);
    const { 0: videoValue , 1: setVideoValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a1 = document.querySelectorAll("a");
            a1.forEach((a)=>{
                if (a.href.includes("www.youtube.com") || a.href.includes("vimeo.com") || a.href.includes("soundcloud.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false)
            ,
            videoID: videoValue
        })
    });
};
/* harmony default export */ const popup_VideoPopup = (VideoPopup);

// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(2192);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layout/Footer.js


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        id: "footer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "neoh_fn_footer",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer_top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "ft_in",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "desc",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "img/footer-logo.png",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "fn_title",
                                            children: "Join Now For Early Access"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "fn_desc",
                                            children: "Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere nibh a mi molestie, sit amet ornare"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "subscribe_form",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "subscribe_in",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    placeholder: "Email..."
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    className: "neoh_fn_button only_text",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text",
                                                        children: "Subscribe"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "returnmessage",
                                            "data-success": "Your message has been received, We will contact you soon.",
                                            "data-message": "You have subscribed to our updates. Thank you",
                                            "data-invalid-email": "Please enter valid email!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "empty_notice",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Please enter your Email"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "neoh_fn_social_list",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fn-icon-twitter"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fn-icon-facebook"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fn-icon-instagram"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fn-icon-pinterest"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fn-icon-behance"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "footer_bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fb_in",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fb_left",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Copyright ",
                                            new Date().getFullYear(),
                                            " - Designed & Developed by",
                                            " TerminalDAO ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                Termiverce: true
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "fb_right",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/roadmap",
                                                    children: "RoadMap"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "Cookies"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: "Terms & Conditions"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Footer = (Footer);

;// CONCATENATED MODULE: ./src/layout/Header.js



const Header = ()=>{
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(false);
    const { 0: homeToggle , 1: setHomeToggle  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `nav_overlay ${toggle ? "go" : ""}`,
                onClick: ()=>setToggle(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `neoh_fn_nav ${toggle ? "go" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "trigger is-active",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "trigger_in",
                            onClick: ()=>setToggle(false)
                            ,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text",
                                    children: "Close"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "hamb",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "hamb_a"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "hamb_b"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "hamb_c"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "nav_content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav_menu",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "menu-item menu-item-has-children",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    onClick: (e)=>{
                                                        e.preventDefault();
                                                        setHomeToggle(!homeToggle);
                                                    },
                                                    children: "Home"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "sub-menu",
                                                    style: {
                                                        display: homeToggle ? "block" : "none"
                                                    },
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: "Home"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "menu-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/about",
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "menu-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/blog",
                                                children: "Media"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "menu-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "nav_buttons",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "https://opensea.io/",
                                        className: "neoh_fn_button",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "svg/opensea.svg",
                                                    alt: "",
                                                    className: "fn__svg"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text",
                                                children: "OpenSea"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: "https://discord.com/",
                                        className: "neoh_fn_button",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "icon",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "svg/discord.svg",
                                                    alt: "",
                                                    className: "fn__svg"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text",
                                                children: "Discord"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `nav_footer ${toggle ? "ready" : ""}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nf_left",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Copyright 2023 - Designed & Developed by",
                                        " Termiverce  ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            target: "_blank",
                                            rel: "noreferrer"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nf_right",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "neoh_fn_social_list",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "twitter.com/terminaldao",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fn-icon-twitter"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fn-icon-facebook"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "instagram.com/terminaldao",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fn-icon-instagram"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "linkedin.com/terminaldao",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fn-icon-linkedin"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fn-icon-behance"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "neoh_fn_header",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header_in",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "img/logo.png",
                                            alt: ""
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "trigger",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "trigger_in",
                                    onClick: ()=>setToggle(!toggle)
                                    ,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text",
                                            children: "Menu"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "hamb",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "hamb_a"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "hamb_b"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "hamb_c"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./src/layout/ScrollTop.js


const ScrollTop = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            href: "#",
            className: "neoh_fn_totop",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "arrow",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "svg/right-arr.svg",
                        alt: "",
                        className: "fn__svg"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "circle",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "svg/circle.svg",
                        alt: "",
                        className: "fn__svg"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_ScrollTop = (ScrollTop);

;// CONCATENATED MODULE: ./src/layout/Layout.js








const Layout = ({ children , pageName  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* animationText */.eR)();
        (0,utilits/* neoh_fn_moving_blog */.ih)();
        (0,utilits/* dataBgImg */.sO)();
        (0,utilits/* imgToSVG */.zW)();
        window.addEventListener("scroll", utilits/* stickyNav */.h4);
        window.addEventListener("scroll", utilits/* progressTotop */.b_);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
                    children: [
                        "Neoh | ",
                        pageName
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_VideoPopup, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "neoh_fn_main",
                "data-footer-sticky": "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "neoh_fn_content",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_ScrollTop, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "neoh_fn_moving_box"
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 2192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b_": () => (/* binding */ progressTotop),
/* harmony export */   "eR": () => (/* binding */ animationText),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "ih": () => (/* binding */ neoh_fn_moving_blog),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "ot": () => (/* binding */ getPagination),
/* harmony export */   "sO": () => (/* binding */ dataBgImg),
/* harmony export */   "zW": () => (/* binding */ imgToSVG)
/* harmony export */ });
const animationText = ()=>{
    const fn_animated_text = document.querySelectorAll(".fn_animated_text");
    fn_animated_text.forEach((text)=>{
        let letters = text.innerHTML.split(""), time = text.getAttribute("wait"), speed = text.getAttribute("speed");
        if (!time) {
            time = 0;
        }
        if (!speed) {
            speed = 4;
        }
        speed = speed / 100;
        text.innerHTML = "<em>321...</em>";
        text.classList.add("ready");
        if (false) { var waypoint; }
    });
};
const neoh_fn_moving_blog = ()=>{
    const blog = document.querySelector(".neoh_fn_moving_blog");
    if (blog) {
        const neoh_fn_moving_box = document.querySelector(".neoh_fn_moving_box");
        if (!neoh_fn_moving_box) {
            let body = document.querySelector("body");
            let div = document.createElement("div");
            div.classList.add("neoh_fn_moving_box");
            body.appendChild(div);
        }
        let movingBox = document.querySelector(".neoh_fn_moving_box");
        let blogItems = document.querySelectorAll(".neoh_fn_moving_blog .item");
        blogItems.forEach((list)=>{
            list.addEventListener("mouseenter", (event)=>{
                if (!list.classList.contains("active")) {
                    list.classList.remove("active");
                    list.classList.add("active");
                    movingBox.classList.add("active");
                    var imgURL = list.querySelector(".moving_img").getAttribute("src");
                    movingBox.style.backgroundImage = `url(${imgURL})`;
                    movingBox.style.left = event.clientX + 15 + "px";
                    movingBox.style.top = event.clientY + 15 + "px";
                }
            });
            list.addEventListener("mouseleave", ()=>{
                list.classList.remove("active");
                movingBox.classList.remove("active");
            });
            list.addEventListener("mousemove", (event)=>{
                movingBox.style.left = event.clientX + 15 + "px";
                movingBox.style.top = event.clientY + 15 + "px";
            });
        });
    }
};
const stickyNav = ()=>{
    let offset = window.scrollY;
    const stickys = document.querySelectorAll(".neoh_fn_header");
    for(let i = 0; i < stickys.length; i++){
        const sticky = stickys[i];
        if (sticky) {
            if (offset > 10) {
                sticky.classList.add("fixer");
            } else {
                sticky.classList.remove("fixer");
            }
        }
    }
};
// Data image
const dataBgImg = ()=>{
    let d = document.querySelectorAll("[data-bg-img]");
    for(let i = 0; i < d.length; i++){
        const element = d[i];
        element.style.backgroundImage = `url(${element.getAttribute("data-bg-img")})`;
    }
};
const imgToSVG = ()=>{
    document.querySelectorAll("img.fn__svg").forEach((el)=>{
        const imgID = el.getAttribute("id");
        const imgClass = el.getAttribute("class");
        const imgURL = el.getAttribute("src");
        fetch(imgURL).then((data)=>data.text()
        ).then((response)=>{
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response, "text/html");
            let svg = xmlDoc.querySelector("svg");
            if (typeof imgID !== "undefined") {
                svg.setAttribute("id", imgID);
            }
            if (typeof imgClass !== "undefined") {
                svg.setAttribute("class", imgClass + " replaced-svg");
            }
            svg.removeAttribute("xmlns:a");
            el.parentNode && el.parentNode.replaceChild(svg, el);
        });
    });
};
const progressTotop = ()=>{
    var winScroll = window.pageYOffset;
    var height = document.body.clientHeight;
    var scrolled = parseInt(winScroll / (height - window.innerHeight) * 300);
    var totop = document.querySelector(".neoh_fn_totop");
    if (winScroll > 0) {
        totop.classList.add("active");
    } else {
        totop.classList.remove("active");
    }
    let strockSolid = totop.querySelector(".stroke-solid");
    if (strockSolid) {
        strockSolid.style.strokeDashoffset = 300 - scrolled;
    }
// totop.querySelector(".stroke-solid").css("stroke-dashoffset", 300 - scrolled);
};
// paggination
const pagination = (listClass, sort, active)=>{
    let list = document.querySelectorAll(listClass);
    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        }
    }
};
const getPagination = (totalNumber, sort)=>{
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx)=>idx + 1
    );
    return arr;
};


/***/ })

};
;