var express = require('express')
var app = new express() // 实例化要在最前面

var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser('123123'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static('public'))
app.use('/static', express.static('public'));

// 应用级中间件
app.use(function (req, res, next) {
  console.log(new Date())
  next()
})
app.get('/login/:aid', function (req, res) {
  console.log(req.params.aid)
  res.send('nihao')
})
app.get('/product', function (req, res) {
  console.log(req.query.name)
  res.send('nihao')
})
app.get('/dologin', function (req, res) {
  res.render('dologin')
})
app.post('/dologin', function (req, res) {
  console.log(req.body)
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
app.get('/setcookie', function (req, res) {
  res.cookie('cookiename', 'cookievalue', { signed: true })
  res.send('cookie设置完成')
})
app.get('/getcookie', function (req, res) {
  console.log(req.cookies)
  console.log(req.signedCookies);
  res.send('cookie获取完成')
})
// 路由中间件
app.get('/', function (req, res, next) {
  console.log('中间件')
  next()
})
app.get('/', function (req, res) {
  var arr = [111, 222, 333]
  res.render('index', { list: arr })
})
app.use(function (req, res, next) {
  console.log('404')
  next()
})
app.listen(3000, '127.0.0.1')