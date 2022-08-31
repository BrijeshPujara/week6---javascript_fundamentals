(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // components/add.js
  var require_add = __commonJS({
    "components/add.js"(exports, module) {
      var add2 = (num1, num2) => {
        return num1 + num2;
      };
      module.exports = add2;
    }
  });

  // components/multiply.js
  var require_multiply = __commonJS({
    "components/multiply.js"(exports, module) {
      var multiply2 = (num1, num2) => {
        return num1 * num2;
      };
      module.exports = multiply2;
    }
  });

  // index.js
  var add = require_add();
  var multiply = require_multiply();
  var maths = () => {
    let sum = multiply(add(2, 2), 4);
    console.log(sum);
  };
  maths();
  console.log(new Date());
})();
