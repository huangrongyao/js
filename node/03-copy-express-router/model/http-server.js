
var url = require('url')
function changeRes (res) {
  res.send = function (data) {
    res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" })
    res.send(data)
  }
}
var server = function (req, res) {
  var G = this
  this._get = {}
  this._post = {}
  var app = function (req, res) {
    changeRes(res)
    // 获取请求的路由
    var pathname = url.parse(req.url).pathname
    if (!pathname.endsWith('/')) {
      pathname = pathname + '/'
    }
    var method = req.method.toLowerCase()
    if (G['_' + method][pathname]) {
      if (method == 'post') {
        var postStr = ''
        req.on('data', function (chunk) {
          postStr += chunk
        })
        req.on('end', function (err, chunk) {
          req.body = postStr // 拿到post请求的参数,添加到req的自定义属性body上
          G['_' + method][pathname](req, res)
        })
      } else {
        G['_' + method][pathname](req, res)
      }
    } else {
      res.end('no router')
    }

  }
  app.get = function (string, callback) {
    if (!string.endsWith('/')) {
      string += '/'
    }
    if (!string.startsWith('/')) {
      string = '/' + string
    }
    G._get[string] = callback
  }
  app.post = function (string, callback) {
    if (!string.endsWith('/')) {
      string += '/'
    }
    if (!string.startsWith('/')) {
      string = '/' + string
    }
    console.log('string' + ':' + string)
    G._post[string] = callback
  }
  return app
}
module.exports = server()