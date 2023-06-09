const BookModel = require('../models/Book.model');

class BookController {

    static async getAddBookPage(req, res) {
        res.render('addBookPage');
    }

    static async addBook(req, res) {
        console.log(req.body)
        const {name, price, status, author} = req.body;
        await BookModel.addBooks(name, price, status, author);
        res.redirect(301, '/books');
    }

    static async getShowBookPage(req, res) {
        let listBooks = await BookModel.getAllBooks();
        res.render('showBookPage', {books: listBooks});
    }

    static async deleteBook(req, res) {
        let id = req.params.id;
        await BookModel.deleteBooks(id);
        res.redirect(301, '/books');
    }

    static async getEditBookPage(req, res) {
        let id = req.params.id;
        let resultGetBook = await BookModel.getBookByID(id);
        let book = resultGetBook[0];
        res.render('editBookPage', {book: book});
    }

    static async editBook(req, res) {
        let id = req.params.id;
        let {name, price, status, author} = req.body;
        await BookModel.editBookById(name, price, status, author, id);
        res.redirect(301, '/books');
    }

}

module.exports = BookController;