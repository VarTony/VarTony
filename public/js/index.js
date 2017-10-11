
// var flag = 0;
// let audioWall = document.getElementById('audioWall');
// let audioContr = document.getElementById('smile');

  // audioContr.onclick = () => {
  //   if(flag === 0) audioWall.play();
  //     else audioWall.pause();
  //       return (flag === 0)? flag = 1 : flag = 0;
  //     }

    var flag = 0;
   let radioContr = document.getElementById('smile');
   let radio = document.getElementById('radiobells_container');
   let warning = document.getElementById('warning');
   radioContr.onclick = () => {
       if(flag === 0){
         document.getElementById("radiobells_container").style.display = "block";}

       else{ document.getElementById("radiobells_container").style.display = "none";
     }
      return (flag === 0)? flag = 1 : flag = 0;
      //  else{
      //   document.getElementById("radiobells_container").style.display = "none";
      //   document.getElementById("warning").style.display = "block";
      // }
   }
console.log('run')
