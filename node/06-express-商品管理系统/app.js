var express = require('express')

var app = new express()

app.get('/login', function (req, res) {
  res.send('初始化')
})
app.listen(3000)