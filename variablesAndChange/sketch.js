let cloudOneX = 100;

function setup() {
    createCanvas(800, 800);
}

function drawTree(x, y) {
    // Trunk
    fill('rgb(118,80,72)');
    stroke('black');
    rect(x, y, width/16, height/8);

    // Leaves
    fill('green');
    triangle(x-30, y, x + (width/16)/2, y-height/3, x+(width/16)+30, y)
}

function drawShootingStar() {
    
}

function draw() {
    background('navy');

    // Moon
    fill(255);
    stroke(0);
    circle(700, 100, 200);

    // Overlapping navy circle for crescent moon
    stroke('navy');
    fill('navy');
    circle(640, 100, 200);

    // Mountains
    stroke(0);
    fill(80);
    triangle(-80, 600, 150, 200, 500, 600);
    triangle(200, 600, 600, 200, 1000, 600);

    // Grass
    fill('rgb(50, 76, 50)');
    rect(0, 600, 800, 200);

    // Trees
    drawTree(500, 625);
    drawTree(100, 650);
    drawTree(750, 700);
    drawTree(400, 550);
    drawTree(600, 550);
    drawTree(200, 600);

    // Cloud
    fill(230);
    ellipse(cloudOneX, 100, 160, 80);

    cloudOneX = (frameCount * 2) % width;
    console.log(cloudOneX);

    // Displays x & y position of mouse on canvass
    fill(255);
    text(`mouseX: ${mouseX}, mouseY: ${mouseY}, 20, 20`);
}