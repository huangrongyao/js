var express = require('express')
var app = new express()
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static('public'))
app.use('/static', express.static('public'));
app.get('/login/:aid', function (req, res) {
  console.log(req.params.aid)
  res.send('nihao')
})
app.get('/product', function (req, res) {
  console.log(req.query.name)
  res.send('nihao')
})
app.get('/', function (req, res) {
  var arr = [111, 222, 333]
  res.render('index', { list: arr })
})
app.listen(3000, '127.0.0.1')