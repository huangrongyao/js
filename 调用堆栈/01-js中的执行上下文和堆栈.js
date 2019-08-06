// 执行上下文：当前javascript代码被解析和执行时所在环境的抽象概念

// 执行上下文的类型
// 1.全局执行上下文：只有一个浏览器中的执行上下文是window对象，this指向这个全局的对象
// 2.函数执行上下文：可以有无数个，只有在函数被调用时才被创建， 每次调用函数都会创建一个新的执行上下文
// 3.eval函数执行上下文：指的是运行在eval函数中的代码，很少而且不建议用

/**
 * 执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文。
 *   首次运行JS代码时，会创建一个全局执行上下文并Push到当前的执行栈中。每当发生函数调用，引擎都会为该函数创建一个新的函数执行上下文并Push到当前执行栈的栈顶。
 *   根据执行栈LIFO规则，当栈顶函数运行完成后，其对应的函数执行上下文将会从执行栈中Pop出，上下文控制权将移到当前执行栈的下一个执行上下文。
 */

// 执行上下文的创建
// 执行上下文分两个阶段创建：1）创建阶段； 2）执行阶段
//  创建阶段
//   1、确定 this 的值，也被称为 This Binding。
//   2、LexicalEnvironment（词法环境） 组件被创建。
//   3、VariableEnvironment（变量环境） 组件被创建。