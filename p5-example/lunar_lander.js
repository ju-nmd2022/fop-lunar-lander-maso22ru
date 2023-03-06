/* 
Lunar lander game, made for the course "foundation of programming" at JU.

Needs to include:
- a start screen
- the actual game
- a result screen
- able to restart the game
- control the thruster with space , up or down key
- velocity not linear


"The lactoseintolerant hippo, "Gassy Gaston", have just left the
 "Milkyway MilkBar" and needs your help to get home safely. 
 Help him to land smooth and easy on his own moon"

*/

let hippoColour;
function setup() {
    createCanvas(800, 600);
    background(40);
    hippoColour = color(111, 36, 61);
}



const signText = "MILKYWAY MILKBAR";

let hS = 0.2; //hippoScale
let mBS = 0.4; //theMilkBarScale
let lMS = 0.4; //theLandingMoonScale
let moonSize  = 600 * lMS; 

let x = 200;
let y = 200;


//the diffrent objects

function theLandingMoon(x, y) {
    strokeWeight(1 * lMS);
    fill(150);

    let moonTop = y + (50 * lMS) - (moonSize * 0.5);
    ellipse(x, y + 50 * lMS, moonSize);

    //delete later, check if moon top is moon top
    fill(255, 0, 0);
    ellipse(x, moonTop, 10);

    arc(x + 65 * lMS, y - 30 * lMS, 120 * lMS, 30 * lMS, 0, PI);
    fill(130);
    ellipse(x + 65 * lMS, y - 50 * lMS, 90 * lMS, 30 * lMS);
    ellipse(x - 120 * lMS, y - 150 * lMS, 90 * lMS, 30 * lMS);
    noFill();
    arc(x - 120 * lMS, y - 120 * lMS, 150 * lMS, 30 * lMS, 0, PI);

    arc(x - 220 * lMS, y - 20 * lMS, 50 * lMS, 10 * lMS, 0.7, PI);
    arc(x - 80 * lMS, y + 170 * lMS, 50 * lMS, 10 * lMS, PI, 0.7);

    ellipse(x + 150 * lMS, y - 150 * lMS, 10 * lMS);
    ellipse(x + 140 * lMS, y - 170 * lMS, 7 * lMS);

    ellipse(x - 160 * lMS, y + 230 * lMS, 10 * lMS);
    ellipse(x - 140 * lMS, y + 250 * lMS, 7 * lMS);

    noStroke();
    fill(130);
    ellipse(x, y, 50 * lMS, 20 * lMS);
    ellipse(x + 30 * lMS, y + 20 * lMS, 80 * lMS, 20 * lMS);
    ellipse(x - 5 * lMS, y + 12 * lMS, 70 * lMS, 30 * lMS);
    ellipse(x + 160 * lMS, y + 80 * lMS, 120 * lMS, 50 * lMS);
    ellipse(x + 190 * lMS, y + 100 * lMS, 120 * lMS, 50 * lMS);
    ellipse(x - 200 * lMS, y - 50 * lMS, 120 * lMS, 30 * lMS);
    ellipse(x - 180 * lMS, y - 60 * lMS, 120 * lMS, 20 * lMS);
    ellipse(x + 150 * lMS, y - 100 * lMS, 100 * lMS, 20 * lMS);
    ellipse(x - 160 * lMS, y + 130 * lMS, 120 * lMS, 50 * lMS);
    ellipse(x - 190 * lMS, y + 150 * lMS, 120 * lMS, 50 * lMS);

    return {
        x: x,
        y: moonTop
    };
}


function theMilkBar(x, y) {
    //planet cliff
    strokeWeight(1);
    fill(255, 121, 184);
    arc(x, y , 400 * mBS, 400 * mBS, 0, PI);
    fill(239, 39, 118);
    ellipse(x, y, 400 * mBS, 50 * mBS);

    //sign
    //stick
    fill(255);
    noStroke();
    ellipse(x - 100 * mBS, y, 10 * mBS, 5 * mBS);
    rect(x - 105 * mBS, y - 80 * mBS, 10 * mBS, 80 * mBS);
    //plate
    fill(255);
    rect(x - 195 * mBS, y - 140 * mBS, 200 * mBS, 60 * mBS);
    triangle(x - 240 * mBS, y - 110 * mBS, x - 195 * mBS, y - 140 * mBS, x - 195 * mBS, y - 80 * mBS);

    fill(0);
    textSize(18 * mBS);
    text(signText, x - 180 * mBS, y - 105 * mBS);


}


function hippo(x, y, rotation) {
    push();
    
    rotate(rotation);
    
    
    //BODY
    fill(0);
    ellipse(x + 30 * hS, y + 200 * hS, 255 * hS);
    beginShape();
    vertex(x + 30 * hS, y - 30 * hS);
    bezierVertex(x - 200 * hS, y + 300 * hS, x + 260 * hS, y + 300 * hS, x + 30 * hS, y - 30 * hS);
    endShape();
    noStroke();
    fill(hippoColour);
    ellipse(x + 30 * hS, y + 200 * hS, 250 * hS);
    beginShape();
    vertex(x + 30 * hS, y - 30 * hS);
    bezierVertex(x - 200 * hS, y + 300 * hS, x + 260 * hS, y + 300 * hS, x + 30 * hS, y - 30 * hS);
    endShape();

    fill(0);
    ellipse(x - 10 * hS, y + 110 * hS, 5 * hS);
    ellipse(x + 60 * hS, y + 110 * hS, 5 * hS);
    //arms
    stroke(0);
    strokeWeight(2 * hS);
    fill(hippoColour);
    beginShape();
    vertex(x + 70 * hS, y + 50 * hS);
    vertex(x + 180 * hS, y + 50 * hS);
    bezierVertex(x + 200 * hS, y + 50 * hS,  x + 210 * hS, y + 100 * hS, x + 70 * hS, y + 85 * hS);
    endShape();

    beginShape();
    vertex(x - 10 * hS, y + 50 * hS);
    vertex(x - 120 * hS, y + 50 * hS);
    bezierVertex(x - 140 * hS, y + 50 * hS,  x - 150 * hS, y + 100 * hS, x - 10 * hS, y + 85 * hS);
    endShape();
    //legs
    beginShape();
    vertex(x - 70 * hS, y + 270 * hS);
    vertex(x - 20 * hS, y + 350 * hS);
    vertex(x + 10 * hS, y + 350 * hS);
    vertex(x + 20 * hS, y + 300 * hS);
    endShape();

    beginShape();
    vertex(x + 130 * hS, y + 270 * hS);
    vertex(x + 80 * hS, y + 350 * hS);
    vertex(x + 50 * hS, y + 350 * hS);
    vertex(x + 40 * hS, y + 300 * hS);
    endShape();

    fill(0);
    let leftFootX = x - 5 * hS;
    let leftFootY = y + 351 * hS;
    ellipse(leftFootX, leftFootY, 30 * hS, 3 * hS);
    ellipse(x + 65 * hS, y + 351 * hS, 30 * hS, 3 * hS);
    //ears
    fill(hippoColour);
    beginShape();
    vertex(x, y - 80 * hS);
    vertex(x - 10 * hS, y - 90 * hS);
    bezierVertex(x - 20 * hS, y - 100 * hS, x - 30 * hS, y - 110 * hS, x - 20 * hS, y - 120 * hS);
    vertex(x - 20 * hS, y - 120 * hS);
    bezierVertex(x - 10 * hS, y - 120 * hS, x + 10 * hS, y - 110 * hS, x, y - 90 * hS);
    endShape();

    beginShape();
    vertex(x + 60 * hS, y - 80 * hS);
    vertex(x + 50 * hS, y - 90 * hS);
    bezierVertex(x + 60 * hS, y - 100 * hS, x + 50 * hS, y - 110 * hS, x + 60 * hS, y - 120 * hS);
    vertex(x + 60 * hS, y - 120 * hS);
    bezierVertex(x + 70 * hS, y - 120 * hS, x + 90 * hS, y - 110 * hS, x + 60 * hS, y - 90 * hS);
    endShape();
    //head
    fill(hippoColour);
    ellipse(x + 30 * hS, y - 60 * hS, 100 * hS, 80 * hS);
    //nose
    noStroke();
    fill(0);
    ellipse(x, y, 105 * hS);
    ellipse(x + 60 * hS, y, 105 * hS);
    ellipse(x + 60 * hS, y - 42 * hS, 30 * hS, 35 * hS);
    ellipse(x, y - 42 * hS, 30 * hS, 35 * hS);
    fill(hippoColour);
    ellipse(x, y, 100 * hS);
    ellipse(x + 60 * hS, y, 100 * hS);
    ellipse(x + 60 * hS, y - 42 * hS, 25 * hS, 30 * hS);
    ellipse(x, y - 42 * hS, 25 * hS, 30 * hS);
    fill(0);
    ellipse(x + 60 * hS, y - 44 * hS, 10 * hS, 17 * hS);
    ellipse(x, y - 44 * hS, 10 * hS, 17 * hS);
    // whiskers
    ellipse(x - 20 * hS, y - 5 * hS, 4 * hS);
    ellipse(x - 32 * hS, y, 4 * hS);
    ellipse(x - 25 * hS, y + 10 * hS, 4 * hS);
    ellipse(x + 80 * hS, y - 5 * hS, 4 * hS);
    ellipse(x + 92 * hS, y, 4 * hS);
    ellipse(x + 85 * hS, y + 10 * hS, 4 * hS);
    //eyes
    fill(255);
    ellipse(x + 15 * hS, y - 75 * hS, 15 * hS, 25 * hS);
    ellipse(x + 45 * hS, y - 75 * hS, 15 * hS, 25 * hS);
    fill(0);
    ellipse(x + 15 * hS, y - 75 * hS, 10 * hS);
    ellipse(x + 45 * hS, y - 75 * hS, 10 * hS);

    //astronaut hat
    stroke(0);
    fill(120, 80);
    ellipse(x + 30 * hS, y - 40 * hS, 220 * hS);
    pop();

    return {
        leftFoot: {
            x: leftFootX,
            y: leftFootY
        }
    };
}


function meteor(x, y) {
    //meteor
    fill(195, 152, 152);
    stroke(0);
    ellipse(x, y, 60);
    ellipse(x + 5, y + 10, 20, 10);
    ellipse(x + 18, y - 5, 7, 3);
}


//The diffrent screens

function buttonStartTheGame(x, y, w, h) {
    fill(255);
    rect(x - 10, y - 10, w + 20, h + 20, 20);
    fill(70, 150, 40);
    rect(x, y, w, h, 20);
    fill(0);
    textSize(12);
    text("START THE GAME", x + w * 0.25 , y + h *0.55);

}

function startScreen() {
    background(0);
    fill(255);
    textSize(15);
    text("Help the Lactose intolerante Hippo to land on the moon!", 150 , 100);
    text("You must land with a speed UNDER 40km/h", 150, 140);
    text("Move the Hippo with the arrows. Up gives more gas", 150, 180);

    // textSize(12);
    // text("I have just been to the Milkyway Milkshakebar and slayed a couple gallons of strawberry milkshake.", 50, 400);
    // text("Unfortunally I am lactose intolerante.. I feel the bubbles are starting to build up.. ", 50, 420);
    // text("Help me get back safetly to my moon.. PLEASE!", 50, 440);

    buttonStartTheGame(width * 0.3, height * 0.5, 200, 60);

}

function gameScreen() {
    background(40);
    textSize(12);
    const kmh = Math.floor(velocity + speed) * 10;
    //hastighets räknare
    text("velocity: " + kmh + " km/h", 20, 20);  

    let moonPosition = theLandingMoon(moonX, moonY);

    theMilkBar(milkX, milkY);
    
    let footPosition = hippo(hippoX, hippoY, 0);

    meteor(meteorX, meteorY);
    meteorX = meteorX - 1;
    meteorY = meteorY + 1;
    
    moonX = moonX + direction;
    if (moonX < 0 || moonX > width) {
        direction = direction * - 1; 
    }

    hippoY = hippoY + velocity;
    velocity = velocity + acceleration;

    if ((footPosition.leftFoot.y + 10 > moonPosition.y && footPosition.leftFoot.y - 10 < moonPosition.y) && 
    (footPosition.leftFoot.x + 10 >  moonPosition.x && footPosition.leftFoot.x - 10 < moonPosition.x)) { 
        console.log("velocity" + velocity);
        console.log("moon:" + moonPosition.x + "," + moonPosition.y);
        console.log("foot:" + footPosition.leftFoot.x + "," + footPosition.leftFoot.y); 
        velocity = 0;   
        speed = 0;
        acceleration = 0;  
        direction = 0;

        if (kmh > 40) {
            win = false;
        } else {
            win = true;
        }
        
        state = "result"; 

    }

    
    //movement of the hippo with the keys
    if (keyIsDown(37)) {
        hippoX = hippoX - speed;
    } else if (keyIsDown(39)) {
        hippoX = hippoX + speed;
    }
    if (keyIsDown(38)) {
        velocity = 0;
        hippoY = hippoY - speed; 
    }
    //  else if (keyIsDown(40)) {
    //     hippoY = hippoY + speed;
    //     velocity = velocity - 0.8;
    // }

}

function resultScreen() {
    background(255);
    text(win ? "You won!" : "You lost!", 150, 200);
}

let hippoX = 70; 
let hippoY = 30;
let moonX = 200;
let moonY = 370;
let milkX = 110;
let milkY = 130;
let meteorX = 500;
let meteorY = 0;

let speed = 2;
let direction = -1;

let velocity = 0.6;
let acceleration = 0.2;

let state = "start";

let win = false;


function draw () {

    if (mouseIsPressed && mouseX > width * 0.3 && mouseX < (width * 0.3) + 200 && mouseY > height * 0.5 && mouseY < (height * 0.5) + 60) {

       state = "game";
    }




    if (state === "start") {
        startScreen();
    } else if (state === "game") {
        gameScreen();
    } else if(state === "result") {
        resultScreen();
    }
}