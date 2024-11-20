exports.id = 989;
exports.ids = [989];
exports.modules = {

/***/ 7201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ controle_ControleEditora)
});

;// CONCATENATED MODULE: ./classes/modelo/Editora.ts
class Editora {
    constructor(codEditora, nome){
        this.codEditora = codEditora;
        this.nome = nome;
    }
}
/* harmony default export */ const modelo_Editora = (Editora);

;// CONCATENATED MODULE: ./classes/controle/ControleEditora.ts

const editoras = [
    new modelo_Editora(1, "Saraiva"),
    new modelo_Editora(2, "Cultura"),
    new modelo_Editora(3, "Saber do amanha"),
    new modelo_Editora(4, "Francinaldo Sebo Cultural")
];
class ControleEditora {
    // public constructor(parameters) {};
    getNomeEditora(codEditora) {
        const editora = editoras.filter((editora)=>editora.codEditora === codEditora);
        return editora[0] ? editora[0].nome : "n\xe3o encontrado!";
    }
    getEditoras() {
        return editoras;
    }
}
/* harmony default export */ const controle_ControleEditora = (ControleEditora);


/***/ }),

/***/ 775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9090);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9603);
/* harmony import */ var app_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(app_globals_css__WEBPACK_IMPORTED_MODULE_3__);




const Menu = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "navbar navbar-expand-lg bg-lightgreen-custom menu-custom",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "collapse navbar-collapse",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "navbar-nav",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "nav-link",
                                children: "Home"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/LivroLista",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "nav-link",
                                children: "Cat\xe1logo"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/LivroDados",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "nav-link",
                                children: "Novo"
                            })
                        })
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 9603:
/***/ (() => {



/***/ })

};
;