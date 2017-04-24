//js for circle challenge


//calculate circle area with radius
var rad = document.getElementById('r');
var clickButton = document.getElementById('button');
var circleImage = document.createElement('img');
var radius = rad.value;

function calcArea() {
  var radius = rad.value;
   console.log(Math.PI * (radius * radius));
   var answer = (Math.PI * (radius * radius)).toFixed();
   document.getElementById('areaResult').innerText = answer;
    //circleImage.setAttribute('src', 'images/basiccircle.png');
    //circleImage.width = answer;
    //document.body.appendChild(circleImage);

//canvas layer with image



//canvas area and drawing event PINKY

var canvas = document.getElementById('canvas1');
var context = canvas.getContext('2d');
var dragging = false;
    //canvas.addEventListener('mousedown', engage, false);
    //canvas.addEventListener('mousemove', touchPoint, false);
    //canvas.addEventListener('mouseup', disengage, false);
context.lineWidth = radius*2;


/*var gradient = context.createLinearGradient(0, 0, 170, 0);
      gradient.addColorStop("0", "red");
      gradient.addColorStop("0.25","orange");
      gradient.addColorStop("0.35", "yellow");
      gradient.addColorStop("0.50", "green");
      gradient.addColorStop("0.75", "blue");
      gradient.addColorStop("1", "indigo");*/

function touchPoint(e){
      if (dragging){
        context.lineTo(e.offsetX, e.offsetY);
        context.stroke();
        context.strokeStyle = "gray";
        context.beginPath()
        context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2 );
        context.fill();
        context.fillStyle = "gray";
        context.beginPath();
        context.moveTo(e.offsetX, e.offsetY);

      }
    }

var engage = function(e){
      dragging = true;
      touchPoint(e);
    }

var disengage = function(){
      dragging = false;
      context.beginPath();
    }

var clearButton = document.getElementById('buttonclr');
    function clearCanvas(){
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
clearButton.addEventListener('click', clearCanvas, false);
canvas.addEventListener('mousedown', engage, false);
canvas.addEventListener('mousemove', touchPoint, false);
canvas.addEventListener('mouseup', disengage, false);
}


clickButton.addEventListener('click', calcArea, false);
//window.addEventListener('load', draw, false);
