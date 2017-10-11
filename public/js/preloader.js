// var flagAuto = 0;
// document.body.onload = () => {
//   let root = document.getElementById('root');
//  setTimeout(()=>{
//     if(!root.classList.contains('done')){
//      root.classList.add('done');
//      var flagAuto = 1;
//    }
// console.log(flagAuto);
//  },5 * 100);
// console.log(flagAuto);
// }



var flagAuto = 0;
document.body.onload = () => {
  let root = document.getElementById('root');
 setTimeout(()=>{
    if(!root.classList.contains('done')){
     root.classList.add('done');
     var flagAuto = 1;
   }
console.log(flagAuto);
 },5 * 100);
console.log(flagAuto);
}



setTimeout(() => {

  let cont = document.getElementById('content');
  let cont1 = document.getElementById('content1');
  let cont2 = document.getElementById('content2');
  let winHeight = document.documentElement.clientHeight;
  let height = winHeight + "px";

//  window.onload = () => { if(flagAuto === 1)
console.log("+1");
cont.style.height =  height;
cont1.style.height = height;
cont2.style.height = height;
}, 10);
