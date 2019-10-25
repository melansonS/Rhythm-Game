class Engine {
  gameLoop = () => {
    if (this.lastFrame === undefined) this.lastFrame = new Date().getTime();
    let timeDiff = new Date().getTime() - this.lastFrame;
    this.lastFrame = new Date().getTime();
    this.beats = this.beats.filter(beat => {
      return !beat.missed;
    });
    this.beats.forEach(beat => {
      beat.update(timeDiff);
    });
    this.beats = this.beats.filter(beat => {
      return !beat.hit;
    });
    this.streak.update();
    this.score.update(playerScore);
    this.score.domElement.style.fontSize = "18px";
    this.lives.update("Lives :" + playerLives);
    this.lives.domElement.style.fontSize = "18px";
    if (playerLives < 1) {
      gameOver = true;
      alert("Game over!");
      this.reset();
    }

    if (!gameOver) {
      setTimeout(this.gameLoop, 20);
    }
  };
  reset = () => {
    this.beats.forEach(beat => {
      beat.hit = true;
    });
    playerLives = 3;
    playerScore = 0;
    playerStreak = 0;
    this.streak.update();
    beatSpeed = 0.35;
    gameSpeed = 350;
    this.startText.update("Restart");
    clearTimeout(timer);
  };

  constructor(theRoot) {
    this.root = theRoot;
    this.player = new Player(this.root);
    this.beats = [];
    this.startText = new Text(this.root, "white", 110, 140);
    this.score = new Text(this.root, "orange", gameWidth - 70, 20);
    this.lives = new Text(this.root, "white", 20, 20);
    this.streakText = new Text(this.root, "white", 5, 120);
    this.streak = new Streak(this.root, 5, 140);
    addBackground(this.root);
  }
}
