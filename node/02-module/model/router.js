var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')
var events = require('events');
var EventEmitter = new events.EventEmitter();
// staticPath :静态目录的路径
exports.statics = function (req, res, staticPath) {
  var pathName = url.parse(req.url).pathname
  if (pathName == '/') {
    pathName = '/index.html'
  }
  var extName = path.extname(pathName)
  if (pathName != '/favicon.ico') {
    fs.readFile(staticPath + '/' + pathName, function (err, result) {
      if (err) {
        fs.readFile(staticPath + '/404.html', function (err, data) {
          res.write(data)
          res.end()
        })
      } else {
        getmime(extName)
        EventEmitter.on('to_mime', function (mime) {
          res.writeHead(200, { "Content-Type": "" + mime + ";charset='utf-8'" });
          res.end(result);
        })
        EventEmitter.setMaxListeners(Infinity)
      }
    })
  }
}

getmime = function (extname) {
  fs.readFile(path.join(__dirname, "../mime.json"), function (err, res) {
    if (err) {
      console.log(err)
    } else {
      var mines = JSON.parse(res.toString())
      var result = mines[extname] || 'text/html';
      EventEmitter.emit('to_mime', result);
    }
  })
}