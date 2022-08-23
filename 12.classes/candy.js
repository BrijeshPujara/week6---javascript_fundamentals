class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

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

const candy = new Candy("Twix", 100);
const candy_1 = new Candy("Snickers", 150);
const basket = new ShoppingBasket();

basket.addItem(candy);
basket.addItem(candy_1);

console.log(candy_1.getName());

module.exports = { ShoppingBasket, Candy };
