const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, 'public')));
const products = [
    {
        title: 'iphone 14',
        src: 'images/Iphone.PNG'
    },
    {
        title: 'oppo',
        src: 'images/Oppo.PNG'
    },
    {
        title: 'samsung',
        src: 'images/Samsung.PNG'
    },
    {
        title: 'xiaomi',
        src: 'images/Xiaomi.PNG'
    }
]
app.get('/', (req, res) => {
    res.render('home', {data: products});
});

app.listen(PORT, 'localhost', () => {
    console.log('Server is running at http://localhost:3000');
});
