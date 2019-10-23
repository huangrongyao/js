var path = require('path')
// 回调函数方法
// exports.getmine = function (fs, extname, callback) {
//事件订阅方法
exports.getmime = function (fs, EventEmitter, extname) {
  // var readerStream = fs.createReadStream((path.join(__dirname, "../mime.json"))
  // var data = ''
  // readerStream.on('data', function (chunk) {
  //   data += chunk
  // })
  // readerStream.on('end', function () {
  //   console.log(data)
  //   return data[extname]
  // })
  // readerStream.on('error', function (err) {
  //   // throw new Error(err)
  //   console.log(err)
  // })
  fs.readFile(path.join(__dirname, "../mime.json"), function (err, res) {
    if (err) {
      console.log(err)
    } else {
      var mines = JSON.parse(res.toString())
      // 回调函数方法
      // callback(mines[extname] || 'text/html')
      //事件订阅方法
      var result = mines[extname] || 'text/html';
      EventEmitter.emit('to_mime', result);
    }
  })
}