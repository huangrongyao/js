/**
 * 深拷贝(deep copy)与浅拷贝(shallow copy)
 * 深拷贝：遍历一个对象中所有的属性的值及对象属性中的属性值，不论是嵌套了几层，要完成所有对象属性的递归后，赋值给一个新的对象。
 *    深拷贝会拷贝所有的属性，并拷贝属性指向的动态分配的内存。当对象和它所引用的对象一起拷贝时即发生深拷贝。深拷贝相比于浅拷贝速度较慢并且花销较大。拷贝前后两个对象互不影响。
 * 浅拷贝：新的对象复制已有对象中非对象属性的值和对象属性的引用
 *    创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。
 *    浅拷贝只解决了第一层的问题，拷贝第一层的基本类型值，以及第一层的引用类型地址
 */

// let a = {
//   name: "muyiy",
//   book: {
//       title: "You Don't Know JS",
//       price: "45"
//   }
// }


// 一、浅拷贝使用场景
//  1.object.assgin()
//    用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象
// let b = Object.assign({},a)
// console.log(b)

// a.name = 'hrs', 
// a.book.price = 88
// console.log(a)
// console.log(b)

//  2. 展开语法
//    ...
// let b = {...a}
// console.log(b)

// a.name = 'hrs', 
// a.book.price = 88
// console.log(a)
// console.log(b)

//  3.Array.prototype.slice()   
//    slice() 方法返回一个新的数组对象，这一对象是一个由 begin和 end（不包括end）决定的原数组的浅拷贝。原始数组不会被改变
// let c = [0, "1", [2, 3]];
// let d = c.slice(1);
// console.log(d);
// // ["1", [2, 3]]

// c[1] = "99";
// c[2][0] = 4;
// console.log(c);
// // [0, "99", [4, 3]]

// console.log(d);
// //  ["1", [4, 3]]

//  4.Array.prototype.concat()  
// let c = [0, "1", [2, 3]]
// let d = c.concat([1,2])
// console.log(d)
// ["1", [2, 3],1,2]

// c[1] = "99"
// c[2][0] = 4
// console.log(c)
// [0, "99", [4, 3]]

// console.log(d)
//  ["1", [4, 3],1,2] 

// 二、深拷贝
//  1.JSON.parse(JSON.stringify(object))
//    该方法会存在以下问题
  // 1、会忽略 undefined
  // 2、会忽略 symbol
  // 3、不能序列化函数
  // 4、不能解决循环引用的对象 
  // 5、不能正确处理new Date() // Mon Dec 24 2018 10:59:14 GMT+0800   可以转换成字符串或者时间戳 
  // 6、不能处理正则
// let a = {
//   name: "muyiy",
//   book: {
//       title: "You Don't Know JS",
//       price: "45"
//   }
// }
// let b = JSON.parse(JSON.stringify(a));
// console.log(b);
// // {
// // 	name: "muyiy",
// // 	book: {title: "You Don't Know JS", price: "45"}
// // } 
// a.name = "change";
// a.book.price = "55";
// console.log(a);
// // {
// // 	name: "change",
// // 	book: {title: "You Don't Know JS", price: "55"}
// // } 
// console.log(b);
// // {
// // 	name: "muyiy",
// // 	book: {title: "You Don't Know JS", price: "45"}
// // } 

// let a = [0, "1", [2, 3]];
// let b = JSON.parse(JSON.stringify( a.slice(1) ));
// console.log(b);
// // ["1", [2, 3]]

// a[1] = "99";
// a[2][0] = 4;
// console.log(a);
// // [0, "99", [4, 3]]

// console.log(b);
// //  ["1", [2, 3]]

