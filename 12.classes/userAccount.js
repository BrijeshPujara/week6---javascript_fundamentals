class UserAccount {
  constructor(name) {
    this.name = name;
  }

  getNames() {
    return this.name;
  }

  getIntroduction() {
    return `Hi, my name is ${this.name}`;
  }
}

module.exports = UserAccount;
