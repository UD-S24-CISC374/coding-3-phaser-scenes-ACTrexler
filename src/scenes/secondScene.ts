import Phaser from "phaser";

export default class SecondScene extends Phaser.Scene {
    private floor?: Phaser.GameObjects.TileSprite;
    private player?: Phaser.Physics.Arcade.Sprite;
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private rightDoor?: Phaser.Physics.Arcade.Image;
    private leftDoor?: Phaser.Physics.Arcade.Image;
    private enteredFrom?: string;

    constructor() {
        super({ key: "SecondScene" });
    }

    init(data: { enteredFrom: string; prevScene: string }) {
        this.enteredFrom = data.enteredFrom;
    }

    create() {
        console.log("starting second scene");
        this.floor = this.add.tileSprite(500, 300, 1000, 600, "stoneFloor");

        if (this.enteredFrom == "left") {
            this.player = this.physics.add.sprite(200, 300, "player");
        } else {
            this.player = this.physics.add.sprite(800, 300, "player");
        }
        this.player.setCollideWorldBounds(true);
        this.player.setScale(1.5);

        this.createAnims();

        this.cursors = this.input.keyboard?.createCursorKeys();

        this.rightDoor = this.physics.add.image(900, 300, "door");
        this.leftDoor = this.physics.add.image(100, 300, "door");
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
