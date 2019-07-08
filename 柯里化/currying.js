/** 
 * @description 柯里化（Currying）
 *      是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术
 *      转换柯里化函数有个关键的点，那就是要明确触发条件，比如说上面的栗子中，我们的触发条件是参数的个数，根据参数的个数来区分返回的是函数还是具体的结果。
 *      柯里化函数的特点
 *           参数复用
 *           业务解耦，调用时机灵活
 *           延迟执行，部分求值
 */

/**
 * 转换函数
 * @param {*} fn 目标函数
 * @param  {...any} args 其他参数
 */
const createCurry = (fn, ...args) => {
    console.log(args)                                        
    // 获取目标函数定义的的参数个数
    let length = fn.length  
    return (...rest) => {
        // 将已有的参数和新的参数合并
        let allArgs = args.slice(0)
        allArgs.push(...rest)
        // 若参数个数已经满足目标函数的参数要求，则执行目标函数。否则继续返回转换函数
        if (allArgs.length < length) {
            return createCurry.call(this, fn, ...allArgs)
        } else {
            return fn.apply(this, allArgs)
        }
    }
}
function add(a, b, c, d) {
    return a + b + c + d
}

const curryAdd = createCurry(add,2)
const sum = curryAdd(3)(4)(5)   

// console.log(sum) 


/**
 * 生成柯里化函数，以参数长度达标作为触发条件
 * @param {*} fn 目标函数
 * @param {*} arity 目标函数参数个数
 * @param {...any} args 调用传入的参数
 */
const curry = (fn, arity = fn.length, ...args) => {
    if (arity <= args.length) {
        return fn(...args)
    } else {
        return curry.bind(null, fn, arity, ...args);
    }
}
