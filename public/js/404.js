//{backgroundColor: '#312231', opacity: 0.5}

 var pjs = new PointJS('2d', 1000, 1000, {opacity: 0.71});
   var myStyle = pjs.system.setStyle();
 pjs.system.initFullPage();
 var game = pjs.game;
 var point = pjs.vector.point;

 var height = game.getWH().h;
 var width = game.getWH().w;

 var moon = game.newImageObject({
  x : 50, y : 35,
  file : './sprites/moon.png',
 //  h : height,
  w: 150,
    h : 150
 });



 var cloud = game.newImageObject({
  x : 300, y : 50,
  file : './sprites/Cloud.png',
 //  h : height,
  w: 450,
    h : 150
 });

 var fuji = game.newImageObject({
  x : 50, y : 35,
  file : './sprites/fuji2.png',
 //  h : height,
  w: 1300,
    h : 550
 });

 var cloud2 = game.newImageObject({
  x : 50, y : 105,
  file : './sprites/cloud2.png',
 //  h : height,
  w: 300,
    h : 150
 });

 var fon1 = game.newImageObject({
  x : 0, y : 280,
  file : './sprites/city.png',
 //  h : height,
  w: 1400,
    h : 300,
  onload : function () {
    fon2.x = fon1.x+fon1.w;
  }
 });

 var fon2 = game.newImageObject({
  x : 0, y : 280,
  file : './sprites/city.png',
 //  h : height
w: 1400,
 h : 300
 });

 var gr1 = game.newImageObject({
  x : 0, y : 0,
  file : './sprites/background1.png',
  w : width,
  onload : function () {
    gr2.y = gr1.y = height - gr1.h + 50;
    gr2.x = gr1.x+gr1.w;
  }
 });

 var gr2 = game.newImageObject({
  x : 0, y : 0,
  file : './sprites/background1.png',
  w : width
 });
var dogW = 105;
var dogH = 168;
 var dog = game.newAnimationObject({
   x : width / 4, y : 450,
   h: 126, w: 125,
   delay : 3,
   animation : pjs.tiles.newAnimation('./sprites/run.png', 149, 126, 8)
 });

 var danceHandUp = game.newAnimationObject({
   x :  15, y : 500,
   h : 106, w : 100,
   delay : 5,
   animation : pjs.tiles.newAnimation('./sprites/danceHandUp.png', 110, 100, 8)
 });

 var danceHandUp1 = game.newAnimationObject({
   x : (width / 3) + 57, y : 500,
   h : 106, w : 100,
   delay : 8,
   animation : pjs.tiles.newAnimation('./sprites/danceHandUp.png', 110, 100, 8)
 });
 var dancebreak = game.newAnimationObject({
   x : (width / 2) + 128, y : 520,
   h : 106, w : 100,
   delay : 3,
   animation : pjs.tiles.newAnimation('./sprites/breakdance.png', 110, 100, 8)
 });

 var moveBackGround = function (s) {
   cloud.move(point(-s * 0.1, 0));
   cloud2.move(point(-s * 0.2, 0));

   fon1.move(point(-s / 3.5, 0));
   fon2.move(point(-s / 3.5, 0));

   gr1.move(point(-s, 0));
   gr2.move(point(-s, 0));

   if (cloud.x + cloud.w < 0) {
     cloud.x = cloud2.x+cloud2.w + width;
   }

   if (cloud2.x + cloud2.w < 0) {
     cloud2.x = cloud.x+cloud.w + width;
}
   if (fon1.x + fon1.w < 0) {
     fon1.x = fon2.x+fon2.w;
   }

   if (fon2.x + fon2.w < 0) {
     fon2.x = fon1.x+fon1.w;
   }

   if (gr1.x + gr1.w < 0) {
     gr1.x = gr2.x+gr2.w;
   }

   if (gr2.x + gr2.w < 0) {
     gr2.x = gr1.x+gr1.w;
   }

 };

 game.newLoop('game', function () {
   game.fill('#312231' );
   moon.draw();
   cloud.draw();
   fuji.draw();
   cloud2.draw();
   fon1.draw();
   fon2.draw();
   gr1.draw();
   gr2.draw();

   dog.y = -dog.h + gr1.y + gr1.h /2.7;
   dog.draw();
 //  danceHandUp.draw();
 //  danceHandUp1.draw();
 //  dancebreak.draw();
   moveBackGround(5);

 });

 game.startLoop('game');



//      const  pointJS = new PointJS(1400, 1200, {backgroundColor: 'white'});
//           const game = pointJS.game;
//
//               let  ninjaWGo = 1100 / 8;
//
//           var ninga = game.newAnimationObject({
//            x: 0, y: 0,
//            h: 108, w :  ninjaWGo,
//            delay: 5,
//            animation : pointJS.tiles.newAnimation('./sprites/runingSprite.png', 108, ninjaWGo, 9)
// });
//
//           //
//           // let rect = game.newRectObject({
//           //   x: 500, y: 300,
//           //   w:300, h: 110,
//           //   fillColor: "white"
//           // });
//
//           game.newLoop("ningaGo", () => {
//               ninga.draw();
//
//   });

// game.setLoop('ningaGo');
// game.start();
