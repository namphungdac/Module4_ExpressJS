const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
// 'true' => parse data của req.body theo kiểu của qs
// 'false' => parse data của req.body theo kiểu của query-tring

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let blogArray = [];

app.get('/', (req, res) => {
    res.render('blog');
});

app.post('/', (req, res) => {
    let blogInfo = {
        titleBlog: req.body.title,
        contentBlog: req.body.content
    }
    blogArray.push(blogInfo);
    res.redirect('/blog');
});

app.get('/blog', (req, res) => {
    res.render('view', {blog: blogArray[0]});
});

// app.get('/view',(req,res)=>{
//     res.render('view',{blogArray})
// })
//
// app.get('/login',(req,res)=>{
//     res.render('login')
// })
// app.post('/login', (req, res) => {
//     let login = {
//         titleBlog: req.body.title,
//         contentBlog: req.body.content
//     }
//     blogArray.push(login);
//
// });


app.listen(PORT, 'localhost', () => {
    console.log('Server is running at http://localhost:3000');
});