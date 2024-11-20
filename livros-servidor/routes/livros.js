
const express = require('express');
const router = express.Router();

const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');
router.get('/livros', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(livros);
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send({ error: error.message });
    }
});
router.post('/livros', async (req, res) => {
    try {
        const livro = req.body;
        await incluir(livro);
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json({ message: 'Livro incluído com sucesso!' });
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send({ error: error.message });
    }
});
router.delete('/livros/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await excluir(id);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({ message: 'Livro excluído com sucesso!' });
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send({ error: error.message });
    }
});
module.exports = router;
