const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    'title': { type: String, required: true, default: "hello" },
    'description': { type: String, required: false },
    'createdAt': { type: Date, default: Date.now }
})

module.exports = mongoose.model('todos', todoSchema)
