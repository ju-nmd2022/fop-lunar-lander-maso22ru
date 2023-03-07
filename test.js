
// stars on the nightsky
let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 50; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();

    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
}

for (let index in starX) {
    noStroke();
    fill(255, 255, 255, starAlpha[index] * 255);
    ellipse(starX[index], starY[index], 2);
}


function draw () {

    
    

    for (let index in starX) {
        noStroke();
        fill(255, 255, 255, starAlpha[index] * 255);
        ellipse(starX[index], starY[index], 2);
    }

    }

