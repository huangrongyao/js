var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')
var mineModel = require('./model/getmine.js')
// console.log(mineModel.getmine('./html'))
// return
var app = http.createServer((req, res) => {
  // 直接使用req.url 会存在pathname后面拼接参数没有去除的情况，导致匹配不到文件  json/all.json?15645123
  // var pathName = req.url
  var pathName = url.parse(req.url, true).pathname  // json/all.json 问号后面参数都去除了

  // 后缀名
  var extName = path.extname(pathName)
  if (pathName == '/') {
    pathName = '/index.html'
  }
  if (pathName != '/favicon.ico') {
    // console.log(extName)
    // if (pathName == '/index.html') {
    fs.readFile('static' + pathName, function (err, result) {
      if (err) {
        fs.readFile('static/404.html', function (err, data) {
          res.write(data)
          res.end()
        })
      } else {
        var mine = mineModel.getmine(extName)
        res.writeHead(200, { "Content-type": `${mine};charset=UTF-8` })
        res.write(result)
        res.end()
      }
    })

  }

})
app.listen(8001)
console.log('server start 8001')