const fizzbuzz = require("./fizzbuzz");

describe("Fizzbuzz", () => {
  it("should return Fizz after entering 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });

  it("should return Buzz after entering 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });

  it("should return 8 as a number", () => {
    expect(fizzbuzz(8)).toBe(8);
  });

  it("should return Fizzbuzz after entering 15", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz after entering 18", () => {
    expect(fizzbuzz(18)).toBe("Fizz");
  });
    
  it("should return Fizz after entering 20", () => {
    expect(fizzbuzz(20)).toBe("Buzz");
  });
});
