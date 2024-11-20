(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{8265:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/LivroLista",function(){return r(1631)}])},7850:function(e,o,r){"use strict";r.d(o,{Z:function(){return n}});var t=class{constructor(e,o){this.codEditora=e,this.nome=o}};let s=[new t(1,"Saraiva"),new t(2,"Cultura"),new t(3,"Saber do amanha"),new t(4,"Francinaldo Sebo Cultural")];var n=class{getNomeEditora(e){let o=s.filter(o=>o.codEditora===e);return o[0]?o[0].nome:"n\xe3o encontrado!"}getEditoras(){return s}}},7481:function(e,o,r){"use strict";r.d(o,{v:function(){return c}});var t=r(5893),s=r(1664),n=r.n(s);r(2887),r(5567);let c=()=>(0,t.jsx)("nav",{className:"navbar navbar-expand-lg bg-lightgreen-custom menu-custom",children:(0,t.jsx)("div",{className:"collapse navbar-collapse",children:(0,t.jsxs)("ul",{className:"navbar-nav",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n(),{href:"/",children:(0,t.jsx)("span",{className:"nav-link",children:"Home"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n(),{href:"/LivroLista",children:(0,t.jsx)("span",{className:"nav-link",children:"Cat\xe1logo"})})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)(n(),{href:"/LivroDados",children:(0,t.jsx)("span",{className:"nav-link",children:"Novo"})})})]})})})},1631:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return m}});var t=r(5893),s=r(7294),n=r(9008),c=r.n(n),a=r(7481),i=r(7850),l=class{constructor(e,o,r,t,s){this.codigo=e,this.codEditora=o,this.titulo=r,this.resumo=t,this.autores=s}};let d="http://localhost:3000/api/livros",u=new i.Z,h=new class{async obterLivros(){try{console.log("Fetching livros from API...");let e=await fetch("".concat(d),{headers:{Accept:"application/json"}});console.log("Response received, status:",e.status);let o=e.headers.get("content-type");if(!o||!o.includes("application/json"))throw Error("Invalid content-type");if(!e.ok)throw Error("Network response was not ok");let r=await e.json();return console.log("JSON parsed successfully:",r),r.map(e=>new l(Number(e.codigo),Number(e.codEditora),String(e.titulo),String(e.resumo),e.autores.map(e=>String(e))))}catch(e){return e instanceof Error?console.error("Erro ao obter livros: ".concat(e.message)):console.error("Erro desconhecido ao obter livros:",e),[]}}async incluir(e){console.log("Iniciando inclus\xe3o do livro:",e);try{let o={codigo:Number(e.codigo),codEditora:Number(e.codEditora),titulo:String(e.titulo),resumo:String(e.resumo),autores:e.autores.map(e=>String(e))},r=await fetch("".concat(d),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),t=r.ok;return console.log("Livro inclu\xeddo com sucesso:",t),t}catch(e){return console.error("Erro ao incluir livro:",e),!1}}async excluir(e){console.log("Iniciando exclus\xe3o do livro com c\xf3digo:",Number(e));try{let o=await fetch("".concat(d,"/").concat(e),{method:"DELETE"}),r=o.ok;return console.log("Livro exclu\xeddo com sucesso:",r),r}catch(e){return console.error("Erro ao excluir livro:",e),!1}}async obterTodos(){return this.obterLivros()}},x=e=>{let{livro:o,excluir:r}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[o.titulo," ",(0,t.jsx)("br",{}),(0,t.jsx)("button",{className:"btn btn-danger",onClick:()=>r(o.codigo),children:"Excluir"})]}),(0,t.jsx)("td",{children:u.getNomeEditora(o.codEditora)}),(0,t.jsx)("td",{children:(0,t.jsx)("ul",{children:o.autores.map((e,o)=>(0,t.jsx)("li",{children:e},o))})}),(0,t.jsx)("td",{children:o.resumo})]})};var m=()=>{let[e,o]=(0,s.useState)([]),[r,n]=(0,s.useState)(!1);(0,s.useEffect)(()=>{h.obterTodos().then(e=>{o(e),n(!0)}).catch(e=>{console.error("Erro ao obter os livros:",e)})},[r]);let i=async e=>{await h.excluir(e).then(()=>{n(!1)})};return(0,t.jsxs)("div",{children:[(0,t.jsx)(c(),{children:(0,t.jsx)("title",{children:"LivroLista"})}),(0,t.jsx)(a.v,{}),(0,t.jsxs)("main",{className:"container text-start",children:[(0,t.jsx)("h1",{children:(0,t.jsx)("b",{children:"Cat\xe1logo de Livros"})}),(0,t.jsxs)("table",{className:"table table-striped mt-3",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"table-dark",children:[(0,t.jsx)("th",{className:"col-4",children:"T\xedtulo"}),(0,t.jsx)("th",{className:"col-2",children:"Editora"}),(0,t.jsx)("th",{className:"col-2",children:"Autor"}),(0,t.jsx)("th",{className:"col-2",children:"Resumo"})]})}),(0,t.jsx)("tbody",{children:r&&e.map((e,o)=>(0,t.jsx)(x,{livro:e,excluir:i},o))})]})]})]})}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=8265)}),_N_E=e.O()}]);