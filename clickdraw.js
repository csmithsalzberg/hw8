//Caleb Smith-Salzberg
//SoftDev2 pd7
//k3
//2018-01-08

var c = document.getElementById("slate");
//slate is the canvas
var ctx = c.getContext("2d");
//create a 2d object that controls the stuff

var id;
var size;
var increment=1;
var x;
var y;
var dx;
var dy;

var stop = document.getElementById("s");
var mode = document.getElementById("m");
var dvd = document.getElementById("screensaver");

/*var draw = function(){
    ctx.beginPath();
    ctx.clearRect(0, 0, c.width, c.height); //clears screen
    ctx.fillStyle = "red";
    ctx.strokeStyle="red";
    //red
    ctx.arc(x, y, size, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    if (size + increment > 0){
	console.log("work");
	size += increment;
	id = window.requestAnimationFrame(draw);
    }
    else{
	changeMode();
	id = window.requestAnimationFrame(draw);
    }
}*/

var changeMode = function(){
    increment *= -1;
}
mode.addEventListener("click", changeMode);


var stopball = function(){
    if(id){
    window.cancelAnimationFrame(id); 
  }
}
stop.addEventListener("click", stopball);

var onClick = function(e){
    dx = Math.floor(Math.random()*5 + 1)
    dy = Math.floor(Math.random()*5 + 1)
    ctx.clearRect(0, 0, c.width, c.height); //clears screen
    x= e.offsetX;
    y= e.offsetY;
    size = 50;
    window.requestAnimationFrame(bounce);
}
c.addEventListener("click", onClick);


var startBounce = function(){
    dx = Math.floor(Math.random()*5 + 1)
    dy = Math.floor(Math.random()*5 + 1)
    ctx.clearRect(0, 0, c.width, c.height); //clears screen
    size = 50;
    x=c.width/2;
    y=c.height/2;
    window.requestAnimationFrame(bounce);
}
dvd.addEventListener("click", startBounce);


var bounce = function(){
    ctx.clearRect(0, 0, c.width, c.height); //clears screen
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.strokeStyle="red";
    ctx.arc(x, y, size, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    if(x+dx+size > 600 || x+dx-size < 0){
	dx*=-1;
    }
    x+=dx
    if(y+dy+size > 600 || y+dy-size < 0){
	dy*=-1;
    }
    y+=dy

    window.requestAnimationFrame(bounce);
}
