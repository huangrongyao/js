function List () {
  this.listSize = 0;           // 列表的元素个数
  this.dataStore = [];         // 初始化一个数组来保存列表元素
  this.pos = 0;                // 列表的当前位置
  this.clear = clear;          // 清空列表中的所有元素
  this.length = length;        // 列表中有多少个元素
  this.find = find;            // 列表中查找某一元素
  this.toString = toString;    // 返回列表的字符串形式
  this.insert = insert;        // 在现有元素后面插入新元素
  this.append = append;        // 在列表的末尾添加新元素
  this.remove = remove;        // 从列表中移出元素
  this.front = front;          // 将列表的当前位置移动到第一个元素
  this.end = end;              // 将列表的当前位置移动到最后一个元素
  this.prev = prev;            // 将当前位置前移一位
  this.next = next;            // 将当前位置后移一位
  this.hasNext = hasNext;      // 判断后一位
  this.hasPrev = hasPrev;      // 判断前一位
  this.currPos = currPos;      // 获取列表当前位置
  this.move = moveTo;          // 移动到某一位置
  this.getElement = getElement;// 获取当前元素
  this.contains = contains;    // 判断给定元素是否在列表中
}

function append (e) {
  this.dataStore[this.listSize++] = e
}

function find (e) {
  return this.dataStore.findIndex(item => item == e)
}

function remove (e) {
  let index = this.find(e)
  if (index > -1) {
    this.dataStore.splice(index, 1)
    this.listSize = this.listSize - 1
    return true
  }
  return false
}

function length () {
  return this.listSize
}

function toString () {
  return this.dataStore.toString()
}

/**
 * 
 * @param {*} element 要插入的元素
 * @param {*} after   在什么元素之后插入
 */
function insert (element, after) {
  let index = this.find(after)
  if (index > -1) {
    this.dataStore.splice(index + 1, 0, element)
    this.listSize = this.listSize + 1
    return true
  }
  return false
}

function clear () {
  this.dataStore = []
  this.listSize = this.pos = 0
}

function contains (e) {
  return this.find(e) > -1 ? true : false
}

function front () {
  this.pos = 0
}

function end () {
  this.pos = this.listSize - 1
}

function prev () {
  this.pos > 0 ? this.pos-- : this.pos = 0
}

function next () {
  this.pos < this.listSize ? this.pos++ : null
}

function currPos () {
  return this.pos
}

function moveTo (position) {
  this.pos = position
}

function hasNext () {
  return this.pos < this.listSize
}
function hasPrev () {
  return this.pos > 0
}

function getElement () {
  return this.dataStore[this.pos]
}

var name = new List()
name.append('hry')
name.append('xj')
name.append('zxh')
name.append('was')
name.append('xsd')
name.append('asd')
name.append('ert')



// !!!!使用迭代器访问列表!!!!
// 从前向后访问列表
for (name.front(); name.hasNext(); name.next()) {
  console.log(name.getElement())
}

// 从后向前访问列表
for (name.end(); name.hasPrev(); name.prev()) {
  console.log(name.getElement())
}











