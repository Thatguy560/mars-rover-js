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
      rover.move("M");
      expect(rover.y).toEqual(2);
    });

    it("won't let you move any further past the North plateau border", () => {
      let rover = new Rover(1, 3, "N");
      for (let i = 0; i < 10; i++) {
        rover.move("M");
      }
      expect(rover.y).toEqual(5);
      // console.log(rover.plateauBorders[1]);
    });
  });

  describe("For when the rover is facing East", () => {
    it("will move one position in that direction if input is 'M' and direction is 'E'.", () => {
      let rover = new Rover(1, 2, "E");
      rover.move("M");
      expect(rover.x).toEqual(2);
    });

    it("won't let you move any further past the East plateau border", () => {
      let rover = new Rover(3, 1, "E");
      for (let i = 0; i < 10; i++) {
        rover.move("M");
      }
      expect(rover.x).toEqual(5);
    });
  });

  describe("For when the rover is facing South", () => {
    it("will move one position in that direction if input is 'M' and direction is 'S'.", () => {
      let rover = new Rover(2, 4, "S");
      rover.move("M");
      expect(rover.y).toEqual(3);
    });

    it("won't let you move any further past the South plateau border", () => {
      let rover = new Rover(1, 3, "S");
      for (let i = 0; i < 10; i++) {
        rover.move("M");
      }
      expect(rover.y).toEqual(0);
    });
  });

  describe("For when the rover is facing West", () => {
    it("will move one position in that direction if input is 'M' and direction is 'W'.", () => {
      let rover = new Rover(4, 2, "W");
      rover.move("M");
      expect(rover.x).toEqual(3);
    });

    it("won't let you move any further past the West plateau border", () => {
      let rover = new Rover(3, 1, "W");
      for (let i = 0; i < 10; i++) {
        rover.move("M");
      }
      expect(rover.x).toEqual(0);
    });
  });

  describe("For when the rover is turning left", () => {
    it("will turn West when facing North", () => {
      let rover = new Rover(3, 3, "N");
      rover.turn("L");
      expect(rover.direction).toBe("W");
    });

    it("will turn North when facing East", () => {
      let rover = new Rover(3, 3, "E");
      rover.turn("L");
      expect(rover.direction).toBe("N");
    });

    it("will turn East when facing South", () => {
      let rover = new Rover(3, 3, "S");
      rover.turn("L");
      expect(rover.direction).toBe("E");
    });

    it("will turn South when facing West", () => {
      let rover = new Rover(3, 3, "W");
      rover.turn("L");
      expect(rover.direction).toBe("S");
    });
  });

  describe("For when the rover is turning right", () => {
    it("will turn East when facing North", () => {
      let rover = new Rover(3, 3, "N");
      rover.turn("R");
      expect(rover.direction).toBe("E");
    });

    it("will turn South when facing East", () => {
      let rover = new Rover(3, 3, "E");
      rover.turn("R");
      expect(rover.direction).toBe("S");
    });

    it("will turn West when facing South", () => {
      let rover = new Rover(3, 3, "S");
      rover.turn("R");
      expect(rover.direction).toBe("W");
    });

    it("will turn North when facing West", () => {
      let rover = new Rover(3, 3, "W");
      rover.turn("R");
      expect(rover.direction).toBe("N");
    });
  });

  it("will allow you to check the rover's current position at any given time.", () => {
    let rover = new Rover(4, 4, "S");
    expect(rover.returnCoordinates()).toBe(
      "Rover co-ordinates are 4, 4 facing S."
    );
  });
});
