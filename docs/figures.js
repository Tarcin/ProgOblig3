//SVG FUNCTIONS
function circleSVG(radius, fillmode, color){
var image = document.createElementNS("http://www.w3.org/2000/svg", "circle");
image.setAttribute("r", radius);
if(fillmode == "outline"){
    image.setAttribute("stroke", color);
} else if(fillmode == "solid") {
    image.setAttribute("fill", color);
}
return image;
}

function rectangleSVG(width, height, fillmode, color){
var image = document.createElementNS("http://www.w3.org/2000/svg", "rect");
image.setAttribute("width", width);
image.setAttribute("height", height);
if(fillmode == "outline"){
    image.setAttribute("stroke", color);
} else if(fillmode == "solid") {
    image.setAttribute("fill", color);
}
return image;
}
  
function overlayXYsvg(img2, x, y, img1) {
//img2 is overlaid on top of img1 at coordinates
img2.appendChild(img1)
  if(img1.tagName == "circle"){
    img1.setAttribute("cx", x);
    img1.setAttribute("cy", y);
  } else if(img1.tagName == "rect"){
    img1.setAttribute("x", x);
    img1.setAttribute("y", y);
  }
}

//CANVAS FUNCTIONS
function circle(radius, fillmode, color){
    var canvas = document.createElement("canvas");
    canvas.width = (radius*2)+5;
    canvas.height = (radius*2)+5;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(radius+2, radius+2, radius, 0, 2 * Math.PI);
    if (fillmode == "solid"){
        ctx.fillStyle = color;
        ctx.fill();
    } else if (fillmode == "outline"){
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    return canvas;
}

function rectangle(width, height, fillmode, color){
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.rect(0, 0, width, height);
    if (fillmode == "solid"){
        ctx.fillStyle = color;
        ctx.fill();
    } else if (fillmode == "outline"){
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    return canvas;
}


function overlayXY(img2, x, y, img1){
    img2.drawImage(img1, x, y);
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const centerX = canvas.width/2;
const centerY = canvas.height/2; 
var temp = rectangle(60, 60, "solid", "yellow");
overlayXY(ctx, centerX - (temp.width/2), centerY - (temp.height/2), temp);
temp = rectangle(50, 50, "solid", "green");
overlayXY(ctx, centerX - (temp.width/2), centerY - (temp.height/2), temp);
temp = rectangle(40, 40, "solid", "red");
overlayXY(ctx, centerX - (temp.width/2), centerY - (temp.height/2), temp);
temp = rectangle(30, 30, "solid", "blue")
overlayXY(ctx, centerX - (temp.width/2), centerY - (temp.height/2), temp);
temp = rectangle(20, 20, "solid", "black")
overlayXY(ctx, centerX - (temp.width/2), centerY - (temp.height/2), temp);
temp = circle(100, "outline", "black");
overlayXY(ctx, centerX - (temp.width/2), centerY - (temp.height/2), temp);



/*var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

overlayXY(ctx, canvas.height / 2, canvas.height / 2, circle(30, "solid", "black"));
overlayXY(ctx, (canvas.height / 2) - 40, (canvas.height / 2) - 40, circle(30, "solid", "green"));
overlayXY(ctx, (canvas.height / 2) + 40, (canvas.height / 2) + 40, circle(30, "solid", "red"));
overlayXY(ctx, (canvas.height / 2) - 40, (canvas.height / 2) + 40, circle(30, "solid", "blue"));
overlayXY(ctx, (canvas.height / 2) + 40, (canvas.height / 2) - 40, circle(30, "solid", "yellow"));*/
