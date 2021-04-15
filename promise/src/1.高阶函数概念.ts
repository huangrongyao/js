type Callback = () =>void
type ReturnFn = (...args:any[]) =>void
// declare global {  // 表示和全局的Function 合并
  interface Function {
    before(fn:Callback):ReturnFn
  }

// }
Function.prototype.before = function(fn){
  return (...args: any)=>{
    fn();
    this(args)
  }
}
// 基于原代码扩展
function core(...args: any[]){
  console.log('core...',args)
}
let fn = core.before(()=>{
  console.log('before...')
})

fn(1,2,3);

// export.a= 123