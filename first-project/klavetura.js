//keypress, keydown, keyup
window.addEventListener(`keyup`, (e)=>{
  console.log(e);
  if(e.ctrlKey === true && e.shiftKey ===true &&e.altKey===true&&e.code ===`KeyL`)
  document.querySelector(`.lock`).classList.add(`locked`)

})
document.querySelector(`#openlock`).addEventListener(`click`, ()=>{
  document.querySelector(`.lock`)
})