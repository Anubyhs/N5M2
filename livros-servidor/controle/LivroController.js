
// controllers/LivroController.js

const Livro = require('../models/Livro');

// Lista todos os livros
exports.listar = async (req, res) => {
    try {
        const livros = await Livro.find();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar livros', error });
    }
};

// Cria um novo livro
exports.criar = async (req, res) => {
    const novoLivro = new Livro(req.body);
    try {
        const livro = await novoLivro.save();
        res.status(201).json(livro);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar o livro', error });
    }
};

// Atualiza um livro existente por ID
exports.atualizar = async (req, res) => {
    try {
        const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!livro) {
            res.status(404).json({ message: 'Livro não encontrado' });
        } else {
            res.status(200).json(livro);
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o livro', error });
    }
};

// Exclui um livro por ID
exports.excluir = async (req, res) => {
    try {
        const livro = await Livro.findByIdAndDelete(req.params.id);
        if (!livro) {
            res.status(404).json({ message: 'Livro não encontrado' });
        } else {
            res.status(200).json({ message: 'Livro excluído com sucesso' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir o livro', error });
    }
};
