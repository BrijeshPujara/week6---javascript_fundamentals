const searchCandies = require("./searchCandies");

describe("searchCandies function", () => {
  it('should return Mars and Maltesers after entering "ma",10', () => {
    expect(searchCandies("ma", 10)).toEqual(["Mars", "Maltesers"]);
  });

  it('should return Mars after entering "ma",10', () => {
    expect(searchCandies("ma", 2)).toEqual(["Mars"]);
  });

  it('should return Skitties, Skittles and Starburst after entering "S",10', () => {
    expect(searchCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });

  it('should return Skitties and Skittles after entering "S",4', () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });
});
