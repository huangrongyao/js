"use strict";
// 1.布尔类型boolean
    let a:boolean = true 

// 2.数字类型number
    let age:number = 28

// 3.字符串类型string
    let myName:string = "某某某"

// 4.数组类型Array     ts中数组类型会区分
    //  4.1 字符串类型的数组  两种写法
        let pets1:string[] = ["旺财","小黑"]
        let pets2:Array<string> = ["旺财","小黑"];
    //  4.2 对象类型的数组
        let pets3:Array<object> = [{name:"旺财"},{name:"小黑"}];
        let pets4:object[] = [{name:"旺财"},{name:"小黑"}];
    //  4.3 数组中，随意放string、number、boolean类型 这里的 | 相当于 或 的意思 
        let arr1:Array<string|number|boolean> = ["hello swr",28];
    //  4.4 想在数组中放任意类型
        let arr2:Array<any> = ["hello swr",28,true]

// 5.元祖类型tuple
    // 元组是数组的一种。
    // 有点类似解构赋值，但是又不完全是解构赋值，比如元组类型必须一一对应上，多了少了或者类型不对都会报错。
    // 元组类型是一个不可变的数组，长度、类型是不可变的。
        let person:[string,number] = ['某某某',28]

// 6.枚举类型enum  可以定义一些值，定义完了后可以直接拿来用了，用的时候也不会赋错值。并且不能再给枚举类型修改值
    enum sex {
        boy,
        girl,
        se
    }
    // 不赋值，默认依次为0，1，2...
    // console.log(sex.boy)
    // console.log(sex.girl)
    // console.log(sex.se)
    // 实际项目中可以用来枚举订单状态等 
    enum orderStatus {
        WAIT_FOR_PAY = "待支付",
        UNDELIVERED = "完成支付，待发货",
        DELIVERED = "已发货",
        COMPLETED = "已确认收货"
    }

// 7.任意类型 any 相当于放弃了类型检查
    // 添加一个any类型，此时就不会报错了，但是也相当于放弃了类型检查了
    // btn 有可能获取的到也有可能获取不到是null类型
    let btn:any = document.getElementById('btn')
    btn.style.color = "blue"

    // 当然也有粗暴一些的方式，利用 ! 强制断言
    let btn1 = document.getElementById("btn")
    btn1!.style!.color = "blue"

    // 可以赋值任何类型的值
    // 跟以前我们var let声明的一模一样的
    let person2:any = "某某某"
    person2 = 28
