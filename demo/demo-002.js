async function async1() {
  // 同步任务2
  console.log('async1_1 -- 2') // 2

  // --------------------------------
  // 1.wait写法
  //微任务1
  await async2() // 实际是await一个resolve的promise
  //微任务1:上面展开写法
  // await Promise.resolve(undefined).then(res => {
  //   console.log(`res:`, res)
  // })
  console.log('async1_2 -- 7') // 7
  // --------------------------------

  // --------------------------------
  // 2.promsie写法
  // async2() // 3
  // Promise.resolve(undefined)
  //   .then(res => {
  //     console.log(`res:`, res)
  //   })
  //   .then(() => {
  //     console.log('async1_2 -- 7') // 7 后进后出
  //   })
  // --------------------------------

  return Promise.resolve(undefined) // 类似函数return undefined
}

async function async2() {
  console.log('async2 -- 3') // 3
  return Promise.resolve(undefined) // 类似函数return undefined
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
  console.log('promise then -- 6') // 6 先进先出
})
console.log('script end -- 5') // 5
