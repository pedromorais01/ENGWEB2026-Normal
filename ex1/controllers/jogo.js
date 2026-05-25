const Jogo = require('../models/jogo');

module.exports.list = () => {
    return Jogo
        .find({}, 'id name year category minPlayers')
        .exec();
};

module.exports.findById = id => {
    return Jogo
        .findOne({ id: id })
        .exec();
};

module.exports.findByEditora = editora => {
    return Jogo
        .find({ "editoras.name": editora }, 'id name year')
        .exec();
};

module.exports.listAutores = async () => {
    const games = await Jogo.find({}, 'id name autores').exec();
    const autoresMap = {};

    games.forEach(game => {
        game.autores.forEach(autor => {
            if (!autoresMap[autor.name]) {
                autoresMap[autor.name] = [];
            }
            autoresMap[autor.name].push({ id: game.id, name: game.name });
        });
    });

    return Object.keys(autoresMap)
        .sort()
        .map(name => ({
            nome: name,
            jogos: autoresMap[name]
        }));
};

module.exports.listCategorias = async () => {
    const games = await Jogo.find({}, 'id name category').exec();
    const categoriasMap = {};

    games.forEach(game => {
        if (game.category) {
            if (!categoriasMap[game.category]) {
                categoriasMap[game.category] = [];
            }
            categoriasMap[game.category].push({ id: game.id, name: game.name });
        }
    });

    return Object.keys(categoriasMap)
        .sort()
        .map(cat => ({
            categoria: cat,
            jogos: categoriasMap[cat]
        }));
};

module.exports.insert = jogo => {
    return Jogo.create(jogo);
};

module.exports.remove = id => {
    return Jogo.deleteOne({ id: id });
};

module.exports.update = (id, jogo) => {
    return Jogo.updateOne({ id: id }, jogo);
};
