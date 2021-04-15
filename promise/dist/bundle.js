// 基于原代码扩展
function core(...args){
  console.log('core...',args)
}

Function.prototype.before = function(fn){
  return (...args)=>{
    fn();
    this(args)
  }
}

let fn = core.before(()=>{
  console.log('before...')
})

fn(1,2,3)