import Phaser from "phaser";

export default class SecondScene extends Phaser.Scene {
    private player?: Phaser.Physics.Arcade.Sprite;
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private rightDoor?: Phaser.Physics.Arcade.Image;

    constructor() {
        super({ key: "SecondScene" });
    }

    create() {}
}
