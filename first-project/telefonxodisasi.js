//touchstart, touchmove, touchend 

let c =document.querySelector(`.container`)
let n =document.querySelector(`nav`)

c.addEventListener(`touchstart`, (e)=>{
  let swst =e.changedTouches [0].clientY
console.log(swst);
c.addEventListener(`touchmove`, (e)=>{
  c.addEventListener(`touchend`, (ev)=>{
    let swend =ev.changedTouches[0].clientY
    if (swst > swend) {
      n.classList.add(`navactive`)
    }else{
      n.classList.add(`navactivemas`)
    }
  })
})
})