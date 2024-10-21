//massivlar ustida ishlash
let a =[1, 2, 3, `salom`, false, 8, `165`, 15]

//itimlar ustida amalar
//a.push(`test`) oxiridan qo'shadi
//a.unshift(`test`)boshidan qo'shadi
// a.pop(); oxiridan qo'shadi
// a.shift(); boshidan o'chiradi
// let f = a.splice(2, 4)
// let f = a.slice(2, 4)

//iteratorlar
// a.forEach((item)=>{
//   document.querySelector(`.list`).innerHTML += `<li>${item}</li>`
// })

// let f = a.map((item)=>{
//   document.querySelector(`.list`).innerHTML += `<li>${item}</li>`
//   return item + 5
// })

// let f =a.find(item=>item > 3)
// let f =a.filter(item=>item > 2)

// let f = a.join(` | `)
// let h = f.split(` | `)

// a.sort((a, b)=>a-b)
// a.reverse()

let r =[150000, 500000, 286000]
// let h = a.concat(r)
// let h = [...a, ...r]

let h =r.reduce((summ, item)=>{
  return summ * item
}, 1)

console.log(a);
// console.log(f);
console.log(h);