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
  //function onKeyDownHandler(e) {
    //const key=e.key
   document.body.addEventListener('keydown', function(e) {
  let index = 0 
  let  key = parseInt(e.key)
     if (key===codes[index]) {
     index++
     if (index===codes.length)  { 
       //index=0
       alert('Hurray!')
      } 
   } else {
     console.log(e.which)
       index=0  
   } 
 } )
} init()
