class Text {
  constructor(theRoot, color, xPos, yPos) {
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = xPos + "px";
    div.style.top = yPos + "px";
    div.style.color = color;
    div.style.font = "bold 30px Impact";
    div.style.opacity = "0.7";
    div.style.zIndex = 200;
    this.domElement = div;
    theRoot.appendChild(this.domElement);
  }
  update(txt) {
    this.domElement.innerText = txt;
  }
}
