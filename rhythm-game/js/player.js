class Player {
  constructor(theRoot) {
    let root = theRoot;
    this.domElement = document.createElement("div");
    this.domElement.style.position = "absolute";
    this.domElement.style.height = playerHeight + "px";
    this.domElement.style.width = gameWidth + "px";
    this.domElement.style.top = gameHeight - beatHeight - 40 + "px";
    this.domElement.style.boxSizing = "border-box";
    this.domElement.style.border = "3px orange solid";
    this.domElement.style.paddingLeft = "31px";
    this.domElement.style.opacity = "0.70";
    this.domElement.style.font = "bold 50px Impact";
    this.domElement.style.letterSpacing = "20px";
    this.domElement.style.color = "orange";
    this.domElement.style.lineHeight = "70px";
    this.domElement.innerText = "D F J K ";
    this.domElement.style.borderRadius = "35px";
    this.domElement.style.zIndex = 50;
    root.appendChild(this.domElement);
  }
  hitD = beats => {
    let wrongKey = true;
    beats.forEach(beat => {
      if (
        beat.x === 20 &&
        beat.y < gameHeight - 40 &&
        beat.y + beatHeight > gameHeight - playerHeight - 40 &&
        !beat.hit
      ) {
        beat.hit = true;
        wrongKey = false;
      }
    });
    if (wrongKey) {
      errorBlip.play();
      playerLives--;
      playerStreak = 0;
    }
  };
  hitF = beats => {
    let wrongKey = true;
    beats.forEach(beat => {
      if (
        beat.x === 20 + beatWidth &&
        beat.y < gameHeight - 40 &&
        beat.y + beatHeight > gameHeight - playerHeight - 40 &&
        !beat.hit
      ) {
        beat.hit = true;
        wrongKey = false;
      }
    });
    if (wrongKey) {
      errorBlip.play();
      playerLives--;
      playerStreak = 0;
    }
  };
  hitJ = beats => {
    let wrongKey = true;
    beats.forEach(beat => {
      if (
        beat.x === 20 + beatWidth * 2 &&
        beat.y < gameHeight - 40 &&
        beat.y + beatHeight > gameHeight - playerHeight - 40 &&
        !beat.hit
      ) {
        beat.hit = true;
        wrongKey = false;
      }
    });
    if (wrongKey) {
      errorBlip.play();
      playerLives--;
      playerStreak = 0;
    }
  };
  hitK = beats => {
    let wrongKey = true;
    beats.forEach(beat => {
      if (
        beat.x === 20 + beatWidth * 3 &&
        beat.y < gameHeight - 40 &&
        beat.y + beatHeight > gameHeight - playerHeight - 40 &&
        !beat.hit
      ) {
        beat.hit = true;
        wrongKey = false;
      }
    });
    if (wrongKey) {
      errorBlip.play();
      playerLives--;
      playerStreak = 0;
    }
  };
}
