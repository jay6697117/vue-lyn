// console.log('1 -- 1')

// setTimeout(() => {
//   console.log('timer1 -- 3')
//   Promise.resolve().then(() => {
//     console.log('promise1 -- 4')
//   })
// }, 0)

// setTimeout(() => {
//   console.log('timer2 -- 5')
//   Promise.resolve().then(() => {
//     console.log('promise2 -- 6')
//   })
// }, 0)

// console.log('2 -- 2')

// setTimeout(() => {
//   console.log('timeout -- 1')
// }, 0)

// // setTimeout(() => {
// //   console.log('timeout -- 2')
// // }, 1)

// setImmediate(() => {
//   console.log('immediate -- 3')
// })

const fs = require('fs')
const path = require('path')
// 读取文件
fs.readFile(path.join(__dirname, './test.txt'), (err, res) => {
  if (err) throw err
  console.log(`res:`, res)
  setTimeout(() => {
    console.log('timeout')
  }, 0)
  setImmediate(() => {
    console.log('immediate')
  })
})

// process.nextTick(function(){
//   console.log("nextTick延迟")
// });

// setTimeout(() => {
//   console.log('setTimeout延迟 -- 1')
// }, 0)
// setImmediate(() => {
//   console.log('setImmediate延迟 -- 2')
// })
// console.log('正常执行 -- 3') // 同步会导致check耗时，超过1ms，导致顺序一定是312；注释了这里会导致上面两个执行结果待定
