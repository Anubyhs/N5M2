"use strict";
exports.id = 674;
exports.ids = [674];
exports.modules = {

/***/ 1674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ControleLivro)
});

;// CONCATENATED MODULE: ./classes/modelo/Livro.ts
class Livro {
    constructor(codigo, codEditora, titulo, resumo, autores){
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }
}
/* harmony default export */ const modelo_Livro = (Livro);

;// CONCATENATED MODULE: ./classes/controle/ControleLivros.ts

const baseURL = "http://localhost:3000/api/livros";
class ControleLivro {
    async obterLivros() {
        try {
            console.log("Fetching livros from API...");
            const response = await fetch(`${baseURL}`, {
                headers: {
                    "Accept": "application/json"
                }
            });
            console.log("Response received, status:", response.status);
            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Invalid content-type");
            }
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log("JSON parsed successfully:", data);
            return data.map((item)=>new modelo_Livro(Number(item.codigo), Number(item.codEditora), String(item.titulo), String(item.resumo), item.autores.map((autor)=>String(autor))));
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Erro ao obter livros: ${error.message}`);
            } else {
                console.error("Erro desconhecido ao obter livros:", error);
            }
            return [];
        }
    }
    async incluir(livro) {
        console.log("Iniciando inclus\xe3o do livro:", livro);
        try {
            const livroData = {
                codigo: Number(livro.codigo),
                codEditora: Number(livro.codEditora),
                titulo: String(livro.titulo),
                resumo: String(livro.resumo),
                autores: livro.autores.map((autor)=>String(autor))
            };
            const response = await fetch(`${baseURL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(livroData)
            });
            const result = response.ok;
            console.log("Livro inclu\xeddo com sucesso:", result);
            return result;
        } catch (error) {
            console.error("Erro ao incluir livro:", error);
            return false;
        }
    }
    async excluir(codigo) {
        console.log("Iniciando exclus\xe3o do livro com c\xf3digo:", Number(codigo));
        try {
            const response = await fetch(`${baseURL}/${codigo}`, {
                method: "DELETE"
            });
            const result = response.ok;
            console.log("Livro exclu\xeddo com sucesso:", result);
            return result;
        } catch (error) {
            console.error("Erro ao excluir livro:", error);
            return false;
        }
    }
    async obterTodos() {
        return this.obterLivros();
    }
}


/***/ })

};
;