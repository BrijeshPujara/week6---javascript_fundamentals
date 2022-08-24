const { add, multiply } = require("./exercise");

describe("add", () => {
  test("adds 2 and 2", () => {
    expect(add(2, 2)).toBe(4);
  });

  test("adds 5 and 0", () => {
    expect(add(5, 0)).toBe(5);
  });

  test("adds 5 and 0", () => {
    expect(add(5, 0)).toBe(5);
  });
});

describe("multiply", () => {
  it("multiplies 2 and 2", () => {
    expect(multiply(2, 2)).toBe(4);
  });
});
