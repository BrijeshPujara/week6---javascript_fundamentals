const Candy = require("./candy");

class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(candy) {
    const basket = this.basket;
    if (!(candy instanceof Candy)) {
      throw TypeError()
    }
    basket.push(candy);
  }

  getTotalPrice() {
    let total = 0;
    const basket = this.basket;

    basket.map((item) => {
      total += item.getPrice()
    });
    return total;
  }
}

module.exports = ShoppingBasket;
