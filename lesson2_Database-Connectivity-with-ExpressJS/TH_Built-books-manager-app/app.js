const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const router = require('./src/routers/web.router');

const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(router);
// app.use('/books', router);

app.listen(PORT, 'localhost', () => {
    console.log('Server is running at http://localhost:3000/books');
});
