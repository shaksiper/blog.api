var express = require('express');
var router = express.Router();

// Comment model
var Comment = require('../models/comment');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.fetch = function(req, res) {
    var id = req.params.id;
    res.send(`ID : ${req.params.id}`);
}
// Display list of all books.
exports.list = function(req, res) {
    res.send('NOT IMPLEMENTED: Book list');
};

// Handle book create on POST.
exports.create = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

