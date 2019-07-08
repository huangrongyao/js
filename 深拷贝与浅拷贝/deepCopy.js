/**
 * 深拷贝(deep copy)与浅拷贝(shallow copy)
 * 深拷贝：遍历一个对象中所有的属性的值及对象属性中的属性值，不论是嵌套了几层，要完成所有对象属性的递归后，赋值给一个新的对象。
 * 浅拷贝：新的对象复制已有对象中非对象属性的值和对象属性的引用
 */

// 1.es6解构
// var a = [1,2,3]
// var b = [...a]
// console.log(b)
// b.push(1)
// console.log(b)
// console.log(a)

// 2.数组的concat与slice方法

// 3.JSON对象的parse和stringify    
var a = [1,2,{name:'zs'}]
var b = a
b[0] = 2
console.log(a)  

console.log(b)



