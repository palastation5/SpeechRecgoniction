var x = 0;
var y = 0;
var drawCircle = "";
var drawSquare = "";

var SpeechRecognition= window.webkitSpeechRecognition;


var recognition= new SpeechRecognition();
 function start() {
    document.getElementById("status").innerHTML = "o sistema está ouvindo pode falar";
    recognition.start();
 }

 recognition.onresult = function(event){
    console.log(event);
    var speechResult = event.results [0] [0].transcript; 
    document.getElementById("status").innerHTML = "a fala foi reconhecida como "+ speechResult;
    if (speechResult=="circle") {
      x = Math.floor(Math.random()*900);
      y = Math.floor(Math.random()*600);
      drawCircle = "ok";
      }
   if (speechResult=="square"){
      x = Math.floor(Math.random()*900);
      y = Math.floor(Math.random()*600);
      drawSquare = "ok";
   }
    }

    function setup() {
      canvas=createCanvas(900, 600);
    }
    function draw () {
      if (drawCircle=="ok"){
         fill("chartreuse");
         stroke("black");
         raio = Math.floor(Math.random()*100);
         circle(x, y, raio);
         drawCircle = "";
            }
       if (drawSquare=="ok"){
               fill("cornsilk");
               stroke("black");
               lados = Math.floor(Math.random()*100);
               rect(x, y, lados, lados);
               drawSquare = "";
                  }
    }
 
