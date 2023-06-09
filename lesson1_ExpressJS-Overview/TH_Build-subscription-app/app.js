const express = require('express');
const path = require('path');
const multer = require('multer');
const upload = multer();
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
    res.render('register');
});

const arrayUser = [];
app.post('/user/register', upload.none(), (req, res) => {
    if (req.body.username && req.body.password) {
        const userInfo = {
            userName: req.body.username,
            passWord: req.body.password
        }
        arrayUser.push(userInfo)
        res.render('success',{user: userInfo});
        // do trong Form ở trang '/' để action="/user/register" =>
        // khi người dùng ấn nút Submit thì dữ liệu trong Form sẽ được gửi đến URL là "/user/register" và lệnh 'res.render('success',{user: userInfo});' sẽ hiển thị trên trang 'success' ở URL này
        // => Khi người dùng truy cập trực tiếp và URL '/user/register' sẽ xảy ra lỗi: Cannot GET /user/register
        //    do URL "/user/register" ứng với trang 'success' chỉ được truy cập bằng phương thức POST khi người dùng ấn nút Submit trên trang '/'

        // Trong case Module 3, ko làm theo cách này, mà action trong Form sẽ để trống <=> dữ liêu trong form sẽ đc gửi lên chính trang hiện tại chứa form này
        // Sau khi gửi xong dữ liệu thì mới điều hướng (redirect) đến một URL mới VD: (res.writeHead(301, {"location": "/customer/Home"});)
        // => URL mới này sẽ đc truy cập bằng phương thức GET
    } else {
        res.render('err');
    }
});

app.listen(PORT, 'localhost', () => {
    console.log('Server is running at http://localhost:3000');
})