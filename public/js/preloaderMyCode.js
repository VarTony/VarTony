

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








//
// let scripts            = document.scripts;
// let totalCountScripts  = scripts.lenght;
// let scriptsLoadedCount = 0;
// let root               = document.getElementById('root');
//
// for(let i = 0; i < totalCountScripts; i++){
//   scriptClone = new script();
//   scriptClone.onload  = scriptLoaded;
//   scriptClone.onerror = scriptLoaded;
//   scriptClone.src     = scripts[i].src;
// }
//
// const scriptLoaded = () => {
//    scriptsLoadedCount++;
//    console.log(((100 / totalCountScripts) * scriptsLoadedCount) << 0);
//   if(scriptsLoadedCount >= totalCountScripts){
//     setTimeout(()=>{
//        if(!root.classList.contains('done')){
//         root.classList.add('done');
//         let flagAuto = 1;
//       }
//     }, 100);
//    }
// }
