class Streak {
  constructor(root, xPos, yPos) {
    this.domElement = document.createElement("div");
    this.domElement.style.position = "absolute";
    this.domElement.style.width = "10px";
    this.domElement.style.bottom = -gameHeight + yPos + "px";
    this.domElement.style.left = xPos + "px";
    this.domElement.style.zIndex = 5;
    this.domElement.style.opacity = "0.7";
    root.appendChild(this.domElement);
  }

  update = () => {
    this.domElement.style.backgroundColor = "white";
    if (playerStreak <= 80) {
      this.domElement.style.height = playerStreak * 2;
    } else {
      this.domElement.style.height = "160px";
    }
    if (playerStreak > 40) {
      this.domElement.style.backgroundColor = "#fff645";
    }
    if (playerStreak > 60) {
      this.domElement.style.backgroundColor = "#ffb700";
    }
    if (playerStreak > 80) {
      this.domElement.style.backgroundColor = "orange";
    }
  };
}
