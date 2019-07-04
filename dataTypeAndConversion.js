/** 
 * @description javascript 数据类型以及转换
 * 简单数据类型：Undefined、Null、Boolean、Number 和String
 * 复杂数据类型:Object
 */

/** 
 * 补充 typeof 操作符 检测给定变量的数据类型
 *      typeof 操作符返回值为字符串：'undefined' 'boolean' 'string' 'number' 'object' 'function'
 */ 
    
/**  
 * 1. Undefined类型 
 *    Undefined 类型只有一个值，即特殊的 undefined。在使用 var 声明变量但未对其加以初始化时， 
 *    这个变量的值就是 undefined
 * 
 */
    // 下面这个变量并没有声明 
    // var age 
     
    console.log(message);     // "undefined" 
    console.log(age);         // 产生错误  age is not defined
    console.log(typeof message);     // "undefined" 
    console.log(typeof age);         // "undefined" 

    // 结果表明，对未初始化和未声明的变量执行 typeof 操作符都返回了 undefined 值；

/**  
 * 2. null类型 
 *    Null 类型是第二个只有一个值的数据类型，这个特殊的值是 null。从逻辑角度来看，
 *    null 值表 示一个空对象指针,而这也正是使用 typeof 操作符检测 null 值时会返回"object"的原因 
 * 
 */
    console.log(typeof null)  // object 

/**  
 * 3. Boolean类型 
 *    该类型只有两个字面值：true 和 false
 */
 
 /**  
 * 4. Number类型 
 *    这种类型使用 IEEE754格式来表示 整数和浮点数值（浮点数值在某些语言中也被称为双精度数值）
 * 
 *    浮点数值，就是该数值中必须包含一个小数点，并且小数点后面必须至少有一位数字。
 *        虽然小 数点前面可以没有整数，但不推荐这种写法
 *    保存浮点数值需要的内存空间是保存整数值的两倍，因此ECMAScript会不失时机地将浮点数值 转换为整数值。
 *        显然，如果小数点后面没有跟任何数字，那么这个数值就可以作为整数值来保存。同样地，
 *        如果浮点数值本身表示的就是一个整数（如1.0），那么该值也会被转换为整数
 *    NaN，即非数值（Not a Number）是一个特殊的数值，
 */