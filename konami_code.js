const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
 
function init() {
  
    const key=e.key
   document.body.addEventListener('keydown', function(e) {
  let index = 0 
  let  key = parseInt(event.key)
     if (key===codes[index]) {
     index++
     if (index===codes.length)  { 
       index=0
       alert('Hurray!')
      } 
   } else {
     console.log(event.which)
       index=0  
   } 
 } )
} init()
