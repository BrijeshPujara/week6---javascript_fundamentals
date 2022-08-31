class View {
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
}

module.exports = View;
