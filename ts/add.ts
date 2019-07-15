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
    // 
    // 2.定义一个类
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
            this.name = name,
            this.age = age
        }
        say(){
            console.log('hello' + name)
        }
    }
    // 3.类的继承
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
        childName:string 
        constructor(name:string,age:number,childName:string){
            super(name,age)
            this.childName = childName
        }
        childSay():string{
            return this.childName
        }
    }
    // let child = new Child('某某某1',28,'bb')
    // console.log(child)
    // 4.类的修饰符
    //   public公开的，可以供自己、子类以及其它类访问
    //   protected受保护的，可以供自己、子类访问，但是其他就访问不了
    //   private私有的，只有自己访问，而子类、其他都访问不了 

    // 5.抽象类 使用abstract 关键字
    abstract class Animal{
        // 实际上是使用了public修饰符
        // 如果添加private修饰符则会报错
        abstract eat():void ;
    }
    
    // 需要注意的是，这个Animal类是不能实例化的
    // let animal = new Animal() // 报错
    
    // 抽象类的抽象方法，意思就是，需要在继承这个抽象类的子类中
    // 实现这个抽象方法，不然会报错
    // 报错，因为在子类中没有实现eat抽象方法
    class Person6 extends Animal{
        eat(){
            console.log("吃米饭")
        }
    }
// ---------------------------4.接口---------------------------
// 这里的接口，主要是一种规范，规范某些类必须遵守规范，和抽象类有点类似，但是不局限于类，还有属性、函数等。
// 需要使用到关键字interface
// 1.接口规范对象 
//      可以让多个方法使用这个规范 
//      我们通过这样的方式，规范必须传name和age的值  多个接口都规范必须传name和age的值呢，每个方法都写就很重复
//      function getUserInfo(user:{name:string,age:number}){
//          console.log(`${user.name} ${user.age}`)
//      }
//      getUserInfo({name:"规范类",age:28})
    interface infoInterface{
        name:string,
        age:number,
        city?:string// 该参数为可选参数
    }
    function getUserInfo(user:infoInterface){
         console.log(`${user.name} ${user.age}`)
    }
// 2.接口规范函数
//      对一个函数的参数和返回值进行规范
interface mytotal {
//      左侧是函数的参数，右侧是函数的返回类型
    (a:number,b:number) : number
} 

let total:mytotal = function (a:number,b:number):number {
    return a + b
}
// console.log(total(10,20))
// 3.接口规范数组
interface userInterface {
    // index为数组的索引，类型是number
    // 右边是数组里为字符串的数组成员
    [index: number]: string
  }
  let arr: userInterface = ['规范数组', 'iamswr'];
  console.log(arr)

// 4.接口是如何规范类的
// 首先实现一个接口
interface Animal1{
    // 这个类必须有name
    name:string,
    // 这个类必须有eat方法
    // 规定eat方法的参数类型以及返回值类型
    eat1(any:string):void
}
// 新增一个接口
interface Animal2{
    sleep():void
}
// 关键字 implements 实现
// 因为接口是抽象的，需要通过子类去实现它
// 可以在implements后面通过逗号添加，实现遵循多个接口，
// 一个类只能继承一个父类，但是却能遵循多个接口
class Person9 implements Animal1,Animal2{
    name:string
    constructor(name:string){
        this.name = name
    }
    eat1(any:string):void{
        console.log(`吃${any}`)
    }
    sleep(){
        console.log('睡觉')
    }
}
// 5.接口可以继承接口 就和类继承类一样的
interface Animal3{
    name:string,
    eat(any:string):void
}
// 像类一样，通过extends继承
interface Animal4 extends Animal3{
    sleep():void
}
// 因为Animal2类继承了Animal
// 所以这里遵循Animal2就相当于把Animal也继承了
class Person10 implements Animal4{
    name:string
    constructor(name:string){
        this.name = name
    }
    eat(any:string):void{
        console.log(`吃${any}`)
    }
    sleep(){
        console.log('睡觉')
    }
}
// ---------------------------5.泛型---------------------------

// 1.有一个方法，里面接收参数，但是参数类型我们是不知道，但是这个类型在方法里面很多地方会用到，参数和返回值要保持一致性
// <T>的意思是泛型，即generic type
// 可以看出value的类型也为T，返回值的类型也为T
function deal<T>(value:T):T{
    return value
}
// 下面的<string>、<number>实际上用的时候再传给上面的<T>
// console.log(deal<string>("hello"))
// console.log(deal<number>(28))
//2.类的泛型是如何使用的
class MyMath<T>{
    // 定义一个私有属性
    private arr:T[] = []
    // 规定传参类型
    add(value:T){
      this.arr.push(value)
    }
    // 规定返回值的类型
    // max():T{
    //   return Math.max.apply(null,this.arr)
    // }
  }
  
  // 这里规定了类型为number
  // 相当于把T都替换成number
  let mymath = new MyMath<number>()
  mymath.add(1)
  mymath.add(2)
  mymath.add(3)
//   console.log(mymath.max())
  
  // 假设我们传个字符串呢？
  // 则会报错:类型“"hello"”的参数不能赋给类型“number”的参数。
//   mymath.add("hello")
//   复制代码那么我们会思考，有了接口为什么还需要抽象类？
//   接口里面只能放定义，抽象类里面可以放普通类、普通类的方法、定义抽象的东西。
  
