const { json } = require('express');
var express = require('express');
var router = express.Router();

const Post = require('../models/post');
var db = require('../db');


// Post model
// var Post = require('../models/post');

exports.listComments = function(req, res) {
    const id = Number( req.params.id );
    Post.getComments(id, (err, row) => {
        if(err)
        {
            res.status(400).json({
                "message": "failed",
                "error" : `${err.message}`
            });
        }
        if(!Object.keys(row).length)
            var json = { "message" : "No comments", }
        else
            var json = { "message":"success", "data":row }

        res.json(json); // response as json
    });
};

exports.fetch = function(req, res) {
    const id = Number( req.params.id );
    Post.get(id, (err, row) => {
        if(err)
        {
            res.status(400).json({
                "message": "failed",
                "error" : `${err.message}`
            });
        }
        if(!Object.keys(row).length)
            var json = { "message" : "Post not found", }
        else
            var json = { "message":"success", "data":row }

        res.json(json); // response as json
    });
};

// Display list of all books.
exports.list = function(req, res) {
    var sql = "SELECT * FROM post"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
    });
};

// Handle book create on POST.
exports.create = function(req, res) {
    // const title = req.query.title;
    // const content = req.query.content;
    var item = {
        title : req.query.title,
        content : req.query.content
    }
    console.log(item.title);

    try {
        Post.add(item);
    } catch (e) {
        res.json({
            "message" : "failed",
        })
    }
    res.json({
        "message" : "success",
        "title" : `${item.title}`,
        "content" : `${item.content}`
    });
};

// Display book delete form on GET.
exports.delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};
