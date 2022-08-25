const ShoppingBasket = require("./shoppingBasket");
const Candy = require("./candy.js");

// jest.mock("./candy.js");

describe("Shopping Basket", () => {
  // beforeEach(() => {
  //   Candy.mockClear();
  // });

  it("returns an empty basket total", () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  });

  it("add one item and returns the total price", () => {
    const basket = new ShoppingBasket();
    // const double = { getName: () => "Mars", getPrice: () => 4.99 };

    const candy = new Candy("Mars", 4.99);
    basket.addItem(candy);
    expect(basket.getTotalPrice()).toEqual(4.99);
  });
});
