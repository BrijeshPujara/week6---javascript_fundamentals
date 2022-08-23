class UserBase {
  constructor(users) {
    this.users = users;
  }

  getNames() {
    return this.users.map((name) => {
      return name;
    });
  }

  getIntroduction() {
    return this.users.map((name) => {
      return `Hi, my name is ${name.users}`;
    });
  }
}

const users = [
  new UserBase("Uma"),
  new UserBase("Josh"),
  new UserBase("Ollie"),
];

const user = new UserBase(users);

console.log(user.getNames());
console.log(user.getIntroduction());
