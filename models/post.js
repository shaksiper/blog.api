require('./Model');
const db = require('../db');
class Post {

    constructor(){
        this.table = 'posts';
        this.fields = [
            'id',
            'title',
            'content',
            'created_at',
            'updated_at'
        ];

        this._data = [];
    }

    add(item){

        db.run(`INSERT INTO post (title, content, created_at) 
            VALUES ('${item.title}', '${item.content}', '${Date.now()}')`, (err) =>{
                if (err)
                    throw err;
            });
    }

    get(id, callback){
        var sql = `SELECT * FROM post WHERE id='${id}'`;
        db.all(sql, (err, row) => {
            callback(err, row);
        });
    }
    getComments(id, callback)
    {
        var sql = `SELECT comment.*, post.title as post_title FROM comment, post WHERE post.id='${id}'`;
        db.all(sql, (err, row)=>{
            callback(err, row);
        });

    }
}

module.exports = new Post();
