console.log('1')
setTimeout(function() {
    console.log('2')
    process.nextTick(function() {
        console.log('3')
    })
    new Promise(function(resolve) {
        console.log('4')
        resolve()
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6')
})
new Promise(function(resolve) {
    console.log('7')
    resolve()
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9')
    process.nextTick(function() {
        console.log('10')
    })
    new Promise(function(resolve) {
        console.log('11')
        resolve()
    }).then(function() {
        console.log('12')

    })
})


// process.nextTick 微任务
// new Promise 中的代码是同步的 只有then之后的才是异步微任务
// 定时器触发线程是多线程所以可以多个同时进行
// 1
// 7
// 6
// 8
// 2
// 4
// 9
// 11
// 3
// 10
// 5
// 12