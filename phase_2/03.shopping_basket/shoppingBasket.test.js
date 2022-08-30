const ShoppingBasket = require("./shoppingBasket");
const Candy = require("./candy.js");

const bars = 3445

describe("Shopping Basket", () => {
  it("returns an empty basket total", () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  });

  it("add one item and returns the total price", () => {
    const basket = new ShoppingBasket();
    const double = { getName: () => "Mars", getPrice: () => 4.99 };
    basket.addItem(double);
    expect(basket.getTotalPrice()).toEqual(4.99);
  });

  it("wont add non-candies to basket", () => {
    const basket = new ShoppingBasket()
    expect(() => {
      basket.addItem(bars);
    }).toThrow(TypeError);
  });
});
