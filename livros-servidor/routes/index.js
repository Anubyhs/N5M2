
const express = require('express');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
 title: 'SERVIDOR DA JAMPA SEBO CULTURAL',
 message: 'Bem vindo ao Jampa Sebo Cultural, para acessar nosso conteúdo clique no link abaixo',
 link3000: 'http://localhost:3000/livros',
 link4200: 'http://localhost:4200/livros',
 imageUrl: '/images/logo.png'


  });
});

module.exports = router;
