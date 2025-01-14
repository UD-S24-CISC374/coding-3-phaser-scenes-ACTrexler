import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
    private player?: Phaser.Physics.Arcade.Sprite;
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private rightDoor?: Phaser.Physics.Arcade.Image;
    private floor?: Phaser.GameObjects.TileSprite;
    private enteredFrom?: string;

    constructor() {
        super({ key: "FirstScene" });
    }

    init(data: { enteredFrom: string; prevScene: string }) {
        this.enteredFrom = data.enteredFrom;
    }

    create() {
        this.floor = this.add.tileSprite(500, 300, 1000, 600, "stoneFloor");

        if (this.enteredFrom == "left") {
            this.player = this.physics.add.sprite(100, 300, "player");
        } else {
            this.player = this.physics.add.sprite(800, 300, "player");
        }
        this.player.setCollideWorldBounds(true);
        this.player.setScale(1.5);

        this.cursors = this.input.keyboard?.createCursorKeys();

        this.rightDoor = this.physics.add.image(900, 300, "door");

        this.add.text(810, 240, "Art Museum Entrance");

        this.physics.add.collider(
            this.player,
            this.rightDoor,
            () => {
                this.scene.start("SecondScene", {
                    enteredFrom: "left",
                    prevScene: "MainScene",
                });
            },
            undefined,
            this
        );
    }

    update() {
        this.checkCursors();
    }

    checkCursors() {
        if (!this.cursors) {
            return;
        }

        if (!this.cursors.left.isDown && !this.cursors.right.isDown) {
            this.player?.setVelocityX(0);
            this.player?.anims.play("turn");
        }

        if (!this.cursors.up.isDown && !this.cursors.down.isDown) {
            this.player?.setVelocityY(0);
        }

        if (this.cursors.left.isDown && !this.cursors.right.isDown) {
            this.player?.setVelocityX(-160);
            this.player?.anims.play("left", true);
        } else if (this.cursors.right.isDown && !this.cursors.left.isDown) {
            this.player?.setVelocityX(160);
            this.player?.anims.play("right", true);
        }
        if (this.cursors.up.isDown && !this.cursors.down.isDown) {
            this.player?.setVelocityY(-160);
        } else if (this.cursors.down.isDown && !this.cursors.up.isDown) {
            this.player?.setVelocityY(160);
        }
    }
}
