/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const MessageView = require("./messageView");

describe("MessageView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });
  it("clicks the button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const view = new MessageView();
    const buttonEl = document.querySelector("#show-message-button");
    const input = document.querySelector("#message-input");

    input.value = "Testing input";

    buttonEl.click();

    expect(document.querySelector("#message")).not.toBeNull();
    expect(document.querySelector("#message").innerText).toEqual(
      "Testing input"
    );
  });

  it("clicks the button and hides the message", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const view = new MessageView();

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    const hideEl = document.querySelector("#hide-message-button");
    hideEl.click();

    expect(document.querySelector("#message")).toBeNull();
  });
});
