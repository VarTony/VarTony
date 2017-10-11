
var trigger = 0;

const Codelook = () => {
  var code1 = document.getElementById('code1');
  var app1 = document.getElementById('app1');
  var ic = document.getElementById('inputCommand').value;
  var helpTerm = document.getElementById('helpTerm');
  var command = document.getElementById('command');
  var titleTerm = document.getElementById('titleTerm');
  var particles = document.getElementById('particles-js');
  var backgroundFun = document.getElementById('backgroundFun');
  var vivi = document.getElementById('vivi');
  var hs = document.getElementById('hs');
  //---Hex---
  var degreeOfTriple = document.getElementById('degreeOfTriple');
  var isPerfect = document.getElementById('isPerfect');
  var sumSquareDifference = document.getElementById('sumSquareDifference');
  var DOTCode = document.getElementById('DOTCode');
  var IPCode = document.getElementById('IPCode');
  var SSDCode = document.getElementById('SSDCode');
  // let trueCommands = ("--help" || "-h" || "--back" || "-b" || "--Css generator" || "-cg" || '--Background fun' || '-bf' '--Sing me' || '-sm' || '--And stop' || '-as' || '--Stop fun' || '-sf' || 'gtashnick');
     console.log(typeof ic);

   if(ic.length > 0 ){
     document.onkeyup = function (e){
       if (e.keyCode === 13) {
      command.innerHTML += `\n${ic}: Команда не найдена. Cправка: -h `;
       document.getElementById('inputCommand').value = '';
   }}
 }


     if(ic === "--help" || ic === "-h" ){
       document.onkeyup = function (e){
         if (e.keyCode === 13) {
        titleTerm.style.display = 'none';
       helpTerm.style.display = 'block';
      document.getElementById('inputCommand').value = '';
    }}}

    if(ic === "--back" || ic === "-b" ){
      document.onkeyup = function (e){
        if (e.keyCode === 13) {
       titleTerm.style.display = 'block';
      helpTerm.style.display = 'none';
     document.getElementById('inputCommand').value = '';
   }}}

  //  if(ic === '-hs' || "--hacker style"){
  //    document.onkeyup = function (e){
  //      if (e.keyCode === 13) {
  //       var intervalHs = setInterval( ()=> {
  //     let random = (max = 12131217, min = 0) => Math.floor(Math.random() * (max - min)) + min;
  //     let colorCode = `#${random().toString(16)}`;
  //     hs.innerHTML += `${colorCode}`;
  //     document.getElementById('inputCommand').value = '';
  //   }, 250);
  //  }}
  //  }



     if(ic === "--Css generator" || ic === "-cg" ){
       document.onkeyup = function (e){
         if (e.keyCode === 13) {
      code1.style.display = 'none';
      app1.style.display = 'block';
      degreeOfTriple.style.display = 'none';
      DOTCode.style.display = 'none';
      isPerfect.style.display = 'none';
      IPCode.style.display = 'none';
      sumSquareDifference.style.display = 'none';
      SSDCode.style.display = 'none';
      document.getElementById('inputCommand').value = '';
      return trigger = 0;
    }}}

    if(ic === "--DegreeOfTriple" || ic === "-dot" ){
      document.onkeyup = function (e){
        if (e.keyCode === 13) {
     code1.style.display = 'none';
     app1.style.display = 'none';
     degreeOfTriple.style.display = 'block';
     DOTCode.style.display = 'none';
     isPerfect.style.display = 'none';
     IPCode.style.display = 'none';
     sumSquareDifference.style.display = 'none';
     SSDCode.style.display = 'none';
     document.getElementById('inputCommand').value = '';
     return trigger = 1;
   }}}


   if(ic === '--isPerfect'  || ic === "-ip" ){
     document.onkeyup = function (e){
       if (e.keyCode === 13) {
    code1.style.display = 'none';
    app1.style.display = 'none';
    degreeOfTriple.style.display = 'none';
    DOTCode.style.display = 'none';
    isPerfect.style.display = 'block';
    IPCode.style.display = 'none';
    sumSquareDifference.style.display = 'none';
    SSDCode.style.display = 'none';
    document.getElementById('inputCommand').value = '';
    return trigger = 2;
   }}}

   if(ic === "--sumSquareDifference" || ic === "-ssd" ){
     document.onkeyup = function (e){
       if (e.keyCode === 13) {
    code1.style.display = 'none';
    app1.style.display = 'none';
    degreeOfTriple.style.display = 'none';
    DOTCode.style.display = 'none';
    isPerfect.style.display = 'none';
    IPCode.style.display = 'none';
    sumSquareDifference.style.display = 'block';
    SSDCode.style.display = 'none';
    document.getElementById('inputCommand').value = '';
    return trigger = 3;
  }}}


    if(ic === '--Background fun' || ic === '-bf'){
      document.onkeyup = function (e){
        if (e.keyCode === 13) {
       console.log(typeof 121);
      particles.style.display = 'none';
      vivi.src = 'https://www.youtube.com/embed/xnku4o3tRB4?controls=0&amp;showinfo=0;autoplay=1';
      document.getElementById('inputCommand').value = '';
        }
  }}

  if(ic === '--Sing me' || ic === '-sm'){
    document.onkeyup = function (e){
      if (e.keyCode === 13) {
        console.log('singing');
    document.getElementById('inputCommand').value = '';
          rad_loadmusic();
       }
}}

if(ic === '--And stop' || ic === '-as'){
  document.onkeyup = function (e){
    if (e.keyCode === 13) {
      console.log('singing');
  document.getElementById('inputCommand').value = '';
       g_audio.pause();
     }
}}



  if(ic === '--Stop fun' || ic === '-sf'){
    document.onkeyup = function (e){
      if (e.keyCode === 13) {
    particles.style.display = 'block';
    vivi.src = '';
    document.getElementById('inputCommand').value = '';
  }}}


  if(ic === 'gtashnick'){
    document.onkeyup = function (e){
      if (e.keyCode === 13) {
    particles.style.display = 'none';
    vivi.src = 'https://www.youtube.com/embed/3sdFkXDR7S0?controls=0&amp;showinfo=0&amp;start=53;autoplay=1';
      document.getElementById('inputCommand').value = '';
  }}
}
}

const buttonControler = () => {
  console.log('4');
  let degreeOfTriple = document.getElementById('degreeOfTriple');
  let isPerfect = document.getElementById('isPerfect');
  let sumSquareDifference = document.getElementById('sumSquareDifference');
  let DOTCode = document.getElementById('DOTCode');
  let IPCode = document.getElementById('IPCode');
  let SSDCode = document.getElementById('SSDCode');
  let code1 = document.getElementById('code1');
  let app1 = document.getElementById('app1');
  let codeButton = document.getElementById('codeButton');
  let runButton = document.getElementById('runButton');

   if(codeButton.style.display === 'none'){

      codeButton.style.display = 'inline';
      runButton.style.display = 'none';

      if(trigger === 0){
        app1.style.display = 'block';
        code1.style.display = 'none';
        degreeOfTriple.style.display = 'none';
        DOTCode.style.display = 'none';
        isPerfect.style.display = 'none';
        IPCode.style.display = 'none';
        sumSquareDifference.style.display = 'none';
        SSDCode.style.display = 'none';
      }
      if(trigger === 1){
        code1.style.display = 'none';
        app1.style.display = 'none';
        degreeOfTriple.style.display = 'block';
        DOTCode.style.display = 'none';
        isPerfect.style.display = 'none';
        IPCode.style.display = 'none';
        sumSquareDifference.style.display = 'none';
        SSDCode.style.display = 'none';
      }
      if(trigger === 2){
        app1.style.display = 'none';
        code1.style.display = 'none';
        degreeOfTriple.style.display = 'none';
        DOTCode.style.display = 'none';
        isPerfect.style.display = 'block';
        IPCode.style.display = 'none';
        sumSquareDifference.style.display = 'none';
        SSDCode.style.display = 'none';
      }
      if(trigger === 3){
        app1.style.display = 'none';
        code1.style.display = 'none';
        degreeOfTriple.style.display = 'none';
        DOTCode.style.display = 'none';
        isPerfect.style.display = 'none';
        IPCode.style.display = 'none';
        sumSquareDifference.style.display = 'block';
        SSDCode.style.display = 'none';
      }
      console.log('8');
}else{
   codeButton.style.display = 'none';
   runButton.style.display = 'inline';
   console.log('17');
   if(trigger === 0){
     app1.style.display = 'none';
     code1.style.display = 'block';
     degreeOfTriple.style.display = 'none';
     DOTCode.style.display = 'none';
     isPerfect.style.display = 'none';
     IPCode.style.display = 'none';
     sumSquareDifference.style.display = 'none';
     SSDCode.style.display = 'none';
   }
   if(trigger === 1){
     app1.style.display = 'none';
     code1.style.display = 'none';
     degreeOfTriple.style.display = 'none';
     DOTCode.style.display = 'block';
     isPerfect.style.display = 'none';
     IPCode.style.display = 'none';
     sumSquareDifference.style.display = 'none';
     SSDCode.style.display = 'none';
   }
   if(trigger === 2){
     app1.style.display = 'none';
     code1.style.display = 'none';
     degreeOfTriple.style.display = 'none';
     DOTCode.style.display = 'none';
     isPerfect.style.display = 'none';
     IPCode.style.display = 'block';
     sumSquareDifference.style.display = 'none';
     SSDCode.style.display = 'none';
   }
   if(trigger === 3){
     app1.style.display = 'none';
     code1.style.display = 'none';
     degreeOfTriple.style.display = 'none';
     DOTCode.style.display = 'none';
     isPerfect.style.display = 'none';
     IPCode.style.display = 'none';
     sumSquareDifference.style.display = 'none';
     SSDCode.style.display = 'block';
   }
}
}
