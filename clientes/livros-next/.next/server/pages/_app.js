(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(9603);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime.jsx("footer", {
                className: "footer navbar navbar-expand navbar-light bg-lightgreen",
                children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                    className: "navbar-nav",
                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "nav-link",
                            style: {
                                color: "blue",
                                fontWeight: "bold"
                            },
                            children: "\xa9 Francinaldo Sebo Cultural 2024 - Todos os direitos reservados"
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 9603:
/***/ (() => {



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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [959], () => (__webpack_exec__(6214)));
module.exports = __webpack_exports__;

})();