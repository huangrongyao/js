var G = {}
var app = function (req, res) {
  console.log('app')
  if (G['login']) {
    G['login'](req, res)
  }
}

app.get = function (string, callback) {
  console.log('get')
  G[string] = callback
}
app.post = function () {
  console.log('post')
}
app.get('login', function (req, res) {
  console.log(req)
})


setTimeout(() => {
  app('req', 'res')
}, 1000);