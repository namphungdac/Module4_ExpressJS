const bookController = require('../controllers/book.controller');
const express = require('express');
const router = express.Router();

router.get('/books', bookController.getShowBookPage);
router.get('/books/add', bookController.getAddBookPage);
router.post('/books/add', bookController.addBook);
router.get('/books/:id/delete', bookController.deleteBook);
router.get('/books/:id/edit', bookController.getEditBookPage);
router.post('/books/:id/edit', bookController.editBook);

// router.get('/', bookController.getShowBookPage);
// router.get('/add', bookController.getAddBookPage);
// router.post('/add', bookController.addBook);
// router.get('/:id/delete', bookController.deleteBook);
// router.get('/:id/edit', bookController.getEditBookPage);
// router.post('/:id/edit', bookController.editBook);

module.exports = router;