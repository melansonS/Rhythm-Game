class Beat {
  constructor(theRoot, theSpot) {
    this.root = theRoot;
    this.spot = theSpot;
    this.x = this.spot * beatWidth + 20;
    this.y = -beatHeight;
    this.domElement = document.createElement("img");
    this.domElement.src = "Images/beat.png";
    this.domElement.style.opacity = "0.85";
    this.domElement.style.position = "absolute";
    this.domElement.style.height = beatHeight;
    this.domElement.style.width = beatWidth;
    this.domElement.style.borderRadius = beatHeight / 2 + "px";
    this.domElement.style.top = this.y + "px";
    this.domElement.style.left = this.x + "px";
    this.domElement.style.zIndex = 20;
    this.speed = beatSpeed;
    this.hit = false;
    this.missed = false;
    this.root.appendChild(this.domElement);
  }
  update = timeDiff => {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = this.y + "px";

    if (!this.hit && this.y > gameHeight) {
      this.missed = true;
      playerLives--;
      playerStreak = 0;
      errorBlip.play();
      this.root.removeChild(this.domElement);
      return;
    }
    if (this.hit) {
      playerScore += 25 * Math.ceil(playerStreak / 20);
      playerStreak++;
      this.root.removeChild(this.domElement);
    }
  };
}
