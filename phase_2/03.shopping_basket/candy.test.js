const Candy = require("./candy");

describe("Candy", () => {
  it("returns the name of the candy", () => {
    const twix = new Candy("Twix", 4.99);
    expect(twix.getName()).toBe("Twix");
  });

  it("returns the price of the candy", () => {
    const twix = new Candy("Twix", 4.99);
    expect(twix.getPrice()).toBe(4.99);
  });
});
