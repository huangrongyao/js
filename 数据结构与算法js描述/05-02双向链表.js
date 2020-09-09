/** 双向链表 */
function Node (element) {
  this.element = element;
  this.next = null;
  this.previous = null;
};

function LinkedList () {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.findLast = findLast;  // 查找最后的节点
  this.dispReverse = dispReverse; // 反向显示所有的元素
};

function find (item) {
  var currNode = this.head;
  while (currNode.element !== item) {
    currNode = currNode.next
  }
  return currNode
};

function insert (newElement, item) {
  var newNode = new Node(newElement);
  var currNode = this.find(item);
  newNode.next = currNode.next;
  newNode.previous = currNode;
  currNode.next = newNode;
};

function remove (item) {
  var currNode = this.find(item);
  if (currNode.next !== null) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
};

function findLast () {
  var currNode = this.head;
  while (currNode.next !== null) {
    currNode = currNode.next
  }
  return currNode
};

function dispReverse () {
  var lastNode = this.findLast();
  var currNode = lastNode
  while (currNode.previous !== null) {
    console.log(currNode.element);
    currNode = currNode.previous
  }
}

var ll = new LinkedList()
ll.insert('zhangsan', 'head');
ll.insert('lisi', 'zhangsan');
ll.insert('wangwu', 'lisi');
ll.insert('zhaoliu', 'wangwu');
ll.remove('lisi')
ll.dispReverse()