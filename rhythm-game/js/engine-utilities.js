let addBackground = root => {
  let bg = document.createElement("img");
  bg.src = "images/bg.gif";
  bg.style.position = "absolute";
  bg.style.height = gameHeight + "px";
  bg.style.width = gameWidth + "px";
  bg.style.zIndex = 0;
  root.appendChild(bg);

  let bottomShadowBox = document.createElement("div");
  bottomShadowBox.style.backgroundColor = bgColor;
  bottomShadowBox.style.position = "absolute";
  bottomShadowBox.style.width = gameWidth;
  bottomShadowBox.style.height = beatHeight;
  bottomShadowBox.style.top = gameHeight - 1;
  bottomShadowBox.style.zIndex = 100;
  root.appendChild(bottomShadowBox);

  let topShadowBox = document.createElement("div");
  topShadowBox.style.backgroundColor = bgColor;
  topShadowBox.style.position = "absolute";
  topShadowBox.style.width = gameWidth;
  topShadowBox.style.height = beatHeight;
  topShadowBox.style.bottom = 0;
  topShadowBox.style.zIndex = 100;
  root.appendChild(topShadowBox);
};

let nextBeat = (theRoot, engine) => {
  let root = theRoot;
  let theEngine = engine;
  let beatType = Math.floor(Math.random() * beatTypes);
  let spot = Math.floor(Math.random() * 4);
  if (beatType > 0) {
    let newBeat = new Beat(theRoot, spot);
    engine.beats.push(newBeat);
  }
  if (beatType === 5) {
    if (spot > 0) {
      engine.beats.push(new Beat(theRoot, spot - 1));
    } else {
      engine.beats.push(new Beat(theRoot, spot + 1));
    }
  }

  //difficutly increment
  beatSpeed += 0.002;
  gameSpeed -= 0.005;

  if (!gameOver) {
    timer = setTimeout(() => {
      nextBeat(root, theEngine);
    }, gameSpeed);
  }
};
