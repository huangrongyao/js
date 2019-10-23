var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')

// console.log(mineModel.getmine('./html'))
// return
var router = require('./model/router')
var app = http.createServer((req, res) => {
  router.statics(req, res, 'static')
})
app.listen(8002)
console.log('server start 8002')