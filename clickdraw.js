//Caleb Smith-Salzberg
//SoftDev2 pd7
//k3
//2018-01-08

var stop = document.getElementById("s");
var growth = document.getElementById("size");
var dvd = document.getElementById("screensaver");
var r = 50;
var increment = 1;
var dx;
var dy;
var x = 250;
var y = 250;
var animate = true;

var container = document.getElementById("vimage");

var stoprun = function(e){
    if(id){
	window.cancelAnimationFrame(id); 
    }
    container.innerHTML=''; //clears screen
    animate = true;
}
stop.addEventListener("click", stoprun);

var circleMaker = function(){
    if (animate){
	circler();
    }
}

var circler = function(){
    animate = false;
    if (r == 200 || r == 0){
	    increment *= -1;
    }
    r += increment;
    container.innerHTML=''; //clears screen
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", 250);
    c.setAttribute("cy", 250);
    c.setAttribute("fill", "red");
    c.setAttribute("r", r);
    container.appendChild(c);
    id = window.requestAnimationFrame(circler);
};

var startBounce = function(){
    if (animate){
	dx = Math.floor(Math.random()*5 + 1)
	dy = Math.floor(Math.random()*5 + 1)
    	window.requestAnimationFrame(bounce);
    }
}



var bounce = function(){
    animate = false;
    container.innerHTML=''; //clears screen
    if(x+dx+200 > 500 || x+dx < 0){
	dx*=-1;
    }
    x+=dx
    if(y+dy+102 > 500 || y+dy < 0){
	dy*=-1;
    }
    y+=dy

    var c = document.createElementNS("http://www.w3.org/2000/svg", "image");
    c.setAttribute("height", 100);
    c.setAttribute("width", 100);
    c.setAttribute("x", x);
    c.setAttribute("y", y);
    c.setAttribute("href", "dvd.png");
    c.setAttribute("height", 102);
    c.setAttribute("width", 200);
    container.appendChild(c);
    
    id = window.requestAnimationFrame(bounce);
}

stop.addEventListener("click", stoprun);
growth.addEventListener("click", circleMaker);
dvd.addEventListener("click", startBounce);

