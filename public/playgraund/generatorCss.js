
const bradius = () => {
let yourCss = document.getElementById('yourCss');
var example = document.getElementById('example');
var w = document.getElementById('Wchange').value;
var h = document.getElementById('Hchange').value;
var rtc = document.getElementById('rtc').value;
var ltc = document.getElementById('ltc').value;
var rbc = document.getElementById('rbc').value;
var lbc = document.getElementById('lbc').value;
var example = document.getElementById('example');
example.style.borderRadius =  rtc + "px "  + ltc + "px "  + rbc + "px " + lbc + "px ";
example.style.width = `${w}px `;
example.style.height = `${h}px `;
yourCss.innerHTML = ` border-radius: ${rtc}px  ${ltc}px  ${rbc}px  ${lbc}px; \n`;
yourCss.innerHTML += ` width: ${w}px; \n`;
yourCss.innerHTML += ` height: ${h}px; `;
}


  let yourCss = document.getElementById('yourCss');
  var w = document.getElementById('Wchange').value;
  var h = document.getElementById('Hchange').value;
  var rtc = document.getElementById('rtc').value;
  var ltc = document.getElementById('ltc').value;
  var rbc = document.getElementById('rbc').value;
  var lbc = document.getElementById('lbc').value;

yourCss.innerHTML = ` border-radius: ${rtc}px  ${ltc}px  ${rbc}px  ${lbc}px; \n`;
yourCss.innerHTML += ` width: ${w}px; \n`;
yourCss.innerHTML += ` height: ${h}px; \n`;
yourCss1.innerHTML += ` background-color: #4c4282; `;



function changeColor(){
let example = document.getElementById('example');
  let random = (max = 12131217, min = 0) => Math.floor(Math.random() * (max - min)) + min;
  let colorCode = `#${random().toString(16)}`;
 example.style.backgroundColor = colorCode;
 yourCss1.innerHTML = ` background-color: ${colorCode}; `;

}
