//click, pointerdown, pointerup, pointerenter, pointer, pointerleave pointermove

// document.querySelector(`.content`).addEventListener(`pointermove`, (e)=>{
//   console.log(e);
// })

let x = 0
let y = 0


let b = document.querySelector(`.block`)

b.style.top = y + `px`
b.style.left = x +`px`



b.addEventListener(`mousemove`, (e)=>{
  if (e.offsetX > 0 && e.offsetX < 30 ){
    x = x + 50
    b.style.left = x +`px`
  }
   else if(e.offsetX > 0 && e.offsetX < 30){
    x = x - 50
    b.style.left = x + `px`
  }
  else if(e.offsetY > 0 && e.offsetY < 30){
    y = y + 50
    b.style.top= y + `px`
  }
  
    else{
    y = y - 50
    b.style.top = y +`px`
  }
})