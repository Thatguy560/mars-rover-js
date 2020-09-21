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

  move(input) {
    if (this.facingNorth() && input === "M" && !(this.y >= plateauBorders[1])) {
      this.y++;
    }
    if (this.facingEast() && input === "M" && !(this.x >= plateauBorders[1])) {
      this.x++;
    }
    if (this.facingSouth() && input === "M" && !(this.y <= plateauBorders[0])) {
      this.y--;
    }
    if (this.facingWest() && input === "M" && !(this.x <= plateauBorders[0])) {
      this.x--;
    }
    return this;
  }

  turn(input) {
    if (input === "L") {
      this.direction = left[this.direction];
    }
    if (input === "R") {
      this.direction = right[this.direction];
    }
    return this;
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
    return `Rover co-ordinates are ${x}, ${y} facing ${direction}`;
  }
}

module.exports = Rover;
