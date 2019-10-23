const fs = require('fs')
// 1. fs.stat 检测是文件还是目录
// fs.stat('http.js', (err, stat) => {
//   if (err) { console.log(err) }
//   console.log(stat)
//   console.log('文件', stat.isFile())
//   console.log('目录', stat.isDirectory())
// })
// 2. fs.mkdir 创建目录
// fs.mkdir('logs', (error) => {
//   if (error) { console.log(error) }
//   console.log('成功创建目录：logs')
// })
// 3. fs.writeFile 创建写入文件
// fs.writeFile('hello.log', '您好 ~ \n', (error) => {
//   if (error) { console.log(error) }
//   console.log('成功写入文件')
// })
// 4. fs.appendFile 追加文件
// fs.appendFile('hello.log', 'hello ~ \n', (error) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('成功追加文件')
//   }
// })
// 5.fs.readFile 读取文件
// fs.readFile('hello.log', 'utf8', (error, data) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(data)
//   }
// })
// 6.fs.readdir 读取目录
// fs.readdir('node_modules', (error, files) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(files)// ['bar.js','foo']
//   }
// })
// 7.fs.rename 重命名
// fs.rename('hello.log', 'greeting.log', (error) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('重命名成功')
//   }
// })

// 8. fs.rmdir 删除目录
// fs.rmdir('js', (error) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('成功的删除了目录：js')
//   }
// })

// 9. fs.unlink 删除文件
// fs.unlink(`greeting.log`, (error) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(`成功的删除了文件: greeting.log`)
//   }
// })
// 10.fs.createReadStream 从文件流中读取数据
// var readStream = fs.createReadStream('node.txt')
// var str = ''// 保存的数据
// var count = 0
// readStream.on('data', function (chunk) {
//   str += chunk
//   count++
// })
// readStream.on('end', function () {
//   console.log(str)
//   console.log(count)
// })
// readStream.on('error', (error) => {
//   console.log(error)
//  })

// 11. fs.createWriteStream 写入文件 文件读写都是异步操作
// var data = 'wosjasdasdasda'
// var writeStream = fs.createWriteStream('node1.txt')
// writeStream.write(data, 'utf8')
// // 标记写入完成
// writeStream.end()
// writeStream.on('finish', function () {
//   console.log('写入完成')
// })
// writeStream.on('error', function (err) {
//   console.log(err.stack);
// });
// console.log("程序执行完毕");

// 12读取写入管道流
// 创建一个可读流
var readerStream = fs.createReadStream('node.txt');
// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');
// 管道读写操作，读取node.txt内容写入到output.txt中
readerStream.pipe(writerStream)
console.log("程序执行完毕");


