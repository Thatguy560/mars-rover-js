"use strict";

const Rover = require("../src/rover.js");

describe("Rover", () => {
  it("will let you create a new rover with any given co-ordinates and direction.", () => {
    let rover = new Rover(1, 2, "N");
    expect(rover.x).toEqual(1);
    expect(rover.y).toEqual(2);
    expect(rover.direction).toBe("N");
  });

  describe("For when the rover is facing North", () => {
    it("will move one position in that direction if input is 'M' and direction is 'N'.", () => {
      let rover = new Rover(4, 1, "N");
      rover.move();
      expect(rover.y).toEqual(2);
    });
  });
});
