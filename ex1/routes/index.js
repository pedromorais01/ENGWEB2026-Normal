const express = require('express');
const router = express.Router();
const Jogo = require('../controllers/jogo');

/* GET root */
router.get('/', function(req, res) {
    res.send('<h1>Board Games API</h1><p>Welcome! Documentation is available at <a href="/api-docs">/api-docs</a>.</p><p>Try <a href="/jogos">/jogos</a> to see the data.</p>');
});

/* GET /jogos */
router.get('/jogos', function(req, res) {
    if (req.query.editora) {
        Jogo.findByEditora(req.query.editora)
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ error: err }));
    } else {
        Jogo.list()
            .then(data => res.json(data))
            .catch(err => res.status(500).json({ error: err }));
    }
});

/* GET /autores */
router.get('/autores', function(req, res) {
    Jogo.listAutores()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err }));
});

/* GET /categorias */
router.get('/categorias', function(req, res) {
    Jogo.listCategorias()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err }));
});

/* GET /jogos/:id */
router.get('/jogos/:id', function(req, res) {
    Jogo.findById(req.params.id)
        .then(data => {
            if (data) res.json(data);
            else res.status(404).json({ error: "Jogo não encontrado" });
        })
        .catch(err => res.status(500).json({ error: err }));
});

/* POST /jogos */
router.post('/jogos', function(req, res) {
    Jogo.insert(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => res.status(500).json({ error: err }));
});

/* PUT /jogos/:id */
router.put('/jogos/:id', function(req, res) {
    Jogo.update(req.params.id, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err }));
});

/* DELETE /jogos/:id */
router.delete('/jogos/:id', function(req, res) {
    Jogo.remove(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;
