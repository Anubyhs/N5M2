
import Editora from "../modelo/Editora";

const editoras: Array<Editora>=[
    new Editora(1, "Saraiva"),
    new Editora(2, "Leitura"),
    new Editora(3, "Jampa Sebo Cultural"),
    new Editora(4, "Francinaldo Sebo Cultural"),
];

class ControleEditora {
    // public constructor(parameters) {};

    getNomeEditora(codEditora: number): string  {
        const editora = editoras.filter( editora => editora.codEditora === codEditora );
        return editora[0] ? editora[0].nome: "não encontrado!";
      }

    getEditoras(): Array<Editora> {
        return editoras;
    }
}

export { editoras };
export default ControleEditora
