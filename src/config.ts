import Phaser from "phaser";
import FirstScene from "./scenes/firstScene";
import SecondScene from "./scenes/secondScene";
import ThirdScene from "./scenes/thirdScene";
import FourthScene from "./scenes/fourthScene";
import PreloadScene from "./scenes/preloadScene";

const DEFAULT_WIDTH = 1000;
const DEFAULT_HEIGHT = 600;

export const CONFIG = {
    title: "My Untitled Phaser 3 Game",
    version: "0.0.1",
    type: Phaser.AUTO,
    backgroundColor: "#ffffff",
    scale: {
        parent: "phaser-game",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
    },
    scene: [PreloadScene, FirstScene, SecondScene, ThirdScene, FourthScene],
    physics: {
        default: "arcade",
        arcade: {
            debug: false,
            gravity: { y: 0 },
        },
    },
    input: {
        keyboard: true,
        mouse: true,
        touch: true,
        gamepad: false,
    },
    render: {
        pixelArt: false,
        antialias: true,
    },
};
