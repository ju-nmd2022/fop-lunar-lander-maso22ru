/* 
Lunar lander game, made for the course "foundation of programming" at JU.

Needs to include:
- a start screen
- the actual game
- a result screen
- able to restart the game
- control the thruster with space , up or down key
- velocity not linear
*/


background(40);

const hippoColour = color(51, 0, 25);

let x = 200;
let y = 200;


function hippo(x, y) {
    
    //BODY
    fill(0);
    ellipse(x + 30, y + 200, 255);
    beginShape();
    vertex(x + 30, y - 30);
    bezierVertex(x - 200, y + 300, x + 260, y + 300, x + 30, y - 30);
    endShape();
    noStroke();
    fill(hippoColour);
    ellipse(x + 30, y + 200, 250);
    beginShape();
    vertex(x + 30, y - 30);
    bezierVertex(x - 200, y + 300, x + 260, y + 300, x + 30, y - 30);
    endShape();

    fill(0);
    ellipse(x - 10, y + 110, 5);
    ellipse(x + 60, y + 110, 5);
    //arms
    stroke(0);
    strokeWeight(2);
    fill(hippoColour);
    beginShape();
    vertex(x + 70, y + 50);
    vertex(x + 180, y + 50);
    bezierVertex(x + 200, y + 50,  x + 210, y + 100, x + 70, y + 85);
    endShape();

    beginShape();
    vertex(x - 10, y + 50);
    vertex(x - 120, y + 50);
    bezierVertex(x - 140, y + 50,  x - 150, y + 100, x - 10, y + 85);
    endShape();
    //legs
    beginShape();
    vertex(x - 70, y + 270);
    vertex(x - 20, y + 350);
    vertex(x + 10, y + 350);
    vertex(x + 20, y + 300);
    endShape();

    beginShape();
    vertex(x + 130, y + 270);
    vertex(x + 80, y + 350);
    vertex(x + 50, y + 350);
    vertex(x + 40, y + 300);
    endShape();

    fill(0);
    ellipse(x - 5, y + 351, 30, 3);
    ellipse(x + 65, y + 351, 30, 3);
    //ears
    fill(hippoColour);
    beginShape();
    vertex(x, y - 80);
    vertex(x - 10, y - 90);
    bezierVertex(x - 20, y - 100, x - 30, y - 110, x - 20, y - 120);
    vertex(x - 20, y - 120);
    bezierVertex(x - 10, y - 120, x + 10, y - 110, x, y - 90);
    endShape();

    beginShape();
    vertex(x + 60, y - 80);
    vertex(x + 50, y - 90);
    bezierVertex(x + 60, y - 100, x + 50, y - 110, x + 60, y - 120);
    vertex(x + 60, y - 120);
    bezierVertex(x + 70, y - 120, x + 90, y - 110, x + 60, y - 90);
    endShape();
    //head
    fill(hippoColour);
    ellipse(x + 30, y - 60, 100, 80);
    //nose
    noStroke();
    fill(0);
    ellipse(x, y, 105);
    ellipse(x + 60, y, 105);
    ellipse(x + 60, y - 42, 30, 35);
    ellipse(x, y - 42, 30, 35);
    fill(hippoColour);
    ellipse(x, y, 100);
    ellipse(x + 60, y, 100);
    ellipse(x + 60, y - 42, 25, 30);
    ellipse(x, y - 42, 25, 30);
    fill(0);
    ellipse(x + 60, y - 44, 10, 17);
    ellipse(x, y - 44, 10, 17);
    // whiskers
    ellipse(x - 20, y - 5, 4);
    ellipse(x - 32, y, 4);
    ellipse(x - 25, y + 10, 4);
    ellipse(x + 80, y - 5, 4);
    ellipse(x + 92, y, 4);
    ellipse(x + 85, y + 10, 4);
    //eyes
    fill(255);
    ellipse(x + 15, y - 75, 15, 25);
    ellipse(x + 45, y - 75, 15, 25);
    fill(0);
    ellipse(x + 15, y - 75, 10);
    ellipse(x + 45, y - 75, 10);

    //astronaut hat
    stroke(0);
    fill(120, 80);
    ellipse(x + 30, y - 40, 220);
}


function theMoon(x, y) {
    strokeWeight(1);
    fill(150);
    ellipse(x, y + 50, 600);

    arc(x + 65, y - 30, 120, 30, 0, PI);
    fill(130);
    ellipse(x + 65, y - 50, 90, 30);
    ellipse(x - 120, y - 150, 90, 30);
    noFill();
    arc(x - 120, y - 120, 150, 30, 0, PI);

    arc(x - 220, y - 20, 50, 10, 0.7, PI);
    arc(x - 80, y + 170, 50, 10, PI, 0.7);

    ellipse(x + 150, y - 150, 10);
    ellipse(x + 140, y - 170, 7);

    ellipse(x - 160, y + 230, 10);
    ellipse(x - 140, y + 250, 7);

    noStroke();
    fill(130);
    ellipse(x, y, 50, 20);
    ellipse(x + 30, y + 20, 80, 20);
    ellipse(x - 5, y + 12, 70, 30);
    ellipse(x + 160, y + 80, 120, 50);
    ellipse(x + 190, y + 100, 120, 50);
    ellipse(x - 200, y - 50, 120, 30);
    ellipse(x - 180, y - 60, 120, 20);
    ellipse(x + 150, y - 100, 100, 20);
    ellipse(x - 160, y + 130, 120, 50);
    ellipse(x - 190, y + 150, 120, 50);
}



hippo(x + 100, y - 40);

theMoon(x + 130, y + 570);
