    let f = document.forms[0]
let i = document.querySelector('input')

f.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(e);
})

i.addEventListener('focus', (e)=>{
    console.log(e);
    document.querySelector('#u').innerText = 'F I SH kiriting'
})
i.addEventListener('blur', (e)=>{
    console.log(e);
    document.querySelector('#u').innerText = ''
})
document.querySelector('#rang').addEventListener('input', (e)=>{
    document.body.style.backgroundColor = document.querySelector('#rang').value
})
i.addEventListener('change', (e)=>{
    document.querySelector('#u').innerText = i.value
})
document.querySelector('#r').addEventListener('input', (e)=>{
    document.querySelector('#rl').innerText = document.querySelector('#r').value
})

document.querySelector('select').addEventListener('change', (e)=>{
    console.log(e);
    console.log(document.querySelector('select').value);
})


document.querySelector('h4').addEventListener('copy', (e)=>{
    e.preventDefault()
    console.log(e);
})
i.addEventListener('paste', (e)=>{
    e.preventDefault()
})
i.addEventListener('cut', (e)=>{
    e.preventDefault
})