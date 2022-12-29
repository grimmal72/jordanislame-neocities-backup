const canvas = document.getElementById("scene");
const context = canvas.getContext("2d");
let img1 = new Image();
let img2 = new Image();

img1.src = 'img/greenery.jpg';
img2.src = 'img/car.png';

canvas.width = 900;
canvas.height = 550;

img2.onload = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    //draw background image
    context.drawImage(img1, 0, 0, canvas.width, canvas.height);

    context.drawImage(img2, xposition, yposition, 200, 160);
    if (xposition > 700) {
        return;
    }
    xposition = xposition + 3;
}

let xposition = 0;
let yposition = 400;



setInterval(img2.onload, 25)