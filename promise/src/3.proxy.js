// OBject.defineProperty 不支持数组的更新 push slice
// 希望数组变化就能更新视图 
function update(){
  console.log('更新视图')
}
let arr = [1,2,3];
// proxy 可以监控到数组的变化和对象的变化
// 数组变化会先改变数组的内容，还会改变数组的长度
let proxy = new Proxy(arr,{
  set(target,key,value){
    // target[key] = value
    // 不要手动操作原数组，因为数组变化时，可能调用的是push,pop...方法,这个时候key就会出现问题
    if(key === 'length') return true
    update()
    return Reflect.set(target,key,value)
  },
  get(target,key,){
    // return target[key]
    return Reflect.get(target,key)
  }
})
// debugger
proxy[0] = 100
proxy.push(122)
console.log(proxy[3])