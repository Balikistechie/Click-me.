let button=document.getElementById('button')
let msg=document.getElementById('message')
button.addEventListener('click', ()=>{
  msg.classList.toggle('reveal');
})