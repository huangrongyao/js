var http = require('http')
http.createServer(function (request, response) {
  // request 获取url信息
  // response 浏览器返回响应信息

  // 设置http头部,状态码是200 文件类型是html 字符集是utf8
  response.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" })
  // 发送响应数据,
  response.write("哈哈哈")
  // // End 方法使 Web 服务器停止处理脚本并返回当前结果 ,如果没有结束会一直转圈
  response.end()
}).listen(8888)
// 终端打印信息
console.log('Server running at http://127.0.0.1:8888/')