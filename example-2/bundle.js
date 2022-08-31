(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // view.js
  var require_view = __commonJS({
    "view.js"(exports, module) {
      var View2 = class {
        constructor() {
          this.mainContainerEl = document.querySelector("#main-container");
        }
        addParagraph() {
          let para3 = document.createElement("p");
          para3.innerText = "I am the third paragraph";
          para3.setAttribute("id", "third-paragraph");
          this.mainContainerEl.append(para3);
        }
        clearParagraphs() {
          const allPara = document.querySelectorAll("p");
          allPara.forEach((p) => {
            p.remove();
          });
        }
      };
      module.exports = View2;
    }
  });

  // index.js
  var View = require_view();
  var view = new View();
  view.addParagraph();
})();
