function buttonStartTheGame(x, y, w, h) {
    fill(255);
    rect(x - 10, y - 10, w + 20, h + 20, 10);
    fill(70, 150, 40);
    rect(x, y, w, h, 10);
    fill(0);
    textSize(12);
    text("START THE GAME", x + w * 0.25 , y + h *0.55);
}



function draw () {
    buttonStartTheGame(width * 0.3, height * 0.5, 200, 60);

    if (mouseIsPressed && mouseX > width * 0.3 && mouseX < (width * 0.3) + 200 && mouseY > height * 0.5 && mouseY < (height * 0.5) + 60) {

        console.log("mouse is pressed");
        // exemple state: game mode
        //video of the click 11 "create a button using logical operators"

    }
    }

//     //--1------------------------------------------------


//     function meteor(x, y, rotation) {
//         push();
//         translate(x, y);
//         rotate(rotation);
//         fill(255, 100, 50);
//         ellipse(x, y, 60);
//         ellipse(x + 5, y + 10, 20, 10);
//         ellipse(x + 18, y - 5, 7, 3);
//         pop();
//     }

// //     const speed = 5;
// //     let x = 200;
// //     let y = 200;
// //     function draw() {
// //         if (keyIsDown(37)) {
// //             x = x - speed;
// //         } else if (keyIsDown(39)) {
// //             x = x + speed;
// //         }
// //         if (keyIsDown(38)) {
// //             y = y - speed;
// //         } else if (keyIsDown(40)) {
// //             y = y + speed;
// //         }
// //         background(255);

// //         meteor(x, y);

// //     }


//     //--2----------------------------
// function car (x, y, rotation) {
//     push();
//     translate(x, y);
//     rotate(rotation);
//     fill(90);
//     rect(-50, -30, 100, 60);
//     fill(0);
//     rect(10, -25, 15, 50);
//     pop();
// }

// let x = 100;
// let y = 100;
// let rotation = 0;
// let speed = 0;

// function draw() {
//     background(255);
//     car(x, y, rotation);

//     x = x + Math.cos(rotation) * speed;
//     y = y + Math.sin(rotation) * speed;

//     if (keyIsDown(38)) {
//         speed = 5;
//     } else if (keyIsDown(40)) {
//         speed = -5;
//     } else {
//         speed = 0;
//     }

//     if (keyIsDown(37)) {
//         rotation = rotation -0.05;
//     } else if (keyIsDown(39)) {
//         rotation = rotation + 0.05;
//     }

// meteor(x, y, rotation);

// }

