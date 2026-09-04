import Phaser from 'phaser';

import {DATA_PATH} from "../gameCommon.js";

import * as Color from "../gameColors.js";

// # SCENE MENU
class Scene_Menu_Main extends Phaser.Scene {
    
    //Button_Exit;

    canvas_size_x: number;
    canvas_size_y: number;
    constructor (canvas_size_x_: number, canvas_size_y_: number) {
        super(
            { key: 'SCENE_MAIN_MENU'}
        )
        this.canvas_size_x = canvas_size_x_;
        this.canvas_size_y = canvas_size_y_;
    }

    preload() {
        this.load.path=DATA_PATH;
        
        // Load button exit
        let scale = 4;
        this.load.spritesheet(
            {
                key: 'button_exit_ss',
                url: `button/button_exit_00_x${scale}_ss.png`,
                frameConfig: {
                    frameWidth: 16*scale,
                    frameHeight: 16*scale,
                }
            }
        );

        scale = 4;
        this.load.spritesheet(
            {
                key: 'button_start_ss',
                url: `button/button_start_00_x${scale}_ss.png`,
                frameConfig: {
                    frameWidth: 16*scale,
                    frameHeight: 16*scale,
                }
            }
        );


    }

    create() {
        // TEXT
        this.add.text(
            this.canvas_size_x*(1/8), 
            this.canvas_size_y*(1/8), 
            "MAIN MENU")
            .setTint(Color.BLACK);
        
        // EXIT BUTTON
        this.add.sprite(
            this.canvas_size_x*(7/8), 
            this.canvas_size_y*(1/4), 
            'button_exit_ss');
        
        // START BUTTON
        let button_start = this.add.sprite(
            this.canvas_size_x/2, 
            this.canvas_size_y/2, 
            'button_start_ss')
            .setInteractive();
        button_start
        .on('pointerdown', () => {
            button_start.setFrame(1);
            button_start.setTint(Color.BLUE_LL);
            button_start.setScale(0.8);
        })
        .on('pointerup', () => {
            button_start.setScale(1);
            this.scene.start('scene_playing');
        })
        .on('pointerout', () => {
            button_start.setFrame(0);
            button_start.setScale(1);
            button_start.clearTint();
        });
    }
}

export {Scene_Menu_Main};