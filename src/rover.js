"use strict";

const plateauBorders = [0, 5];

const left = { N: "W", E: "N", S: "E", W: "S" };

const right = { N: "E", E: "S", S: "W", W: "N" };

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
    return this.direction === "S";
  }

  facingWest() {
    return this.direction === "W";
  }

  returnCoordinates() {
    console.log(`Rover co-ordinates are ${x}, ${y} facing ${direction}`);
  }
}

module.exports = Rover;
