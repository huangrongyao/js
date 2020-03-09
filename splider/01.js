var https = require('https')
let req = https.request('https://vip.iqiyi.com/waimeizhy_pc.html', res => {
  // 异步响应
  let chunks = []
  // 监听data事件,获取传递过来的数据片段
  // 拼接数据片段
  res.on('data', chunks => chunks.push(chunks))
  // 监听end事件,获取数据完毕时触发
  res.on('end', () => {
    // 拼接所有的chunk.并转换成字符串 ==> html字符串
    console.log(Buffer.concat(chunks).toString('utf-8'))
  })
  res.on('error', (error) => {
    console.llog(error)
  })
})