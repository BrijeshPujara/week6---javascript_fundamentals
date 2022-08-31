(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.mainEl = document.querySelector("#main-container");
          this.hideEl = document.querySelector("#hide-message-button");
          this.inputEl = document.querySelector("#message-input");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideEl.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          console.log("Thanks for clicking me!");
          this.message = document.createElement("div");
          this.message.id = "message";
          this.message.innerText = this.inputEl.value;
          this.mainEl.append(this.message);
        }
        hideMessage() {
          this.mainEl.remove(this.message);
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
