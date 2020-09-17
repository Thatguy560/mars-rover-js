"use strict";

const plateauBorders = [0, 5];

const left = { N: "W", E: "N", S: "E", W: "S" };

const right = {};

class Rover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  move() {
    if (this.facingNorth()) {
      this.y += 1;
    }
    // this.x += 1;
    // this.y -= 1;
    // this.x -= 1;
    console.log(this);
  }

  facingNorth() {
    return this.direction === "N";
  }

  facingEast() {
    return this.direction === "E";
  }

  facingSouth() {
    return this.direction === "E";
  }

  facingWest() {
    return this.direction === "E";
  }
}

module.exports = Rover;
