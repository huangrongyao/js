var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')
var mimeModel = require('./model/getmime')
var events = require('events');
var EventEmitter = new events.EventEmitter();
// console.log(mineModel.getmine('./html'))
// return
var app = http.createServer((req, res) => {
  // 直接使用req.url 会存在pathname后面拼接参数没有去除的情况，导致匹配不到文件  json/all.json?15645123
  // var pathName = req.url
  var pathName = url.parse(req.url).pathname  // json/all.json 问号后面参数都去除了

  if (pathName == '/') {
    pathName = '/index.html'
  }
  // 后缀名
  var extName = path.extname(pathName)
  if (pathName != '/favicon.ico') {
    // console.log(extName)
    // if (pathName == '/index.html') {
    fs.readFile('static/' + pathName, function (err, result) {
      if (err) {
        fs.readFile('static/404.html', function (err, data) {
          res.write(data)
          res.end()
        })
      } else {

        // 事件回调的方式获取异步队列的数据
        // mimeModel.getmime(fs, extName, (mime) => {
        //   res.writeHead(200, { "Content-type": `${mime};charset=UTF-8` })
        //   res.write(result)
        //   res.end()
        // })

        // // events模块事件订阅方式获取异步读取的mine.json内容
        mimeModel.getmime(fs, EventEmitter, extName)
        EventEmitter.on('to_mime', function (mime) {
          res.writeHead(200, { "Content-Type": "" + mime + ";charset='utf-8'" });
          //res.write(data);
          res.end(result); /*结束响应*/
        })
        // (node:14036) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 to_mime listeners added. Use emitter.setMaxListeners() to increase limit
        EventEmitter.setMaxListeners(Infinity)
      }
    })

  }

})
app.listen(8001)
console.log('server start 8001')