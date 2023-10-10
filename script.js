
// function cal(){
// let screen = document.querySelector(".screen");
// let buttons = document.querySelectorAll(".btn");
// let equal = document.querySelector(".btn-equal") ;
// let clear = document.querySelector(".btn-clear");

// buttons.forEach(function(button){
//     button.addEventListener('click', function(e){
//         let value = e.target.dataset.num;
//         screen.value += value;
//     })
// })

// let char = e.target.value;
// if (char == 'C'){
//     screen.value = ''
// }


// equal.addEventListener('click', function(){
//     if(screen.value === ''){
//         screen.value = "";
//     }else{
//         let answer = eval(screen.value);
//         screen.value = answer;
//     }
// })

// // clear.addEventListener('click' , function(){
// //     screen.value = ""
// // })

// };

// cal();








let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".btn-equal") ;
let clear = document.querySelector(".btn-clear");



// function myfunc(e){
    // let char = e.target.innerText ;
//     screen.value += ["=","C"].includes(char) ? "": char ;
//     if(char == 'C') { 
//         screen.value = ""
//     }
//     else if(char == '='){
//         let ans = eval(screen.value);
//         screen.value = ans;
//     }
//     else{
//         screen.value = ''
//     }
// }

// for(item of buttons){
//     item.addEventListener('click', myfunc)
// }

function addOutput(e) {
  let char = e.target.innerText;
  screen.value += ["=", "C"].includes(char) ? "": char
  msg = screen.value
  if (char == 'C') {
    screen.value = " ";
  } else if (char == '=') {
    screen.value = eval(msg)
  } else {
    msg = "";
  }

}



for (item of buttons) {
  item.addEventListener('click', addOutput);
}




