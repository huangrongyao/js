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
     
    // console.log(message);     // "undefined" 
    // console.log(age);         // 产生错误  age is not defined
    // console.log(typeof message);     // "undefined" 
    // console.log(typeof age);         // "undefined" 

    // 结果表明，对未初始化和未声明的变量执行 typeof 操作符都返回了 undefined 值；

/**  
 * 2. null类型 
 *    Null 类型是第二个只有一个值的数据类型，这个特殊的值是 null。从逻辑角度来看，
 *    null 值表 示一个空对象指针,而这也正是使用 typeof 操作符检测 null 值时会返回"object"的原因 
 * 
 */
    // console.log(typeof null)  // object 

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

 /**  
 * 5. object类型 
 *    ECMAScript中的对象其实就是一组数据和功能的集合 
 *    Object 类型是所有它的实例的基础。换句话说， Object 类型所具有的任何属性和方法也同样存在于更具体的对象中
 *    
 *    Object 的每个实例都具有下列属性和方法。 
 *      constructor：保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructor） 就是 Object()。
 *      hasOwnProperty(propertyName)：用于检查给定的属性在当前对象实例中（而不是在实例 的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例 如：o.hasOwnProperty("name")）。
 *      isPrototypeOf(object)：用于检查传入的对象是否是传入对象的原型
 *      propertyIsEnumerable(propertyName)：用于检查给定的属性是否能够使用 for-in 语句来枚举。与 hasOwnProperty()方法一样，作为参数的属性名必须以字符 串形式指定。
 *      toLocaleString()：返回对象的字符串表示，该字符串与执行环境的地区对应。
 *      toString()：返回对象的字符串表示。 
 *      valueOf()：返回对象的字符串、数值或布尔值表示。通常与 toString()方法的返回值 相同。
 *
 *    由于在 ECMAScript中 Object 是所有对象的基础，因此所有对象都具有这些基本的属性和方法 
 */

    // var a = { 
    //     name:'zs',
    //     age:18,
    //     favor:function(){
    //         console.log('eat')
    //     }
    // }
    // console.log(a.valueOf())
    // console.log(+{})

    function delayInvoke(func,wait){
        console.log(arguments)

        return function () {
            let context = this
            let args = arguments
            console.log('args',args)
        }
    }
    let a = delayInvoke(1,2)
    console.log(a(2,3));
    