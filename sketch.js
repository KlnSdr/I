let offset = 50;
let offsetX;
let y;
let x;

const speed = 0.5;

let index = 0;

function setup() {
  createCanvas(400, 400);
  offsetX = width / 2 - offset;
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(5);

  drawI();
}

function drawI() {
  if (index == 0) {
    if (y < height - offset) {
      line(width / 2, height / 2, width / 2, y);
      line(width / 2, height / 2, width / 2, height - y);
      y += speed;
    } else {
      if (x < width - offsetX) {
        line(width / 2, height / 2, width / 2, y);
        line(width / 2, height / 2, width / 2, height - y);

        line(width / 2, offset, x, offset);
        line(width / 2, offset, width - x, offset);

        line(width / 2, height - offset, x, height - offset);
        line(width / 2, height - offset, width - x, height - offset);
        x += speed;
      } else {
        if (xS == undefined) {
          xS = width / 2;
        }
        index += 1;
        drawS();
      }
    }
  } else {
    drawS();
  }
}

let xS;

function drawS() {
  if (index == 1) {
    if (xS > width / 2 - offset) {
      line(width / 2, offset, x, offset);
      line(width / 2, offset, width - x, offset);

      line(width / 2, height - offset, x, height - offset);
      line(width / 2, height - offset, width - x, height - offset);


      line(width - xS, height / 2, width - xS, height - offset);
      line(xS, offset, xS, height / 2);

      line(width - xS, height / 2, xS, height / 2);
      xS -= speed;
    } else {
      index += 1;
      resetS();
    }
  } else {
    resetS();
  }
}


function resetS() {
  if (index == 2) {
    line(width / 2, offset, width - xS, offset);
    line(width / 2, offset, xS, offset);

    line(width / 2, height - offset, width - xS, height - offset);
    line(width / 2, height - offset, xS, height - offset);


    line(width - xS, height / 2, width - xS, height - offset);
    line(xS, offset, xS, height / 2);

    line(width - xS, height / 2, xS, height / 2);
    if (xS < width / 2) {
      xS += speed;
    } else {
      index += 1;
      yA = offset;
      xA = 0;
      drawA();
    }
  } else {
    drawA();
  }
}

let angle = 0;
let yA;
let xA;

function drawA() {
  if (index == 3) {
    if (y < height - offset) {
      line(width / 2, offset, width / 2, yA);
      yA += speed;
    } else {
      push();
      translate(width / 2, offset);
      rotate(angle);
      line(0, 0, 0, height - 2 * offset);

      rotate(-2 * angle);
      line(0, 0, 0, height - 2 * offset);
      pop();

      if (angle < PI / 8) {
        angle += 0.001;
      } else {
        line(width / 2 - xA, height / 2, width / 2 + xA, height / 2);
        if (xA < offset) {
          xA += speed;
        } else {
          index += 1;
          resetA();
        }
      }
    }
  } else {
    resetA();
  }
}


function resetA() {
  if (index == 4) {
    if (xA < width / 2 && xA > 0) {
      push();
      translate(width / 2, offset);
      rotate(angle);
      line(0, 0, 0, height - 2 * offset);

      rotate(-2 * angle);
      line(0, 0, 0, height - 2 * offset);
      pop();

      line(width / 2 - xA, height / 2, width / 2 + xA, height / 2);
      xA -= speed;
    } else {
      push();
      translate(width / 2, offset);
      rotate(angle);
      line(0, 0, 0, height - 2 * offset);

      rotate(-2 * angle);
      line(0, 0, 0, height - 2 * offset);
      pop();

      if (angle > 0) {
        angle -= 0.001;
      } else {
        index += 1;
        xB = 0;
        yB = 0;
        drawB();
      }
    }
  } else {
    drawB();
  }
}

let xB;
let xB2;
let yB;

function drawB() {
  if (index == 5) {
    if (xB < offset) {
      line(width / 2 - xB, offset, width / 2 - xB, height - offset);
      xB += speed;
      xB2 = xB;
    } else {
      if (xB2 > -offset) {
        line(width / 2 - xB, offset, width / 2 - xB, height - offset);

        line(width / 2 - xB, offset, width / 2 - xB2, offset);
        line(width / 2 - xB, height / 2, width / 2 - xB2, height / 2);
        line(width / 2 - xB, height - offset, width / 2 - xB2, height - offset);
        xB2 -= speed;
      } else {
        if (yB < height / 2 - offset) {
          line(width / 2 - xB, offset, width / 2 - xB, height - offset);

          line(width / 2 - xB, offset, width / 2 - xB2, offset);
          line(width / 2 - xB, height / 2, width / 2 - xB2, height / 2);
          line(width / 2 - xB, height - offset, width / 2 - xB2, height - offset);

          line(width / 2 - xB2, offset, width / 2 - xB2, offset + yB);
          line(width / 2 - xB2, height - offset, width / 2 - xB2, height - offset - yB);

          yB += speed;
        } else {
          index += 1;
          drawE();
        }
      }
    }
  } else {
    drawE();
  }
}

function drawE() {
  if (index == 6) {
    if (yB > 0) {
      line(width / 2 - xB, offset, width / 2 - xB, height - offset);

      line(width / 2 - xB, offset, width / 2 - xB2, offset);
      line(width / 2 - xB, height / 2, width / 2 - xB2, height / 2);
      line(width / 2 - xB, height - offset, width / 2 - xB2, height - offset);

      line(width / 2 - xB2, height/2, width / 2 - xB2, height/2 - yB);
      line(width / 2 - xB2, height/2, width / 2 - xB2, height/2 + yB);

      yB -= speed;
    } else {
      index += 1;
      xL = 0;
      drawL();
    }
  } else {
    drawL();
  }
}

let xL;

function drawL() {
  if (index == 7) {
    if (xL < 2 * offset) {
      line(width / 2 - xB, offset, width / 2 - xB, height - offset);

      line(width / 2 - xB, offset, width / 2 - xB2 - xL, offset);
      line(width / 2 - xB, height / 2, width / 2 - xB2 - xL, height / 2);

      line(width / 2 - xB, height - offset, width / 2 - xB2, height - offset);

      xL += speed;
    } else {
      index += 1;
      xL = 0;
      xrL = offset;
      resetL();
    }
  } else {
    resetL();
  }
}

let xrL;
let yrL;

function resetL() {
  if (index == 8) {
    if (xL < 2 * offset) {
      line(width / 2 - xB, offset, width / 2 - xB, height - offset);

      line(width / 2 - xB, height - offset, width / 2 - xB2 - xL, height - offset);

      xL += speed;
    } else {
      if (xrL > 0) {
        line(width / 2 - xrL, offset, width / 2 - xrL, height - offset);
        xrL -= speed;
        yrL = height - offset;
      } else {
        if (yrL > height / 2) {
          line(width / 2, height / 2, width / 2, yrL);
          line(width / 2, height / 2, width / 2, height - yrL);
          yrL -= speed;
        } else {
          index = 0;
          x = width / 2;
          y = height / 2;
        }
      }
    }
  }
}
