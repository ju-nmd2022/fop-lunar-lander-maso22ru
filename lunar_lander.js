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


background(40);

// const hippoColour = color(51, 0, 25);
const hippoColour = color(111, 36, 61);



const signText = "MILKYWAY MILKBAR";

let hS = 0.2; //hippoScale
let mBS = 0.4; //theMilkBarScale
let lMS = 0.4; //theLandingMoonScale
let moonSize  = 600 * lMS; 

let x = 200;
let y = 200;



function theLandingMoon(x, y) {
    strokeWeight(1 * lMS);
    fill(150);
    ellipse(x, y + 50 * lMS, moonSize);

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


function hippo(x, y) {
    
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
    ellipse(x - 5 * hS, y + 351 * hS, 30 * hS, 3 * hS);
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
}


function meteor(x, y) {
    fill(255, 100, 50);
    ellipse(x, y, 60);
}


let hippoX = 200;
let hippoY = 200;
let moonX = 200;
let moonY = 200;
let milkX = 200;
let milkY = 200;
let meteorX = 500;
let meteorY = 0;

let direction = 1;

function draw () {

    background(40);
   
    theLandingMoon(moonX + 30, moonY + 170);

    theMilkBar(milkX - 90, milkY - 70 );

    hippo(hippoX - 60, hippoY - 143);

    // meteor(meteorX, meteorY);

    // meteorX = meteorX - 1;
    // meteorY = meteorY + 1;

    moonX = moonX + (4 * direction);

    if (moonX > width - 0.7 * moonSize) {
        direction = -1;
    }

    if (moonX < 0 + 0.4 * moonSize) {
        direction = 1;
    }
        
}

