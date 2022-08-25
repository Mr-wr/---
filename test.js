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
console.log(a.findIndex(i => i == 1))
a.includes(2, 1)
console.log('log - a.includes(2, 1)', a.includes(2, 3))
let str = 'cabcdefc'
console.log(str.match('c'))
