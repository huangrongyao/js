"use strict";
// ---------------------------1.数据类型---------------------------
// 1.布尔类型boolean
let a: boolean = true

// 2.数字类型number
let age: number = 28

// 3.字符串类型string
let myName: string = "某某某"

// 4.数组类型Array     ts中数组类型会区分
//  4.1 字符串类型的数组  两种写法
let pets1: string[] = ["旺财", "小黑"]
let pets2: Array<string> = ["旺财", "小黑"];
//  4.2 对象类型的数组
let pets3: Array<object> = [{ name: "旺财" }, { name: "小黑" }];
let pets4: object[] = [{ name: "旺财" }, { name: "小黑" }];
//  4.3 数组中，随意放string、number、boolean类型 这里的 | 相当于 或 的意思 
let arr1: Array<string | number | boolean> = ["hello swr", 28];
//  4.4 想在数组中放任意类型
let arr2: Array<any> = ["hello swr", 28, true]

// 5.元祖类型tuple
// 元组是数组的一种。
// 有点类似解构赋值，但是又不完全是解构赋值，比如元组类型必须一一对应上，多了少了或者类型不对都会报错。
// 元组类型是一个不可变的数组，长度、类型是不可变的。
let person: [string, number] = ['某某某', 28]

// 6.枚举类型enum  可以定义一些值，定义完了后可以直接拿来用了，用的时候也不会赋错值。并且不能再给枚举类型修改值
enum sex {
    // 标识符[=整形常数]
    boy,
    girl = 5,
    se
}
// 不赋值，默认为下标,依次是0，1，2...
// console.log(sex.boy)  // 0
// console.log(sex.girl) // 5   // 赋值后面的下标也改变了
// console.log(sex.se)  // 6
// 实际项目中可以用来枚举订单状态等 
enum orderStatus {
    WAIT_FOR_PAY = "待支付",
    UNDELIVERED = "完成支付，待发货",
    DELIVERED = "已发货",
    COMPLETED = "已确认收货"
}

// 7.任意类型 any 相当于放弃了类型检查 任何值都可以
// 添加一个any类型，此时就不会报错了，但是也相当于放弃了类型检查了
// btn 有可能获取的到也有可能获取不到是null类型
// let btn:any = document.getElementById('btn')
// btn.style.color = "blue"

// 当然也有粗暴一些的方式，利用 ! 强制断言
// let btn1 = document.getElementById("btn")
// btn1!.style!.color = "blue"

// 可以赋值任何类型的值
// 跟以前我们var let声明的一模一样的
let person2: any = "某某某"
person2 = 28

// 8.null undefined类型 是never类型的子类型
let str1: (string | number | null | undefined)
str1 = "hello swr"
str1 = 28
str1 = null
str1 = undefined

// 9.void 类型 没有任何类型，一般是定义函数没有返回值。不 return  或者return undeifned ,其他类型的返回值会报错
function say(name: string): void {
    console.log("hello1", name)  // 不return任何值没有问题
    return undefined       // return  undefined 也可以 
}
// say('xiaoming')

// 10.never类型 永远不会有返回值 （很少用，用于抛出异常）
// 申明never类型的变量只能被never类型赋值(包括null和undefined)
// let x:null ;
// x = null
let xx: never
function error(message: string): never {
    throw new Error(message)
}
// error("error")

// 可以看出在while中，是死循环，永远都不会有返回值，包括undefined
function loop(): never {
    while (true) {
        console.log("陷入死循环啦")
    }
}
// loop()
// 包括比如JSON.parse也是使用这种 never | any
function parse(str: string): (never | any) {
    return JSON.parse(str)
}
// 首先在正常情况下，我们传一个JSON格式的字符串，是可以正常得到一个JSON对象的
// let json1 = parse('{"name":"邵威儒"}')
// 但是有时候，传进去的不一定是JSON格式的字符串，那么就会抛出异常
// 此时就需要never了
let json2 = parse("1515")

// 也就是说，当一个函数执行的时候，被抛出异常打断了，导致没有返回值或者该函数是一个死循环，永远没有返回值，这样叫做永远不会有返回值。
// 实际开发中，是never和联合类型来一起用，比如
function say5(): (never | string) {
    return "ok"
}
// say5()

// ---------------------------2.函数---------------------------
// 函数的定义：
//1.函数声明法
// function run():string{

//     return 'run';
// }
//2.变量赋值法/匿名函数
// var fun2=function():number{

//     return 123;
// }

// 3.形参和实参要完全一样
function say7(name: string): void {
    console.log("hello", name)
}
// say7("某某某")
// 形参和实参要完全一样，如想不一样，则需要配置可选参数，可选参数放在后面

// 4.可选参数，用 ？ 处理，
// 可选参数只能放在后面
function say8(name: string, age?: number): void {
    console.log("hello", name, age)
}
// say8("某某某")
// 5.设置默认参数
function ajax(url: string, method: string = "GET") {
    console.log(url, method)
}
// 6.设置剩余参数 利用扩展运算符
function sum(a: number, ...args: Array<number>): number {
    console.log(args)  // [2,3,4,5]
    return eval(args.join("+"))
}
// let total:number = sum(1,2,3,4,5)
// console.log(total)

// 7.函数的重载 就是判断参数类型执行不同的逻辑   同名函数的问题，js中不存在函数的重载
function pickCard(x: any): any {
    if (typeof x == "object") {
        console.log(1)
    } else if (typeof x == 'number') {
        console.log(2)
    }
}
// ---------------------------3.类---------------------------

// 1.定义一个类
// constructor 方法是类的构造函数，是一个默认方法，通过 new 命令创建对象实例时，自动调用该方法 返回实例对象 this ，
// 但是也可以指定 constructor 方法返回一个全新的对象，让返回的实例对象不是该类的实例。
// ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错。 super 这个关键字，既可以当做函数使用，也可以当做对象使用。
// 这两种情况下，它的用法完全不用。
// class A {}
// class B extends A {
// constructor() {
//     super();  // ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错。
// }
class Person2 {
    name: string
    age: number
    constructor(name: string, age: number) {
        console.log(name)
        this.name = name,
            this.age = age
    }
    say() {
        console.log('hello' + name)
    }
}
// ---------------------------3.类---------------------------
    // 1.定义一个类
    // constructor 方法是类的构造函数，是一个默认方法，通过 new 命令创建对象实例时，自动调用该方法 返回实例对象 this ，
    // 但是也可以指定 constructor 方法返回一个全新的对象，让返回的实例对象不是该类的实例。
    // ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错。 super 这个关键字，既可以当做函数使用，也可以当做对象使用。
    // 这两种情况下，它的用法完全不用。
    // class A {}
    // class B extends A {
    // constructor() {
    //     super();  // ES6 要求，子类的构造函数必须执行一次 super 函数，否则会报错。
    // }
    class Person1 {
        name:string
        age:number
        constructor(name:string,age:number) {
            console.log(name)
            this.name = name,
            this.age = age
        }
        say(){
            console.log('hello' + name)
        }
    }
    // 2.类的继承
    // class Parent{
    // 这里声明的变量，是实例上的属性
    class Person {
        name:string
        age:number
        constructor(name:string,age:number){
            // this.name和this.age必须在前面先声明好类型
            // name:string   age:number
            this.name = name
            this.age = age
        }
        // 原型方法
        say():string{
            return "hello swr"
        }
    }
    class Child extends Person {
        childrenName:string 
        constructor(name:string,age:number,childrenName:string){
            super(name,age)
            this.childrenName = childrenName
        }
        // childSay()
    }

