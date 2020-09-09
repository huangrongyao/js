.function Node (element) {
  this.element = element;
  this.next = null
}
function LinkedList () {
  this.head = new Node("head");
  this.head.next = this.head; // 循环列表修改点,下面方法也需要修改防止死循环
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.display = display;  // 显示链表中的有效元素（即不含head）
  this.remove = remove
}

function find (item) {
  var currNode = this.head;
  while (currNode.element !== item && currNode.next !== 'head') {
    currNode = currNode.next;
    console.log(1)
  }
  return currNode;
};

function insert (newElement, item) {
  var newNode = new Node(newElement)
  var currNode = this.find(item);
  newNode.next = currNode.next;
  currNode.next = newNode;
};

function findPrevious (item) {
  var currNode = this.head;
  while (currNode.next !== null && currNode.next.element !== item) {
    currNode = currNode.next;
  }
  return currNode
};

function display () {
  var currNode = this.head;
  while (currNode.next !== null) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function remove (item) {
  var currNode = this.head;
  var previousNode = this.findPrevious(item);
  if (previousNode.next !== null) {
    previousNode.next = previousNode.next.next;
  }
}

var ll = new LinkedList();
ll.insert('shanghai', 'head');
ll.insert('guangzhou', 'shanghai');
ll.insert('shenzhen', 'guangzhou');
ll.insert('hangzhou', 'shenzhen');
ll.insert('hefei', 'hangzhou');
ll.remove('guangzhou')
ll.find('shang hai')
// ll.display()
