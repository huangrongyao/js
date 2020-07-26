function Stack () {
  this.dataSource = [];
  this.top = 0;     // 
  this.pop = pop;   // 删除栈顶元素 
  this.push = push; // 将元素压入栈道 
  this.peek = peek; //只返回栈顶元素，并不删除,
  this.clear = clear;
  this.length = length;
}

function pop () {
  return this.dataSource[--this.top]
}

function push (element) {
  this.dataSource[this.top++] = element
  return this.top
}

function peek () {
  return this.dataSource[this.top - 1]
}

function clear () {
  this.top = 0
}
function length () {
  return this.top
}
// var stack = new Stack()
// stack.push('study')
// stack.push('eat')
// stack.push('sleep')
// console.log(stack.top)
// console.log(stack.dataSource)
// console.log(stack.peek())
// console.log(stack.pop())
// stack.clear()
// console.log(stack.top)
// console.log(stack.dataSource)
// console.log(5 % 2)                  

/**案例1 基数为2-9的数制之间的转换 */
function mulBase (num, base) {
  var stack = new Stack();
  do {
    stack.push(num % base);
    num = Math.floor(num /= base)
  } while (num > 0)
  var converted = ''
  while (stack.length() > 0) {
    converted += stack.pop()
  }
  return converted
}

// console.log(mulBase(32, 2))
// console.log(mulBase(32, 8))


/**案例2 判断一个字符串是否是回文字符串*/
function isPalindrome (word) {
  var s = new Stack()
  for (var i = 0; i < word.length; i++) {
    s.push(word[i])
  }
  var rword = ''
  while (s.length() > 0) {
    rword += s.pop()
  }
  if (rword === word) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome('abcdcba'))
console.log(isPalindrome('abcddcba'))
console.log(isPalindrome('abcdabba'))