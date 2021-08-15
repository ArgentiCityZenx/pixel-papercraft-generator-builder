// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Generator = require("../../builder/modules/Generator.bs.js");

function requireImage(id) {
  return require("./images/" + id + ".png");
}

function requireTexture(id) {
  return require("./textures/" + id + ".png");
}

var id = "minecraft-creeper-character";

var name = "Minecraft Creeper Character";

var thumbnail = {
  url: require("./thumbnail/v2-thumbnail-256.jpeg")
};

var imageIds = [
  "Background",
  "Folds",
  "Labels",
  "Action-Figure",
  "Action-Figure-Folds",
  "Action-Figure-Labels"
];

function toImageDef(id) {
  return {
          id: id,
          url: requireImage(id)
        };
}

var images = imageIds.map(toImageDef);

var textures = [{
    id: "Skin",
    url: requireTexture("Steve"),
    standardWidth: 64,
    standardHeight: 64
  }];

function script(param) {
  Generator.defineTextureInput("Skin", {
        standardWidth: 64,
        standardHeight: 64,
        choices: []
      });
  Generator.defineBooleanInput("Show Folds", true);
  Generator.defineBooleanInput("Show Labels", true);
  Generator.defineBooleanInput("Action Figure", false);
  var showFolds = Generator.getBooleanInputValue("Show Folds");
  var showLabels = Generator.getBooleanInputValue("Show Labels");
  var actionFigure = Generator.getBooleanInputValue("Action Figure");
  var hideHelmet = Generator.getBooleanInputValue("Hide Helmet");
  var hideJacket = Generator.getBooleanInputValue("Hide Jacket");
  var hideFrontRightPant = Generator.getBooleanInputValue("Hide Front Right Pant");
  var hideFrontLeftPant = Generator.getBooleanInputValue("Hide Front Left Pant");
  var hideBackRightPant = Generator.getBooleanInputValue("Hide Back Right Pant");
  var hideBackLeftPant = Generator.getBooleanInputValue("Hide Back Left Pant");
  Generator.defineRegionInput([
        164,
        110,
        256,
        192
      ], (function (param) {
          return Generator.setBooleanInputValue("Hide Helmet", !hideHelmet);
        }));
  Generator.defineRegionInput([
        196,
        340,
        192,
        192
      ], (function (param) {
          return Generator.setBooleanInputValue("Hide Jacket", !hideJacket);
        }));
  Generator.defineRegionInput([
        62,
        471,
        128,
        112
      ], (function (param) {
          return Generator.setBooleanInputValue("Hide Front Right Pant", !hideFrontRightPant);
        }));
  Generator.defineRegionInput([
        121,
        589,
        128,
        112
      ], (function (param) {
          return Generator.setBooleanInputValue("Hide Front Left Pant", !hideFrontLeftPant);
        }));
  Generator.defineRegionInput([
        419,
        471,
        128,
        112
      ], (function (param) {
          return Generator.setBooleanInputValue("Hide Back Right Pant", !hideBackRightPant);
        }));
  Generator.defineRegionInput([
        367,
        589,
        128,
        112
      ], (function (param) {
          return Generator.setBooleanInputValue("Hide Back Left Pant", !hideBackLeftPant);
        }));
  Generator.drawImage("Background", [
        0,
        0
      ]);
  Generator.drawTextureLegacy("Skin", {
        x: 0,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 164,
        y: 174,
        w: 64,
        h: 64
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 228,
        y: 174,
        w: 64,
        h: 64
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 292,
        y: 174,
        w: 64,
        h: 64
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 24,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 356,
        y: 174,
        w: 64,
        h: 64
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 0,
        w: 8,
        h: 8
      }, {
        x: 228,
        y: 110,
        w: 64,
        h: 64
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 0,
        w: 8,
        h: 8
      }, {
        x: 228,
        y: 238,
        w: 64,
        h: 64
      }, "Vertical", undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 196,
        y: 372,
        w: 32,
        h: 96
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 20,
        w: 8,
        h: 12
      }, {
        x: 228,
        y: 372,
        w: 64,
        h: 96
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 28,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 292,
        y: 372,
        w: 32,
        h: 96
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 32,
        y: 20,
        w: 8,
        h: 12
      }, {
        x: 324,
        y: 372,
        w: 64,
        h: 96
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 16,
        w: 8,
        h: 4
      }, {
        x: 228,
        y: 340,
        w: 64,
        h: 32
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 28,
        y: 16,
        w: 8,
        h: 4
      }, {
        x: 324,
        y: 468,
        w: 64,
        h: 32
      }, "Vertical", 90.0, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 12,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 62,
        y: 503,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 0,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 94,
        y: 503,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 4,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 126,
        y: 503,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 158,
        y: 503,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 4,
        y: 16,
        w: 4,
        h: 4
      }, {
        x: 126,
        y: 471,
        w: 32,
        h: 32
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 16,
        w: 4,
        h: 4
      }, {
        x: 126,
        y: 551,
        w: 32,
        h: 32
      }, "Vertical", undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 28,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 121,
        y: 621,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 153,
        y: 621,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 185,
        y: 621,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 24,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 217,
        y: 621,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 185,
        y: 589,
        w: 32,
        h: 32
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 24,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 185,
        y: 669,
        w: 32,
        h: 32
      }, "Vertical", undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 0,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 483,
        y: 503,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 4,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 515,
        y: 503,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 419,
        y: 503,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 12,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 451,
        y: 503,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 4,
        y: 16,
        w: 4,
        h: 4
      }, {
        x: 483,
        y: 503,
        w: 32,
        h: 32
      }, undefined, 180.0, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 16,
        w: 4,
        h: 4
      }, {
        x: 483,
        y: 583,
        w: 32,
        h: 32
      }, "Vertical", 180.0, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 24,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 431,
        y: 621,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 463,
        y: 621,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 367,
        y: 621,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 28,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 399,
        y: 621,
        w: 32,
        h: 48
      }, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 431,
        y: 621,
        w: 32,
        h: 32
      }, undefined, 180.0, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 24,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 431,
        y: 701,
        w: 32,
        h: 32
      }, "Vertical", 180.0, undefined);
  if (!hideHelmet) {
    Generator.drawTextureLegacy("Skin", {
          x: 32,
          y: 8,
          w: 8,
          h: 8
        }, {
          x: 164,
          y: 174,
          w: 64,
          h: 64
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 40,
          y: 8,
          w: 8,
          h: 8
        }, {
          x: 228,
          y: 174,
          w: 64,
          h: 64
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 48,
          y: 8,
          w: 8,
          h: 8
        }, {
          x: 292,
          y: 174,
          w: 64,
          h: 64
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 56,
          y: 8,
          w: 8,
          h: 8
        }, {
          x: 356,
          y: 174,
          w: 64,
          h: 64
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 40,
          y: 0,
          w: 8,
          h: 8
        }, {
          x: 228,
          y: 110,
          w: 64,
          h: 64
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 48,
          y: 0,
          w: 8,
          h: 8
        }, {
          x: 228,
          y: 238,
          w: 64,
          h: 64
        }, "Vertical", undefined, undefined);
  }
  if (!hideJacket) {
    Generator.drawTextureLegacy("Skin", {
          x: 16,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 196,
          y: 372,
          w: 32,
          h: 96
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 20,
          y: 36,
          w: 8,
          h: 12
        }, {
          x: 228,
          y: 372,
          w: 64,
          h: 96
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 28,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 292,
          y: 372,
          w: 32,
          h: 96
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 32,
          y: 36,
          w: 8,
          h: 12
        }, {
          x: 324,
          y: 372,
          w: 64,
          h: 96
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 20,
          y: 32,
          w: 8,
          h: 4
        }, {
          x: 228,
          y: 340,
          w: 64,
          h: 32
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 28,
          y: 32,
          w: 8,
          h: 4
        }, {
          x: 324,
          y: 468,
          w: 64,
          h: 32
        }, "Vertical", 90.0, undefined);
  }
  if (!hideFrontRightPant) {
    Generator.drawTextureLegacy("Skin", {
          x: 12,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 62,
          y: 503,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 0,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 94,
          y: 503,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 4,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 126,
          y: 503,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 8,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 158,
          y: 503,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 4,
          y: 32,
          w: 4,
          h: 4
        }, {
          x: 126,
          y: 471,
          w: 32,
          h: 32
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 8,
          y: 32,
          w: 4,
          h: 4
        }, {
          x: 126,
          y: 551,
          w: 32,
          h: 32
        }, "Vertical", undefined, undefined);
  }
  if (!hideFrontLeftPant) {
    Generator.drawTextureLegacy("Skin", {
          x: 12,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 121,
          y: 621,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 0,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 153,
          y: 621,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 4,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 185,
          y: 621,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 8,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 217,
          y: 621,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 4,
          y: 48,
          w: 4,
          h: 4
        }, {
          x: 185,
          y: 589,
          w: 32,
          h: 32
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 8,
          y: 48,
          w: 4,
          h: 4
        }, {
          x: 185,
          y: 669,
          w: 32,
          h: 32
        }, "Vertical", undefined, undefined);
  }
  if (!hideBackRightPant) {
    Generator.drawTextureLegacy("Skin", {
          x: 0,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 483,
          y: 503,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 4,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 515,
          y: 503,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 8,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 419,
          y: 503,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 12,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 451,
          y: 503,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 4,
          y: 32,
          w: 4,
          h: 4
        }, {
          x: 483,
          y: 503,
          w: 32,
          h: 32
        }, undefined, 180.0, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 8,
          y: 32,
          w: 4,
          h: 4
        }, {
          x: 483,
          y: 583,
          w: 32,
          h: 32
        }, "Vertical", 180.0, undefined);
  }
  if (!hideBackLeftPant) {
    Generator.drawTextureLegacy("Skin", {
          x: 8,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 431,
          y: 621,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 4,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 463,
          y: 621,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 0,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 367,
          y: 621,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 12,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 399,
          y: 621,
          w: 32,
          h: 48
        }, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 4,
          y: 48,
          w: 4,
          h: 4
        }, {
          x: 431,
          y: 621,
          w: 32,
          h: 32
        }, undefined, 180.0, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 8,
          y: 48,
          w: 4,
          h: 4
        }, {
          x: 431,
          y: 701,
          w: 32,
          h: 32
        }, "Vertical", 180.0, undefined);
  }
  if (actionFigure) {
    Generator.drawTextureLegacy("Skin", {
          x: 16,
          y: 0,
          w: 8,
          h: 8
        }, {
          x: 44,
          y: 254,
          w: 64,
          h: 96
        }, undefined, undefined, undefined);
    if (!hideHelmet) {
      Generator.drawTextureLegacy("Skin", {
            x: 48,
            y: 0,
            w: 8,
            h: 8
          }, {
            x: 44,
            y: 254,
            w: 64,
            h: 96
          }, undefined, undefined, undefined);
    }
    Generator.drawImage("Action-Figure", [
          0,
          0
        ]);
    if (showFolds) {
      Generator.drawImage("Action-Figure-Folds", [
            0,
            0
          ]);
    }
    if (showLabels) {
      Generator.drawImage("Action-Figure-Labels", [
            0,
            0
          ]);
    }
    
  }
  if (showFolds) {
    Generator.drawImage("Folds", [
          0,
          0
        ]);
  }
  if (showLabels) {
    return Generator.drawImage("Labels", [
                0,
                0
              ]);
  }
  
}

var generator_thumbnail = thumbnail;

var generator = {
  id: id,
  name: name,
  thumbnail: generator_thumbnail,
  video: undefined,
  instructions: undefined,
  images: images,
  textures: textures,
  script: script
};

exports.requireImage = requireImage;
exports.requireTexture = requireTexture;
exports.id = id;
exports.name = name;
exports.thumbnail = thumbnail;
exports.imageIds = imageIds;
exports.toImageDef = toImageDef;
exports.images = images;
exports.textures = textures;
exports.script = script;
exports.generator = generator;
/* thumbnail Not a pure module */
