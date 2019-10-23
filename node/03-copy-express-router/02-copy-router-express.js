var http = require('http')
var url = require('url')
var G = {}
var app = function (req, res) {
  var pathname = url.parse(req.url).pathname
  if (!pathname.endsWith('/')) {
    pathname = pathname + '/'
  }
  console.log('pathname' + ':' + pathname)
  if (G[pathname]) {
    G[pathname](req, res)
  } else {
    res.end('no router')
  }
}

app.get = function (string, callback) {
  console.log('get')
  if (!string.endsWith('/')) {
    string += '/'
  }
  if (!string.startsWith('/')) {
    string = '/' + string
  }
  console.log('string' + ':' + string)
  G[string] = callback
}
http.createServer(app).listen(8001)

app.get('login', function (req, res) {
  console.log(req)
  res.end('login')
})

//