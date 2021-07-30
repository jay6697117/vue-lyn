async function async1() {
  console.log('async1_1')
  await async2()
  console.log('async1_2')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(() => {
  console.log('setTimeout')
}, 0)
async1()
new Promise(resolve => {
  console.log('promise executor')
  resolve()
}).then(() => {
  console.log('promise then')
})
console.log('script end')
