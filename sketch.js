function setup() {
  var canvas = createCanvas(800,400);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  background(255, 0, 200);
  
}


var _horzRows = 34;
var _horzCols = 34;
var _vertRows = 16;
var _vertCols = 68;

var rows = [1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0];
var cols = [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0];

var x = 0;
var y = 0;
var xOffset = 0;
var yOffset = 0;

function horzGrid(l, t, stitchLength) {
  for (var j = 0; j < _horzCols; j++) {
    for (var k = 0; k < _horzRows; k++) {
      x = l + j*(stitchLength*2); // stitch + skip
      y = t + k*(stitchLength);
      if (rows[k] == 1) {
        xOffset = stitchLength;
      } else {
        xOffset = 0;
      }
      line(x+xOffset, y, x+xOffset + stitchLength, y);
    }
  }
}

function vertGrid(l, t, stitchLength) {
  for (var m = 0; m < _vertCols; m++) {
    for (var n = 0; n < _vertRows; n++) {
      x = l + m*(stitchLength);
      y = t + n*(stitchLength*2); // stitch + skip
      if (cols[m] == 1) {
        yOffset = stitchLength;
      } else {
        yOffset = 0;
      }
      line(x, y+yOffset, x, y+yOffset + stitchLength);
    }
  }
}


function draw() {
  horzGrid(30, 40, 25);
  vertGrid(30, 40, 25);
  size(920, 480);
  background(255);
  strokeWeight(2);
  
}
