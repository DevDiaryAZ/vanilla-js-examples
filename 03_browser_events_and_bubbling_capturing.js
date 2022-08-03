//event => e, ev, event
// function => handler (обработчик), listener (слушатель), subscriber (подписчик)
// event => {...} => fuction(event)

const sm = document.getElementById('small');
const md = document.getElementById('medium');
const bg = document.getElementById('big');

const clickHandler = (e) => {
  e.stopPropagation();
  console.log(e.target.id);
};

const clickHandler2 = (e) => {
  e.stopPropagation();
  console.log(e.currentTarget.id);
};

// sm.onclick = clickHandler // clickHandler{...}
// sm.onclick = null

sm.addEventListener("click", clickHandler)
sm.addEventListener("click", clickHandler2)
// ***delete listener***
// sm.removeEventListener("click", clickHandler)

const getCurrentTargetId = (e) => {
  e.stopPropagation();
  alert(e.currentTarget.id);
};

md.addEventListener('click', getCurrentTargetId);
bg.addEventListener('click', getCurrentTargetId);


const a = document.getElementById("a")
a.addEventListener("click", (e)=>{
  e.preventDefault()
  alert("Hello!")
})