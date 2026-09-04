import Phaser from 'phaser';

import {DATA_PATH} from "../gameCommon.js";

import * as Color from "../gameColors.js";

const SCENE_PLAY='SCENE_PLAY';

// # SCENE PAUSE
class Scene_Pause extends Phaser.Scene {
    
    canvas_size_x: number;
    canvas_size_y: number;
    // button_start: Phaser.GameObjects.Image;
    // button_start2: Phaser.GameObjects.Image;

    

    // Add scene with new Scene_Template(x,y) in gameMain.js
    constructor(canvas_size_x_: number, canvas_size_y_: number) {
        super(
            {key: 'SCENE_PAUSE'}
        ); 
        this.canvas_size_x = canvas_size_x_;
        this.canvas_size_y = canvas_size_y_;
        //this.house = {};
    }

    // load assets here
    preload() {
        
        this.load.path=DATA_PATH;
        // start button
        this.load.spritesheet(
            {
                key: 'button_start',
                url: 'button/button_start_00_x4_ss.png',
                frameConfig: {
                    frameWidth:  16*4,
                    frameHeight: 16*4,
                },
            }
        );
        
        // DEBUG
        this.load.image(
            {
                key: 'button_start2',
                url: 'button/button_start_00_x4_ss.png'
            }
        );
        // cursor
        this.load.spritesheet(
            {
                key: 'cursor',
                url: 'cursor/cursor_glove_00.png',
                frameConfig: {
                    frameWidth:  32,
                    frameHeight: 32,
                },
            }
        );
        console.log("SCENE PAUSE: preloaded");
    }



// SCENE_PAUSE
    create() {


        
        // TEXT
        this.add.text(
            this.canvas_size_x*(1/8),
            this.canvas_size_y*(1/8),
            'PAUSED',
        ).setTint(Color.BLACK);

        //let button_start: Phaser.GameObjects.Sprite 
        //    = this.add.sprite(this.canvas_size_x/2, this.canvas_size_y/2, 'button_start');
        
        // Button start 2
        let button_start2: Phaser.GameObjects.Image 
            = this.add.image(
                this.canvas_size_x/2, this.canvas_size_y/2, 
                'button_start2'
            );
        
        button_start2.setInteractive();
        button_start2
        .on('pointerover', () => {
            console.log('[button_start]: got hovered');
            button_start2.setTint(Color.BLUE_LL);
        });
        button_start2
        .on('pointerout', () => {
            button_start2.clearTint();
        })
        button_start2
        .on('pointerdown', () => {
            console.log('[button_start2]: got clicked');
            button_start2.setTint(Color.BLUE);
            button_start2.setScale(0.8);
            // this.scene.start('scene_playing');
        });
        button_start2.on('pointerup', () => {
            button_start2.setScale(1);
            this.scene.start(SCENE_PLAY);
        });

        // CURSOR //
        /*
            this.input.setDefaultCursor(
            'url(../art/cursor/cursor_glove_00.png), pointer'
        );
        */
        console.log("SCENE PAUSE: created()");
    }

    update() {
        
    }
}

export {Scene_Pause};