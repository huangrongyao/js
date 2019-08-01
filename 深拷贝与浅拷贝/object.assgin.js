/*
*  Object.assign(target, ...sources)
*  其中 target 是目标对象，sources 是源对象，可以有多个，返回修改后的目标对象 target。即修改目标对象，不是返回新的对象
*  如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后来的源对象的属性将类似地覆盖早先的属性。
*  String 类型和 Symbol 类型的属性都会被拷贝，而且不会跳过那些值为 null 或 undefined 的源对象
*/

// let a = {
//   name: "advanced",
//   age: 18
// }
// let b = {
//   name: "muyiy",
//   book: {
//       title: "You Don't Know JS",
//       price: "45"
//   },
//   b1: Symbol("muyiy"),
//   b2: null,
//   b3: undefined
// }
// let c = Object.assign(a,b)  // b1,b2,b3都会被拷贝
// console.log(c) //   a.name ="muyiy"

// b.book.price = "100"
// console.log(c)  // 浅拷贝 a的book属性也是指向b的book属性的引用

// console.log(c === a)  // a,c是相同的对象，所以只是修改了目标对象不是新创建

// ------------实现assign---------------
// 思路：
//    1.判断原生Object是否有要增加的这个方法，如果不存在，就创建一个hello并且使用Object.define.defineProperty加到原型上去
//    2.判断参数是否正确 ，target不能为空，必须设置值，{}都行
//    3.使用Object()转换成对象，并保存为to,最后返回这个对象
//    4.使用for..in循环遍历出所有可枚举的自有属性，并且复制给新的目标对象,(使用hasOwnProperty获取自有属性，即非原型上的属性)
//    5.原生情况下挂载在 Object 上的属性是不可枚举的，但是直接在 Object 上挂载属性 a 之后是可枚举的，所以这里必须使用 Object.defineProperty，并设置 enumerable: false 以及 writable: true, configurable: true。

if(typeof Object.assgin2 != "function"){
  // console.log(typeof Object.assgin)
  Object.defineProperty(Object,"assgin2",{
    value:function(target){
      'use strict';
      if(target == null){  // 参数必须传，空对象都可以
        throw new TypeError('Cannot convert undefined or null to object')
      }
      var to = Object(target)
      for(var i = 1; i < arguments.length;i++){
        var nextSource = arguments[i]
        if(nextSource != null){  // 不能不传，传{}都可以
          for(var key in nextSource){
            if(Object.prototype.hasOwnProperty.call(nextSource,key)){
              console.log(key)
              to[key] = nextSource[key]
            } 
          }
        }
      }
      return to
    },
    // 默认值是 false，即 enumerable: false
    writable:true,
    configurable:true
  })
}

let a = {
  name: "advanced",
  age: 18
}
let b = {
  name: "muyiy",
  book: {
      title: "You Don't Know JS",
      price: "45"
  }
}
console.log(typeof Object.assgin2)
let c = Object.assgin2(a, b)
console.log(c)

// js中直接输出一个object对象显示的是[object Objec