const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');

const mongoDB = process.env.MONGODB_URL || 'mongodb://127.0.0.1/leituras';
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error...'));
db.once('open', function() {
    console.log("Conexão ao MongoDB realizada com sucesso...")
});

const indexRouter = require('./routes/index');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('<h1>Reading List API</h1><p>API is running. Access endpoints at <a href="/api/livros">/api/livros</a></p>');
});

app.use('/api', indexRouter);

module.exports = app;
