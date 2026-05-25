const mongoose = require('mongoose');

const autorSchema = new mongoose.Schema({
    id: String,
    name: String
}, { _id: false });

const editoraSchema = new mongoose.Schema({
    id: String,
    name: String,
    country: String
}, { _id: false });

const mecanicaSchema = new mongoose.Schema({
    id: String,
    name: String
}, { _id: false });

const premioSchema = new mongoose.Schema({
    id: String,
    name: String,
    year: Number
}, { _id: false });

const jogoSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    year: Number,
    category: String,
    minPlayers: Number,
    maxPlayers: Number,
    playingTimeMinutes: Number,
    descriptionEN: String,
    autores: [autorSchema],
    editoras: [editoraSchema],
    mecanicas: [mecanicaSchema],
    premios: [premioSchema]
}, { versionKey: false });

module.exports = mongoose.model('jogo', jogoSchema, 'jogos');
