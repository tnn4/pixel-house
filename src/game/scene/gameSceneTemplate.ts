import Phaser from 'phaser';

// import * as Color from "../gameColors.js";

import {DATA_PATH as DATA_PATH_COMMON} from "../gameCommon.js";

// # SCENE TEMPLATE
class Scene_Template extends Phaser.Scene {
    canvas_size_x: number;
    canvas_size_y: number;
    // Add scene with new Scene_Template(x,y) in gameMain.js
    constructor(canvas_size_x_: number, canvas_size_y_: number) {
        super(
            {key: 'CHANGE_THIS_SCENE_NAME'}
        ); 
        this.canvas_size_x = canvas_size_x_;
        this.canvas_size_y = canvas_size_y_;
    }

    // Initialization
    // Load assets here
    preload(){
        this.load.path = DATA_PATH_COMMON;

        /*
        let ext='png'
        this.load.spritesheet(
            {
                key: 'arrows_ss',
                url: `button/button_arrow_02_x${scale}_ss.${ext}`,
                frameConfig: {
                    frameWidth:  16*scale,
                    frameHeight: 16*scale,
                    startFrame: 0,
                    endFrame:   3,
                }
            }
        );
        */
    }

    // Instantiate objects here
    create(){
        /* Example:
        // Draw Text
        this.add.text(
            canvas_size_x*(1/12), canvas_size_y*(1/12), 
            'SCENE - POKEMON'
        )
            .setTint(Color.BLACK);

        // Pikachu Button
        this.pika = this.add.sprite(canvas_size_x/2, canvas_size_y/2, 'button_pikachu_ss')
            .setInteractive();
        this.pika.on('pointerover', () => {
            console.log('[pikachu]: on');
            this.pika.setFrame(1);
        }).on('pointerout', () => {
            this.pika.setFrame(0);
        }).on('pointerdown', () => {
            this.pika.setFrame(1);
            this.pika.setScale(0.9);
        })
        .on('pointerup', () => {
            window.open('https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)', '_blank');
        });
        */
    }

    // Scene Update Loop //
    update(){

    }
    render(){

    }
    // Loop
}

export {Scene_Template};