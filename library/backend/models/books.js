
const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

const Books = mongoose.model('Articles', booksSchema);

module.exports = { Books }