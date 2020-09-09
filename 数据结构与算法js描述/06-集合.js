/** 集合元素不能重复,没有顺序 */
function Set() {
  // 集合应有的属性
  this.items = {}
  this.add = add
  this.has = has
  this.remove = remove
  this.size = size
  this.values = values
  this.clear = clear
  /*
 集合之间的操作：
   并集：对于给定的两个集合，返回一个包含两个集合中所有元素的新集合；
   交集：对于给定的两个集合，返回一个包含两个集合中共有元素的新集合；
   差集：对于给定的两个集合，返回一个包含所有存在于第一个集合并且不存在于第二个集合的元素的新集合；
   子集:验证一个给定集合是否是另外一个给定集合的子集
*/
  this.union = union // 并集
  this.intersection = intersection // 交集
  this.difference = difference // 差集
  this.isSubSet = isSubSet // 差集
}

function has(value) {
  return this.items.hasOwnProperty(value)
}

function add(value) {
  if (this.has(value)) {
    return false
  }
  this.items[value] = value
  return true
}

function remove(value) {
  if (!this.has(value)) {
    return false
  }
  delete this.items[value]
  return true
}

function clear() {
  this.items = {}
}

function size() {
  return Object.keys(this.items).length
}
function values() {
  return Object.values(this.items)
}

function union(otherSet) {
  let unoinSet = new Set()
  let values = this.values()
  let OtherValues = otherSet.values()
  values.map((v) => {
    unoinSet.add(v)
  })
  OtherValues.map((v) => {
    unoinSet.add(v)
  })
  return unoinSet
}

function intersection(otherSet) {
  let interSec = new Set()
  let values = this.values()
  values.map((v) => {
    otherSet.has(v) && interSec.add(v)
  })
  return interSec
}

function difference(otherSet) {
  let diff = new Set()
  let values = this.values()
  values.map((v) => {
    !otherSet.has(v) && diff.add(v)
  })
  return diff
}

function isSubSet(otherSet) {
  let values = this.values()
  let flag = true
  values.map((v) => {
    !otherSet.has(v) && (flag = false)
  })
  return flag
}

var set = new Set()
console.log(set.add('zs'))
console.log(set.add('ls'))
console.log(set.add('wu'))
// console.log(set.add('hh'))

var set1 = new Set()
console.log(set1.add('zs'))
console.log(set1.add('ls'))
console.log(set1.add('wu'))
console.log(set1.add('zl'))
// console.log(set.add('ls'))
// console.log(set.clear())
// console.log(set.values())
console.log(set.isSubSet(set1))
