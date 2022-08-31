/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const View = require("./view");

describe("A test for my webpage", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("displays a title", () => {
    // 1. Arrange - instantiate our View class
    const view = new View();

    // 2. Act - call any method that modifies the page
    view.addParagraph();

    // 3. Assert - we assert the page contains what it should.
    expect(document.querySelectorAll("p").length).toBe(3);
  });

  it("clears all paragraphs", () => {
    // 1. Arrange - instantiate our View class
    const view = new View();

    // 2. Act - call any method that modifies the page
    view.clearParagraphs();

    // 3. Assert - we assert the page contains what it should.
    expect(document.querySelectorAll("p").length).toBe(0);
  });
});
