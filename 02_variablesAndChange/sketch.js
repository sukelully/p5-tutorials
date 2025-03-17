let cloudOneX = 100;
let lineXone = 0;
let lineYone = 0;

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
    triangle(x-30, y, x + (width/16)/2, y-height/2, x+(width/16)+30, y)
}

function drawMoon(x, y) {
    // Moon
    fill(255);
    stroke(0);
    circle(x, y, height / 4);

    // Overlapping navy circle for crescent moon
    stroke('navy');
    fill('navy');
    circle(x-height/16, y, height / 4);
}

function drawShootingStar() {
    if (frameCount % 15 === 0) {
        line(lineXone, lineYone, lineXone + 60, lineYone - 60);
    }
}

function draw() {
    frameRate(60);
    background('navy');

    drawMoon(650, 150);

    // Shooting star
    stroke('yellow');
    drawShootingStar();

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

    // Clouds
    fill(230);
    ellipse(cloudOneX, 100, 160, 80);
    ellipse(cloudOneX - 80, 180, 60, 20);
    ellipse(cloudOneX + 40, 200, 80, 20);

    // Update positions
    cloudOneX = (frameCount) % width;
    lineXone = random(0, width);
    lineYone = random(0, height / 2);


    // Displays x & y position of mouse on canvass
    fill(255);
    text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);
}