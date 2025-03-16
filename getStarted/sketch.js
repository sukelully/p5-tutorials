function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(135, 206, 235);

    // Sun
    fill('yellow');
    stroke('orange');
    strokeWeight(20);
    circle(550, 250, 100);

    // Ground
    fill('green');
    stroke('black')
    rect(-20, height/2+100, width+40, height);

    // Emojis
    textSize(75);
    text('🌸', 150, 450);
    text('🐞', mouseX, mouseY);
}