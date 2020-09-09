/**
 * 树:
 * 二叉树:
 * 完全二叉树:
 * 完美二叉树:
 * 二叉搜索树:BST Binary Search Tree 也成二叉排序树,二叉查找树
 *    二叉搜索树是一颗二叉树,可以为空:
 *      非空左子树的所有键值小于其根节点的值
 *      非空右子树的所有键值大于其根节点的键值
 *      左、右子树本身也都是二叉搜索树
 *二叉搜索树特点： 相对较小的值总是保存咋左节点上，相对较大的值总是保存在右节点上 ，可以利用这个特点做查找，效率非常高
 */
function Node(key) {
  this.right = null
  this.left = null
  this.key = key
}
function BinarySearchTree() {
  this.root = null
  this.insert = insert // 插入方法
  this._insertNode = _insertNode
  // 遍历有三种方法 先序遍历 中序遍历 后序遍历
  // 1. 先序遍历
  this.preOrderTraversal = preOrderTraversal
  this._preOrderTraversalNode = _preOrderTraversalNode
  // 中序遍历  从大到小排序的
  this.midOrderTraversal = midOrderTraversal
  this._midOrderTraversalNode = _midOrderTraversalNode
  // 后序遍历
  this.postOrderTraversal = postOrderTraversal
  this._postOrderTraversalNode = _postOrderTraversalNode

  // 查找最大值 最小值
  this.max = max
  this.min = min

  //搜索 特定的key
  this.search = search
  // this.searchNode = searchNode

  //删除操作
  this.remove = remove
  this.getSuccssor = getSuccssor // 找后继,即比给定节点大一点点的值(给定节点的右子树中找最小值)
}
function insert(key) {
  let newNode = new Node(key)
  this.root === null
    ? (this.root = newNode)
    : this._insertNode(this.root, newNode)
}

function _insertNode(curNode, newNode) {
  if (curNode.key < newNode.key) {
    if (curNode.right === null) {
      curNode.right = newNode
    } else {
      this._insertNode(curNode.right, newNode)
    }
  } else {
    if (curNode.left === null) {
      curNode.left = newNode
    } else {
      this._insertNode(curNode.left, newNode)
    }
  }
}

function preOrderTraversal(handler) {
  this._preOrderTraversalNode(this.root, handler)
}
function _preOrderTraversalNode(node, handler) {
  if (node !== null) {
    //  先序遍历 中序遍历 后序遍历  指什么时候处理当前节点,这里先处理在查左右子节点,所以叫先序
    handler(node.key)
    // 递归调用,先查每个节点的左子树,当前节点左子树查询完会查当前节点右子树,右子树也查完会弹出占,返回上一级节点再查上一级节点的右子树
    this._preOrderTraversalNode(node.left, handler)

    //  handler(node.key)  处理函数写这里叫中序
    this._preOrderTraversalNode(node.right, handler)
    //  handler(node.key)  处理函数写这里叫后序
  }
}

function midOrderTraversal(handler) {
  this._midOrderTraversalNode(this.root, handler)
}
function _midOrderTraversalNode(node, handler) {
  if (node !== null) {
    this._midOrderTraversalNode(node.left, handler)
    handler(node.key)
    this._midOrderTraversalNode(node.right, handler)
  }
}

function postOrderTraversal(handler) {
  this._postOrderTraversalNode(this.root, handler)
}
function _postOrderTraversalNode(node, handler) {
  if (node !== null) {
    this._postOrderTraversalNode(node.left, handler)
    this._postOrderTraversalNode(node.right, handler)
    handler(node.key)
  }
}

function max() {
  var node = this.root
  var key = null
  while (node !== null) {
    key = node.key
    node = node.right
  }
  return key
}

function min() {
  var node = this.root
  var key = null
  while (node !== null) {
    key = node.key
    node = node.left
  }
  return key
}

// 这个写法不优
// function search(key) {
//   this.searchNode(this.root, key)
// }
// function searchNode(node, key) {
//   if (node !== null) {
//     console.log(node.key === key)
//     this.searchNode(node.left, key)
//     this.searchNode(node.right, key)
//   }
// }

function search(key) {
  var node = this.root
  while (node !== null) {
    if (node.key > key) {
      node = node.left
    } else if (node.key < key) {
      node = node.right
    } else {
      return true
    }
  }
  return false
}

function remove(key) {
  // 1. 找到要删除的节点
  var current = this.root
  var parent = null
  var isLeftChild = true // 要找的节点是父元素的左子节点还是右子节点
  while (current.key !== key) {
    parent = current
    if (key < current.key) {
      isLeftChild = true
      current = current.left
    } else {
      isLeftChild = false
      current = current.right
    }
    // 未找到节点退出函数
    if (current === null) {
      return false
    }
  }
  // 2. 找到了current.key == key
  // 2.1 删除的节点是叶子节点
  if (current.left === null && current.right === null) {
    console.log('是叶子节点')
    if (current === this.root) {
      this.root = null
    } else if (isLeftChild) {
      parent.left = null
    } else {
      parent.right = null
    }
  }
  // 2.2 删除的节点有一个子节点
  // 要删除的节点只有一个左子节点
  else if (current.right === null) {
    console.log('是有一个左子节点')
    if ((current = this.root)) {
      // 考虑要删的元素是根节点且是一个只有一个节点的情况
      this.root = current.left
    } else if (isLeftChild) {
      // 要删的元素是父元素的左子节点
      parent.left = current.left
    } else {
      // 要删的元素是父元素的右子节点
      parent.right = current.left
    }
    // 要删除的节点只有一个右子节点
  } else if (current.left === null) {
    console.log('是有一个右子节点')
    if ((current = this.root)) {
      this.root = current.right
    } else if (isLeftChild) {
      parent.left = current.right
    } else {
      parent.right = current.right
    }
  }
  // 2.3 删除的节点有两个子节点
  else {
    console.log('是有两个子节点')
    // 1.获取后继节点
    var succssor = this.getSuccssor(current)
    // console.log('succssor', succssor)
    // return
    // 2.判断要删除的节点是否是根节点
    if (current === this.root) {
      this.root = succssor
    } else if (isLeftChild) {
      parent.left = succssor
    } else {
      parent.right = succssor
    }
    // 3.后继节点的左子树等于current.left
    succssor.left = current.left
  }
}
/***
 *
 *                   11
 *        7                       15
 *    5        9            13              20
 *  3    6   8   10      12     14      18      25
 *                                         19
 *   要删除的是15,1.找到后继是18 ,2.判断18 不是15的右子节点 3.需要把18的右子节点挂18的父节点的左子节点上(18不存在左子节点,不然后继就是18的左子节点了),
 *   3.把15的左右子节点挂18上
 */
// 找后继
function getSuccssor(delNode) {
  // 1.定义变量,保存找到的后继
  var succssor = delNode
  var current = delNode.right
  var succssorParent = delNode
  //2.循环查找
  while (current != null) {
    succssorParent = succssor
    succssor = current
    current = current.left
  }
  // 3.判断找到的后继节点是否是delNode的right子节点 还是孙节点
  if (succssor != delNode.right) {
    //   if (succssor.right !== null) {
    succssorParent.left = succssor.right
    //   }
    succssor.right = delNode.right
  }
  return succssor
}

let bst = new BinarySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
bst.insert(19)
/***
 *                   11
 *        7                       15
 *    5        9            13              20
 *  3    6   8   10      12     14      18       25
 *                                         19
 */
// let str = ''
// bst.preOrderTraversal((key) => {
//   str += key + ' '
// })
// console.log(str) //11 7 5 3 6 9 8 10 15 13 12 14 20 18 25

// let midStr = ' '
// bst.midOrderTraversal((key) => {
//   midStr += key + ' '
// })
// console.log(midStr) //   3 5 6 7 8 9 10 11 12 13 14 15 18 20 25

// let afterStr = ' '
// bst.postOrderTraversal((key) => {
//   afterStr += key + ' '
// })
// console.log(afterStr) // 3 6 5 8 10 9 7 12 14 13 18 25 20 15 11

// console.log(bst.max())
// console.log(bst.min())
// bst.remove(7)
// bst.remove(9)
bst.remove(15)
let str = ''
bst.preOrderTraversal((key) => {
  str += key + ' '
})
console.log(str) //11 7 5 3 6 9 8 10 18 13 12 14 20 19 25
