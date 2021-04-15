
declare global {  // 表示和全局的Function 合并
  interface Function {
    before(fn:Callback):ReturnFn
  }

}