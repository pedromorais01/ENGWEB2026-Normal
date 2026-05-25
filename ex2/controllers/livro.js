const Livro = require('../models/livro');

module.exports.list = (search) => {
    let filter = {};
    if (search) {
        filter = {
            $or: [
                { titulo: { $regex: search, $options: 'i' } },
                { autor: { $regex: search, $options: 'i' } }
            ]
        };
    }
    return Livro.find(filter).exec();
};

module.exports.findById = id => {
    return Livro.findById(id).exec();
};

module.exports.insert = livro => {
    return Livro.create(livro);
};

module.exports.update = (id, data) => {
    return Livro.findByIdAndUpdate(id, data, { new: true }).exec();
};

module.exports.remove = id => {
    return Livro.findByIdAndDelete(id).exec();
};
