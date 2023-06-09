const DatabaseModel = require('./Database.model');

class BookModel extends DatabaseModel {
    static async getAllBooks() {
        let sql = 'select * from books';
        return await DatabaseModel.querySQL(sql);
    }

    static async getBookByID(id) {
        let sql = `select * from books where id = ${id}`;
        return await DatabaseModel.querySQL(sql);
    }

    static async addBooks(name, price, status, author) {
        let sql = `insert into books (name, price, status, author) value ('${name}', ${price}, '${status}', '${author}');`;
        await DatabaseModel.querySQL(sql);
    }

    static async deleteBooks(id) {
        let sql = `delete from books where id = ${id};`;
        await DatabaseModel.querySQL(sql);
    }

    static async editBookById(name, price, status, author, id) {
        let sql = `UPDATE books SET name = '${name}', price = ${price}, status = '${status}', author = '${author}' WHERE id = ${id};`;
        await DatabaseModel.querySQL(sql);
    }

}

module.exports = BookModel;