//степень тройки;

const degreeOfTriple = (n, i = 0, answer = n) => {

  if (n <= 3) return (3 % n === 0) ? true : false;

   while(i <= n / 2) {
     i ++;
     answer = answer / 3;
     if(answer === 3) return true;
   }

    return false;


}


////////////////////Совершенные числа;

// BEGIN (write your solution here) (write your solution here)
 const isPerfect = (number, i = 0, check = number) => {

  let answer;
  if(number === 0) return false;

  while( check >= 0){
    (number % check === 0 && check !== number)? i += check: i;
    check--;

  }

  if(i === number) answer = true;
  if(i !== number) answer = false;

      return answer;
 }
// END


//////////////Разница между суммой квадратов и квадратом суммы.
const sqrt = n => (n * n);


  const sumSquareDifference = (n) => {

     let n0 = 0;
     let n1 = 0;

     for(let i = 0; i <= n; i++){
       n0 += sqrt(i);
       n1 += i;

     }
     return (sqrt(n1) < n0)? n0 - sqrt(n1):  (sqrt(n1) - n0);

  }


// END



const DOT = () =>{
  document.onkeyup = function (e){
    if (e.keyCode === 13) {
  let dotAnswer = document.getElementById('dotAnswer');
  let dotInput = document.getElementById('dotInput').value;
  let x =  +dotInput;
    dotAnswer.style.fontSize = '20px';
    dotAnswer.innerHTML =  `${degreeOfTriple(x)}`;
    document.getElementById('dotInput').value = '';
}}
}

const SSD = () =>{
  document.onkeyup = function (e){
    if (e.keyCode === 13) {
  let ssdAnswer = document.getElementById('ssdAnswer');
  let ssdInput = document.getElementById('ssdInput').value;
  let x =  +ssdInput;
    ssdAnswer.style.fontSize = '20px';
    ssdAnswer.innerHTML =  `${sumSquareDifference(x)}`;
    document.getElementById('ssdInput').value = '';
}}
}

const IP = () =>{
  document.onkeyup = function (e){
    if (e.keyCode === 13) {
  let ipAnswer = document.getElementById('ipAnswer');
  let ipInput = document.getElementById('ipInput').value;
  let x =  +ipInput;
    ipAnswer.style.fontSize = '20px';
    ipAnswer.innerHTML =  `${isPerfect(x)}`;
    document.getElementById('ipInput').value = '';

}}
}
