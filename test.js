// let a = ['asdf', 'sa1df', 'sda3f']
// a.splice(1, 1)
// console.log('log - a ', a)
// const t = {
//   a: function () {
//     setTimeout(function () {
//       console.log(this)
//     }, 1000)
//   },
// }
// t.a()
let a = [1, 2, , 5, 3, 4, 5]

// console.log(a.splice(0, 4))
// console.log(a.findIndex(i => i == 1))
// a.includes(2, 1)
// console.log('log - a.includes(2, 1)', a.includes(2, 3))
// let str = 'cabcdefc'
// console.log(str.match('c'))
// let ac = 'dsaf'
console.log(a.some(i => i > 3))
// 查找第一个
console.log(a.find(i => i > 3))
// 返回下表
console.log(a.findIndex(i => i > 3))
console.log(a.indexOf(5))

function deefClone(obj) {
  let tmp = {}
  if (obj.a) {
    tmp.a = deefClone(obj.a)
  }
  tmp = obj
  return tmp
}
console.log(deefClone({ a: { b: 1, a: { c: 1 } }, b: 1, b: { asdf: 1 } }))
