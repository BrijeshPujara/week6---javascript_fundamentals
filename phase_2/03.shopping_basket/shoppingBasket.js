const Candy = require("./candy");

class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(candy) {
    const basket = this.basket;
    return basket.push(candy);
  }

  getTotalPrice() {
    let total = 0;
    const basket = this.basket;

    basket.map((item) => {
      total += item.price;
    });
    return total;
  }
}

module.exports = ShoppingBasket;
