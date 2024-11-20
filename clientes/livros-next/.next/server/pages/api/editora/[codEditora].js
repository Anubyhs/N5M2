"use strict";
(() => {
var exports = {};
exports.id = 606;
exports.ids = [606];
exports.modules = {

/***/ 5703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 5392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_controle_ControleEditora__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5703);

//import  ControleEditora from '.'; nao funcionou
const controleEditora = new _classes_controle_ControleEditora__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    if (req.method === "GET") {
        try {
            const codEditora = Number(req.query.codEditora);
            const nomeEditora = controleEditora.getNomeEditora(codEditora);
            res.status(200).json({
                nomeEditora
            });
        } catch (error) {
            res.status(500).json({
                message: "Exce\xe7\xe3o ocorrida no servidor"
            });
        }
    } else {
        res.status(405).json({
            message: "M\xe9todo n\xe3o permitido"
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5392));
module.exports = __webpack_exports__;

})();