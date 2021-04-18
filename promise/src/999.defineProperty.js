let obj= {};
let other= ''; // get set 需要借助第二个变量
Object.defineProperty(obj,'name',{
  enumerable:true,// 可枚举?   默认这个三个值都是false,设置了set/get在默认值是true
  configurable:true, // 可删除?
  // writable:true,// 可重写?
  // value:'hello',  // get/set 不能,和value/writable同时使用
  get(){
    return other
  },
  set(val){
    other = val
  }
})
obj.name = 'world1'
// delete obj.name
// console.log(obj.name)

let obj1 = {
  other:'',
  get name(){
    return this.other
  },
  set name(val){
    this.other = val
  }
}
obj1.name = 'world';
// console.log(obj1.name)


// vue 数据劫持原理

let data = {
  name:'zs',
  age:12,
  address:{
    location:'shanghai'
  }
}

function update(){
  console.log('更新视图')
}

function observer(obj){  // object.defineProperty 只能作用在对象上,数组也不识别===现在识别数组了
  if(typeof obj !== 'object') return 
  for (let key in obj) {
    defineReactive(obj,key,obj[key])
  }
}

function defineReactive(obj,key,value){
  observer(value)  // 递归data的所有属性  eg:data.address.loaction
  Object.defineProperty(obj,key,{
    get (){
      return value
    },
    set(val){
      if(val !== value){
        observer(val) // 赋的值是对象也要劫持才行  eg:data.name = {a:1}
        update();
        value = val  // 为啥不是obj[key] = val
      }
    }
  })
}

observer(data)
// data.name = 'hey'
// data.name = {a:1}
data.name=[12,23,34]  // 数组也能劫持了,每项上都有get/set
// data.name[0] = 1221321  // 数组改变会触发set 
// data.name.push(9999)  // 数组改变不会触发set 9999上也没有get/set 所以要重写数组这些方法
// data.name.length = 1  // 数组改变不会触发set

let methods = ['push','slice','pop','shfit','unshfit','reverse','sort'];
methods.forEach(method=>{
  // 面向切面编程，装饰器
  let oldMethod = Array.prototype[method];
  Array.prototype[method] = function(){
    update();
    oldMethod.call(this,...arguments)
  }
})
data.name.push(9999)