"use strict";

const plateauBorders = [0, 5];

const left = {};

const right = {};

class Rover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  move() {
    this.y += 1;
    // this.x += 1;
    // this.y -= 1;
    // this.x -= 1;
    console.log(this);
  }
}

module.exports = Rover;
