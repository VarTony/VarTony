

document.body.onload = () => {

  setTimeout(function(){
   var preloader = document.getElementById("root");
   if(!preloader.classList.contains('done')){
     preloader.classList.add('done');
   }
  })
}

const random = (max = 5, min = 0) => Math.floor(Math.random() * (max - min)) + min;

        console.log(`${random()}`);

        switch (random()) {
          case 0: document.getElementById("quotes").style.display = "inline";
            break;
            case 1: document.getElementById("quotes1").style.display = "inline";
              break;
              case 2: document.getElementById("quotes2").style.display = "inline";
                break;
                case 3: document.getElementById("quotes3").style.display = "inline";
                  break;
                  case 4: document.getElementById("quotes4").style.display = "inline";
                    break;
                    case 5: document.getElementById("quotes5").style.display = "inline";
                      break;
          default: console.log(`Упс, в переключателе, что-то пошло не так... ${random()}`);
        }
