const mergeImages = require("merge-images");
const { Canvas, Image } = require("canvas");
const fs = require("fs");

mergeImages(
  [
    "layer/layer6/Back.png",
    "layer/layer5/Arbre.png",
    "layer/layer3/Visage.png",
    "layer/layer2/Pot.png",
    "layer/layer1/Bouche.png",
    "layer/layer4/Yeux.png",
  ],
  {
    Canvas: Canvas,
    Image: Image,
  }
).then((b64) => {
  const regex = /^data:image\/png;base64,/;
  b64 = b64.replace(regex, "");
  const buffer = Buffer.from(b64, "base64");
  fs.writeFileSync("new-path.png", buffer);
});
