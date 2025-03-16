function setup() {
    createCanvas(800, 800);
}

function draw() {
    background('navy');

    // Moon
    fill(255);
    stroke(0);
    circle(700, 100, 200);

    // Mountains
    stroke(0);
    fill(80);
    triangle(-80, 600, 150, 200, 500, 600);
    triangle(200, 600, 600, 200, 1000, 600);

    // Grass
    fill('rgb(50, 76, 50)');
    rect(0, 600, 800, 200);

    // Displays x & y position of mouse on canvass
    fill(255);
    text(`mouseX: ${mouseX}, mouseY: ${mouseY}, 20, 20`);
}