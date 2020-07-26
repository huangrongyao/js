/**
 * 1.判断数组是否是数组(4中方法)
 */
// 1. 通过instanceof判断
// instanceof运算符用于检验构造函数(Array,Object,Function...)的prototype属性是否出现在检测对象的原型链中的任何位置，返回一个布尔值。
console.log([1, 2] instanceof Array)  // true 
console.log([1, 2] instanceof Object)  // true 

// 存在问题:1.prototype属性是可以修改的，所以并不是最初判断为true就一定永远为真
var a = [1, 2]
a.__proto__ = Function.prototype
console.log(a instanceof Array)  // false
console.log(a instanceof Function)  // true

// 存在问题:2.存在多个全局环境时,不同全局环境的instaceof不相等
//为body创建并添加一个iframe对象
// var iframe = document.createElement('iframe');
// document.body.appendChild(iframe);
// //取得iframe对象的构造数组方法
// xArray = window.frames[0].Array;
// //通过构造函数获取一个实例
// var arr = new xArray(1, 2, 3);
// arr instanceof Array;//false

// 2. 通过constructor判断
// 实例的构造函数属性constructor指向构造函数，那么通过constructor属性也可以判断是否为一个数组,但是也存在多全局环境判断不准确问题
[1, 3, 4].constructor === Array;//true

// //为body创建并添加一个iframe标签
// var iframe = document.createElement('iframe');
// document.body.appendChild(iframe);
// //取得iframe对象的构造数组方法
// xArray = window.frames[window.frames.length-1].Array;
// //通过构造函数获取一个实例
// var arr = new xArray(1,2,3); 
// arr.constructor === Array;//false

// 3.通过Object.prototype.toString.call()判断
// Object.prototype.toString().call()可以获取到对象的不同类型,同时多全局情况下的同一类型是相等的
console.log(Object.prototype.toString.call([1, 2, 3]))  // [object Array]
console.log(Object.prototype.toString.call(1))  // [object Number]


//为body创建并添加一个iframe标签
// var iframe = document.createElement('iframe');
// document.body.appendChild(iframe);
// //取得iframe对象的构造数组方法
// xArray = window.frames[window.frames.length - 1].Array;
// //通过构造函数获取一个实例
// var arr = new xArray(1, 2, 3);
// console.log(Object.prototype.toString.call(arr) === '[object Array]');//true

// 4.通过Array.isArray()判断 ES5中提出,所以要做好没有该方法的兼容   /** 推荐方法 ****/
// Array.isArray() 用于确定传递的值是否是一个数组，返回一个布尔值。对于多全局环境，Array.isArray() 同样能准确判断
let a = [1, 2, 3]
Array.isArray(a);//true

// 兼容写法
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}