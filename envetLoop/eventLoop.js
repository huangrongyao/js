// console.log('1')
// setTimeout(function() {
//     console.log('2')
//     process.nextTick(function() {
//         console.log('3')
//     })
//     new Promise(function(resolve) {
//         console.log('4')
//         resolve()
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6')
// })
// new Promise(function(resolve) {
//     console.log('7')
//     resolve()
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9')
//     process.nextTick(function() {
//         console.log('10')
//     })
//     new Promise(function(resolve) {
//         console.log('11')
//         resolve()
//     }).then(function() {
//         console.log('12')

//     })
// })




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



async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function() {
    console.log('setTimeout')
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1')
    resolve();
}).then(function() {
    console.log('promise2')
})
console.log('script end')

// 第一步肯定是打印script start这不用说；
// 第二步执行到setTimeout时，它是一个宏任务，它会等当前宏任务全部执行完毕后再执行；
// 第三步执行到async1函数时，会先打印出async1 start，然后打印出async2，因为async定义的函数会立即执行，async2会返回一个promise的微任务进入回调队列线程；
// 第四步执行到new Promise时，会打印出promise1，同样resolve()会返回一个微任务进入回调队列线程；
// 第五步就打印出script end，到此时同步的都已经执行完毕，然后主线程会去回调队列线程拉任务；
// 第六步主线程拉到第一个任务是async2返回的一个promise，又会碰到一个resolve()，这时又将其推入回调队列线程；
// 第七步拉到new Promise的resolve()，这时会打印出promise2；
// 第八步就是打印出async1 end；
// 第九步就是当前宏任务执行完毕，执行下一个宏任务setTimeout，打印出setTimeout；

// 'script start'
// 'async1 start'
// 'async2'
// 'promise1'
// 'script end'
// 'async1 end'
// 'setTimeout'