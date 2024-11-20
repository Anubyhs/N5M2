"use strict";
(() => {
var exports = {};
exports.id = 903;
exports.ids = [903];
exports.modules = {

/***/ 2804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_controle_ControleLivros__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1674);

const controleLivro = new _classes_controle_ControleLivros__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    if (req.method === "DELETE") {
        try {
            const codLivro = Number(req.query.codigo);
            controleLivro.excluir(codLivro);
            //   res.status(200).json({ message: codLivro });
            res.status(200).json({
                message: "Livro excluido com sucesso"
            });
        } catch (error) {
            res.status(500).json({
                message: "Erro interno do servidor"
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
var __webpack_exports__ = __webpack_require__.X(0, [674], () => (__webpack_exec__(2804)));
module.exports = __webpack_exports__;

})();