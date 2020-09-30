// Opdracht 5C: Resize!

var rectX = 0;
var rectY = 0;

function setup () {
  createCanvas (400, 400);
}

function draw () {
  background (240);

  fill (255,0,0)
  rect (0, 0, rectX,rectY)

  rectX = rectX + 1
  rectX = rectX * 2

  rectY = rectY + 1
  rectY = rectY * 2
}
