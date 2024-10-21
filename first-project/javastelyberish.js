let h =document.querySelector(`h1`)

h.className ="two three"

// classlist
//add(), contains(),remove(),toggle()

// h.classList.add(`four`)
h.classList.add(`five`)
h.classList.add(`six`)

h.classList.remove(`five`)
h.classList.remove(`six`)

// h.addEventListener(`click`,()=>{
//   if(h.classList.contains(`four`)){
//     h.classList.remove(`four`)
//     }else{
//       h.classList.add(`four`)
//     }
// })

h.addEventListener(`click`,()=>{
  h.classList.toggle(`four`)
})
console.dir(h);

//style border-bottom borderBottom bacgraondColor

h.style.color =`green`
h.style.backgroundColor=`aqua`

