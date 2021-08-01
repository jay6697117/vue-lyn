console.log(1);
const p  = new Promise((resolve, reject) => {
  console.log(3);
  setTimeout(() => {
    resolve()
  }, 0)
})

p.then(() =>{
  console.log(4);
})
console.log(2);
