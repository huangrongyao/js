const fs = require('fs');

function Queue () {
  this.dataStore = [];
  this.enqueue = enqueue; // 向队列尾添加元素
  this.dequeue = dequeue; // 删除队首元素
  this.front = front; // 读取队首元素
  this.back = back; //读取队尾元素
  this.toString = toString; // 显示队列的所有元素
  this.empty = empty; // 判断队列是否为空
  this.loop = loop; //循环队列增加的方法,将队列头元素放入队列尾
  this.size = size;//队列长度
}

function enqueue (element) {
  this.dataStore.push(element)
}
function dequeue () {
  return this.dataStore.shift()
}
function front () {
  return this.dataStore[0]
}
function back () {
  return this.dataStore[this.dataStore.length - 1]
}
function toString () {
  var reStr = '';
  for (var i = 0; i < this.dataStore.length; i++) {
    reStr += this.dataStore[i] + "\n"
  }
  return reStr
}
function empty () {
  if (this.dataStore.length > 0) {
    return false
  } else {
    return true
  }
}
function size () {
  return this.dataStore.length
}
function loop (num) {
  while (num > 0) {
    this.dataStore.push(this.dataStore.shift())
    // console.log(num)
    num--
  }
}

// var queue = new Queue()
// queue.enqueue('study');
// queue.enqueue('sleep');
// queue.enqueue('eat');
// queue.enqueue('play');
// console.log(queue.toString())
// queue.dequeue()
// console.log(queue.toString())
// console.log(queue.front())
// console.log(queue.back())
// queue.empty()
// console.log(queue.empty())


/**案例1 方块舞的舞伴分配问题 */
function Dancer (name, sex) {
  this.name = name;
  this.sex = sex;
}
function getDancers (males, females) {
  var list = fs.readFileSync(__dirname + '/04-dancers.txt', 'utf-8').split('\r\n')
  // console.log(list)
  for (var i = 0; i < list.length; i++) {
    var dancer = list[i].split(' ');
    var sex = dancer[0];
    var name = dancer[1] + ' ' + dancer[2]
    if (sex === 'F') {
      males.enqueue(new Dancer(name, sex))
      // console.log(males.dataStore)
    } else {
      females.enqueue(new Dancer(name, sex))
    }
  }
}

function dance (males, females) {
  while (!males.empty() && !females.empty()) {
    var m = males.dequeue()
    var w = females.dequeue()
    console.log('Female dacner is ' + w.name + ' ' + 'Male dacner is ' + m.name)
  }
}

// var maleDancers = new Queue()
// var femaleDancers = new Queue()
// getDancers(maleDancers, femaleDancers)
// console.log(maleDancers, femaleDancers)
// dance(maleDancers, femaleDancers)

/**案例二 击鼓传花 循环队列问题 */
// 增加一个方法,循环将队列头部元素加入尾部
// var looplist = new Queue()
// var arr = ['a', 'b', 'c', 'd']
// for (var i = 0; i < arr.length; i++) {
//   looplist.enqueue(arr[i])
// }
// do {
//   looplist.loop(2)
//   console.log('本次淘汰的是：', looplist.dequeue(), ',剩余队列：', looplist.dataStore.toString())
// } while (looplist.size() > 1)
// console.log(looplist.front())

/**案例三 优先队列 priorityQueue*/
// 需要用到一个辅助类
function QueueByPriority () {
  var items = [];
  var QueueItem = function (element, priority) {
    this.element = element;
    this.priority = priority
  }
  this.enqueue = function (element, priority) {
    var queueItem = new QueueItem(element, priority)
    var added = false;
    for (var i = 0; i < items.length; i++) {
      if (queueItem.priority > items[i].priority) {
        added = true
        items.splice(i, 0, queueItem)
        break
      }
    }
    !added && items.push(queueItem)
  }
  this.getItems = function () {
    return items
  }
}

var qp = new QueueByPriority()
qp.enqueue('zs', 1)
qp.enqueue('ls', 2)
qp.enqueue('wz', 3)
console.log(qp.getItems())
