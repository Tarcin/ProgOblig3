function circle(radius, fillmode, color){
const image = document.createElementNS("http://www.w3.org/2000/svg", "circle");
image.setAttribute("rx", radius);
image.setAttribute("cy", radius);
image.setAttribute("r", radius);
//circle.setAttribute("stroke", fillmode);
image.setAttribute("fill", color);
return image;
}
function overlayXY(img2, x, y, img1) {
//img2 is overlaid on top of img1
img1.setAttribute("x", x);
img1.setAttribute("y", y);
img2.appendChild(img1);
}
