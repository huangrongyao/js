
//基础知识：
//  1.for in 循环只会遍历我们自定义的属性，原型上默认的属性不会遍历出来，但在实际应用中，
//    如果是在原型中新增属性或者方法，for...in会将原型中新增的属性和方法遍历出来。如下的Object.prototype.score = '97'
//  2.obj.hasOwnProperty(prop)用来判断某个对象是否含有指定的属性的，返回值为Boolean ，该方法会忽略掉那些从原型链上继承到的属性。
//  3.判断是否为对象 ，这里不太合适 因为要考虑保留数组 ，所以使用typeof
      function isObject1(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
      }
      // typeof null //"object"
      // typeof {} //"object"
      // typeof [] //"object"
      // typeof function foo(){} //"function" (特殊情况)
      function isObject(obj) {
        return typeof obj === 'object' && obj != null;
      }


function deepCopy(source){
  if(!isObject(source)) return source  // 非对象返回自身
  var target = Array.isArray(source) ? [] : {}
  for(var key in source){
    if(Object.prototype.hasOwnProperty.call(source,key)){
      if(typeof source[key] === 'Object'){
        target[key] = deepCopy(source[key])
      }else{
        target[key] = source[key]
      }
    }
  }
  return target
}
Object.prototype.score = '97'; // 该属性会被for in 遍历
var a = {
  name: "muyiy",
  book: {
      title: "You Don't Know JS",
      price: "45"
  },
  a1: undefined,
  a2: null,
  a3: 123
}
var c = 12
var d = [0,1,2,5]
console.log(deepCopy(d))