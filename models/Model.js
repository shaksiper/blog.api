var DB = require('../db');

module.exports =  class Model
{
    constructor(table)
    {
        this.table = table;
        this.fields = [];
        this._data = [];

    }
    
    add(item)
    {
        DB.create(table);
    }

    fetch()
    {
        throw new Error('You have to implement the method fetch()!');
    }
}

