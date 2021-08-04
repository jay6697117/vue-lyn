async function async1() {
  // 同步任务2
  console.log('async1_1 -- 2') // 2

  //微任务1
  await async2() // 实际是await一个resolve的promise
  //微任务1
  console.log('async1_2 -- 6') // 7
}

async function async2() {
  console.log('async2 -- 3') // 3
}

// 同步任务1
console.log('script start -- 1') // 1

// 宏任务: 定时A
setTimeout(() => {
  console.log('setTimeout -- 8') // 8
}, 0)

async1()

new Promise(resolve => {
  console.log('promise executor -- 4') // 4
  resolve()
  //微任务2
}).then(() => {
  console.log('promise then -- 7') // 6 先进先出
})
console.log('script end -- 5') // 5
