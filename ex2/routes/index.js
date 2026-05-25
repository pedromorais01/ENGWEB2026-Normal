const express = require('express');
const router = express.Router();
const Livro = require('../controllers/livro');

/* GET root */
router.get('/', function(req, res) {
    res.send('<h1>Reading List API</h1><p>Welcome! Try <a href="/api/livros">/api/livros</a> to see the data.</p>');
});

/* GET /api/livros */
router.get('/livros', function(req, res) {
    Livro.list(req.query.search)
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err }));
});

/* GET /api/livros/:id */
router.get('/livros/:id', function(req, res) {
    Livro.findById(req.params.id)
        .then(data => {
            if (data) res.json(data);
            else res.status(404).json({ error: "Livro não encontrado" });
        })
        .catch(err => res.status(500).json({ error: err }));
});

/* POST /api/livros */
router.post('/livros', function(req, res) {
    Livro.insert(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => res.status(500).json({ error: err }));
});

/* PUT /api/livros/:id */
router.put('/livros/:id', function(req, res) {
    Livro.update(req.params.id, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err }));
});

/* DELETE /api/livros/:id */
router.delete('/livros/:id', function(req, res) {
    Livro.remove(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;
