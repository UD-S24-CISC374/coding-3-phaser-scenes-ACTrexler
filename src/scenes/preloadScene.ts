import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.spritesheet("player", "assets/player.png", {
            frameWidth: 32,
            frameHeight: 48,
        });
        this.load.image("door", "assets/castledoors.png");
        this.load.image("stoneFloor", "assets/tilestonebricks.png");
        this.load.image("buddhaStatue", "assets/golden_buddha.png");
        this.load.image("fujinStatue", "assets/fujin_statue.png");
    }

    create() {
        this.createAnims();
        this.scene.start("MainScene", {
            enteredFrom: "left",
            prevScene: "PreloadScene",
        });
    }

    createAnims() {
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("player", {
                start: 0,
                end: 3,
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "turn",
            frames: [{ key: "player", frame: 4 }],
            frameRate: 20,
        });

        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("player", {
                start: 5,
                end: 8,
            }),
            frameRate: 10,
            repeat: -1,
        });
    }
}
