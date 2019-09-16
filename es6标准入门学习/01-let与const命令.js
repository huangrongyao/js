// ---------------------------let命令-------------------------
// 1.let 声明的变量只在let命令所在的代码块内有效,    花括号也是代码块

// {
//   let a = 1
//   var b = 2
// }
// console.log(a)  // a is not defined
// console.log(b)

var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]() // 10 因为var 声明的变量全局范围内都有效,所以每次循环 新的i值都会覆盖旧的,导致输出的是最后一轮i值
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]()// 6 因为let申明的变量只在本轮循环有效,所以每次循环的i都是新的变量,

// 2. 不存在变量提升  所以变量一定要在申明后使用
//  在代码块内,在使用let命令申明变量之前,该变量都是不可用的,这在语法上称为"暂时性死区"(temporal dead zone,TDZ)

// console.log(foo) // foo is not defined
let foo = 3

let tmp = 'abc'
if (true) {
  // TDZ开始
  // tmp = 'abc' // referenceError tmp is not defined  
  // console.log(tmp) // referenceError tmp is not defined  
  // TDZ结束
  let tmp
  console.log(tmp) // undefinded
}

// 暂时性死区的本质是:只要一进入当前作用域,所要使用的变量就已经存在,但是不可获取,只有等到申明变量的那一行代码出现,才可以获取和使用该变量(比如上面的tmp,如果在块级作用域里let 申明的tmp不是一开始就存在,第一个打印值应该是全局tmp的值)

// 3.不允许重复声明 let 不允许在相同作用域重复声明同一个变量
var a1 = 1
var a1 = 2
// var 可以在相同作用域重复声明

let b1 = 2
// var b1 = 3 // SyntaxError: Identifier 'b1' has already been declared

// ---------------------------const-------------------------
// const用来声明常量,一旦声明,其值就不能修改,所以用const就必须声明并且初始化,只声明不赋值就会报错
// const和let一样只在当前块级作用域内有效并且存在暂时性死区

// 块级作用域
function fn () {
  console.log('outside')
}
{
  function fn () {
    console.log('inside')
  }
}
fn()
// 补充:
// es5有两种声明变量方法: var 与 function 
// es6 有四种声明方法:let const import class