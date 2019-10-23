var url = require("url")
// url模块的方法(不是全部)

// 1.url.parse() // 将url解析成对象
// 第二个参数可以将query格式化成对象的形式
// url.parse("http://www.baidu.com/new?name=zs&age=18", true)
var query = url.parse("http://www.baidu.com/new?name=zs&age=18", true)
// console.log(query)
// {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com',
//   port: null,
//   hostname: 'www.baidu.com',
//   hash: null,
//   search: '?name=zs&age=18',
//   query: 'name=zs&age=18',
//   query: { name: 'zs', age: '18' },
//   pathname: '/new',
//   path: '/new?name=zs&age=18',
//   href: 'http://www.baidu.com/new?name=zs&age=18' }

//2.url.format() 与url.parse相反可以将对象转换成url,参数是一个对象

//3.url.resolve() 替换 域名后面第一个“/”后的内容；
// console.log(url.resolve('http://www.baidu.com/new?name=zs&age=18', '/test'))
//http://www.baidu.com/test

// 通过url模块获取get传值的参数

var http = require('http')
var str = require('bar')
var foo = require('foo')
console.log('str' + str)
console.log('foo' + foo)
http.createServer(function (req, res) {

  // console.log(url.parse(req.url, true).querys)
  // /favicon.ico
  // /new?name=zs
  // /favicon.ico




  res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" })
  if (req.url != '/favicon.ico') {
    // 浏览器中输入http://localhost:8001/news?name=zs&age=18,想拿到参数 
    var result = url.parse(req.url, true)
    console.log(result.query)
  }
  res.write("url模块")
  res.end()
}).listen(8001)
console.log('Server running at http://127.0.0.1:8001/')
