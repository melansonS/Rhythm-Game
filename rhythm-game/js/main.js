let gameEngine = new Engine(document.getElementById("game"));
let bgMusic = document.getElementById("bgMusic");

gameEngine.startText.update("Start Game!");

let keyHandler = event => {
  if (event.code === "KeyD") {
    gameEngine.player.hitD(gameEngine.beats);
  }
  if (event.code === "KeyF") {
    gameEngine.player.hitF(gameEngine.beats);
  }
  if (event.code === "KeyJ") {
    gameEngine.player.hitJ(gameEngine.beats);
  }
  if (event.code === "KeyK") {
    gameEngine.player.hitK(gameEngine.beats);
  }
};

document.addEventListener("keydown", keyHandler);
document.addEventListener("keydown", () => {
  if (gameOver) {
    bgMusic.play();
    gameOver = false;
    gameEngine.startText.update("");
    gameEngine.gameLoop();
    nextBeat(document.getElementById("game"), gameEngine);
  }
});
