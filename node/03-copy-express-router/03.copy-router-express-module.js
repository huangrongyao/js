var http = require('http')
var ejs = require('ejs')
var app = require('./model/http-server')
http.createServer(app).listen(8001)
app.get('/', function (req, res) {

  var msg = '这是数据库的数据'

  ejs.renderFile('./views/index.ejs', { msg: msg }, function (err, data) {

    res.send(data);
  })
})
//登录页面
app.get('/login', function (req, res) {
  console.log('login');
  ejs.renderFile('./views/form.ejs', {}, function (err, data) {
    res.send(data);
  })
})
//执行登录
app.post('/dologin', function (req, res) {
  console.log(req.body);  /*获取post传过来的数据*/
  res.send("111")
})


app.get('/register', function (req, res) {
  console.log('register');
  res.send('register');
})

app.get('/news', function (req, res) {
  console.log('register');
  res.send('新闻数据');
})