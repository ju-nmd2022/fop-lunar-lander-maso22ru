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
 "Milkyway MilkshakeBar" and needs your help to get home safely. 
 Help him to land smooth and easy on his own moon"

*/

let hippoColour;
function setup() {
    createCanvas(800, 600);
    frameRate(30);
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
    // fill(255, 0, 0);
    // ellipse(x, moonTop, 10);

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

function hippoBroken(x, y) {
    push();

    let hS = 1; //hippoScale

   

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

    //broken arm
    push();
    noStroke();
    fill(255);
    rect(x + 90 * hS, y + 43 * hS, 120 * hS, 50 * hS, 20 * hS);
    rect(x + 160 * hS, y, 50 * hS, 90 * hS, 20 * hS);
    pop();

    //legs
    //broken leg
    push();
    fill(255);
    noStroke();
    beginShape();
    vertex(x - 70 * hS, y + 270 * hS);
    vertex(x - 20 * hS, y + 350 * hS);
    vertex(x + 10 * hS, y + 350 * hS);
    vertex(x + 20 * hS, y + 300 * hS);
    endShape();

    rect(x - 75 * hS, y + 330 * hS, 90 * hS, 45 * hS, 20 * hS);

    pop();

    beginShape();
    vertex(x + 130 * hS, y + 270 * hS);
    vertex(x + 80 * hS, y + 350 * hS);
    vertex(x + 50 * hS, y + 350 * hS);
    vertex(x + 40 * hS, y + 300 * hS);
    endShape();

    fill(0);
    // let leftFootX = x - 5 * hS;
    // let leftFootY = y + 351 * hS;
    // ellipse(leftFootX, leftFootY, 30 * hS, 3 * hS);
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
    //sad eyelids
    fill(hippoColour);
    ellipse(x + 15 * hS, y - 83 * hS, 20 * hS, 10 * hS);
    stroke(0);
    line(x + 23 * hS, y - 83 * hS, x + 7 * hS , y - 90 * hS);
    line(x + 38 * hS, y - 83 * hS, x + 52 * hS, y - 90 * hS);

    //astronaut hat
    stroke(0);
    fill(120, 80);
    ellipse(x + 30 * hS, y - 40 * hS, 220 * hS);
    //broken glass
    noFill();
    stroke(240);
    beginShape();
    vertex(x - 60 * hS, y - 100 * hS);
    vertex(x - 45 * hS, y - 70 * hS);
    vertex(x - 69 * hS, y - 60 * hS);
    vertex(x - 35 * hS, y - 50 * hS);
    vertex(x - 35 * hS, y - 40 * hS);
    endShape();
    line(x - 45 * hS, y - 70 * hS, x - 35 * hS, y - 90 * hS);
    line(x - 35 * hS, y - 90 * hS, x - 25 * hS, y - 90 * hS);
    
     //krycka
     push();
     noStroke();
     fill(141, 89, 20);
     rect(x + 155 * hS, y + 105 * hS, 15 * hS, 270 * hS, 10);
     noFill();
     stroke(141, 89, 20);
     strokeWeight(17 * hS);
     ellipse(x + 162 * hS, y + 80 * hS, 50 * hS, 60 * hS);
     fill(255);
     noStroke();
     rect(x + 161 * hS, y + 32 * hS, 40 * hS, 60 * hS, 5);
     rect(x + 121 * hS, y + 44 * hS, 50 * hS, 30 * hS, 5);
     pop();

    pop();

}

function hippoHappy(x, y) {
    push();

    let hS = 1; //hippoScale

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

    //partyhat
    noStroke();
    fill(0, 230, 50);
    triangle(x + 130 * hS, y - 80 * hS, x + 70 * hS, y - 140 * hS, x + 190 * hS, y - 170 * hS);
    fill(255);
    ellipse(x + 140 * hS, y - 120 * hS, 20 * hS);
    ellipse(x + 115 * hS, y - 130 * hS, 10 * hS);
    ellipse(x + 155 * hS, y - 140 * hS, 10 * hS);
    fill(255, 150, 200);
    ellipse(x + 130 * hS, y - 120 * hS, 10 * hS);
    ellipse(x + 135 * hS, y - 140 * hS, 20 * hS);
    ellipse(x + 170 * hS, y - 155 * hS, 10 * hS);
    fill(150, 150, 200);
    ellipse(x + 110 * hS, y - 115 * hS, 15 * hS);
    ellipse(x + 100 * hS, y - 140 * hS, 10 * hS);
    fill(250, 250, 40);
    ellipse(x + 130 * hS, y - 97 * hS, 10 * hS);
    ellipse(x + 150 * hS, y - 150 * hS, 10 * hS);
    pop();
}

function gas(x, y) {
    //green bubble
    push();
    fill(0, 255, 0);
    ellipse(x - 5, y + 20, 20, 15);
    ellipse(x + 20, y + 20, 20, 15);
    ellipse(x, y + 30, 40, 20);
    ellipse(x + 15, y + 30, 40, 20);
    ellipse(x + 7, y + 40, 40, 20);
    triangle(x + 7, y + 5, x - 3, y + 22, x + 14, y + 22);
    //small gas bubbles
    ellipse(x - 30, y + 20, 5);
    ellipse(x + 40, y + 40, 5);
    ellipse(x + 45, y + 37, 3);
    //lines
    stroke(0);
    strokeWeight(0.5);
    line(x + 5, y + 12, x - 2, y + 25);
    line(x + 7, y + 12, x +14, y + 25);
    strokeWeight(0.5);
    line(x + 6, y + 16, x + 6 , y + 30);
    pop();
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
    textSize(19);
    text("You must land with a speed UNDER 40km/h", 150, 140);
    textSize(16);
    text("Move the Hippo with the arrows. Up gives more gas", 150, 180);



    // textSize(12);
    // text("I have just been to the Milkyway Milkshakebar and slayed a couple gallons of strawberry milkshake.", 50, 400);
    // text("Unfortunally I am lactose intolerante.. I feel the bubbles are starting to build up.. ", 50, 420);
    // text("Help me get back safetly to my moon.. PLEASE!", 50, 440);

    buttonStartTheGame(width * 0.3, height * 0.5, 200, 60);


}

function gameScreen() {

    background(40);

    //counter for the speed, velocity km/h
    textSize(12);
    const kmh = Math.floor(velocity + speed) * 10;
    text("velocity: " + kmh + " km/h", 20, 20);
    
    //starting position
    theMilkBar(milkX, milkY);

    //a moving meteor (just for decoration right now)
    meteor(meteorX, meteorY);
    meteorX = meteorX - 1;
    meteorY = meteorY + 1;


    //the moon that moves, try to land on it
    let moonPosition = theLandingMoon(moonX, moonY);

    //moves from the left side to the right side
    moonX = moonX + direction;
    if (moonX < 0 || moonX > width) {
        direction = direction * - 1; 
    }


    //the hippo that you can move
    let footPosition = hippo(hippoX, hippoY, 0);

    //movement for the hippo
    hippoY = hippoY + velocity;
    velocity = velocity + acceleration;

    //When the hippo and moon collides
    //help from a friend, Johan Carlsson to explain
    if ((footPosition.leftFoot.y + 10 > moonPosition.y && footPosition.leftFoot.y - 10 < moonPosition.y) && 
    (footPosition.leftFoot.x + 10 >  moonPosition.x && footPosition.leftFoot.x - 10 < moonPosition.x)) {  
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

    //you will also loose when you go outside the screen
    if (footPosition.leftFoot.y - 100 > height) {
        win = false;
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
        gas(footPosition.leftFoot.x, footPosition.leftFoot.y);
    }
    
}

function resultScreen() {
    background(0);

    textSize(14);
    fill(255);
    text("PRESS SPACEBAR TO RESTART", 150, 230);

   
    textSize(25);
    if (win) {
        fill(0, 255, 0);
        text("YOU WON!", 150, 200);
        hippoHappy(450, 200);
    } else {
        fill(255, 0, 0);
        text("YOU LOST!", 150, 200);
        hippoBroken(450, 200);
    }


    //spacebar to start game again
    if (keyIsDown(32)) {
        speed = 2;
        direction = -1;

        velocity = 0.6;
        acceleration = 0.2;

        hippoX = 70; 
        hippoY = 30;

        state = "game";
    }

}

let hippoX = 140; 
let hippoY = 60;
let moonX = 200;
let moonY = 370;
let milkX = 110;
let milkY = 130;
let meteorX = 500;
let meteorY = 0;

let speed = 2;
let direction = -4;

let velocity = 0.6;
let acceleration = 0.2;

let state = "start";

let win = false;


function draw () {

    //detects where the startbutton is with the mouse, to press start and enter game state
    if (mouseIsPressed && mouseX > width * 0.3 && mouseX < (width * 0.3) + 200 && mouseY > height * 0.5 && mouseY < (height * 0.5) + 60) {

       state = "game";
    }



    //the diffrent screens
    if (state === "start") {
        startScreen();
    } else if (state === "game") {
        gameScreen();
    } else if(state === "result") {
        resultScreen();
    }
}