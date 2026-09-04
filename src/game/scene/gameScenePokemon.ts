import Phaser from 'phaser';

import {DATA_PATH as DATA_PATH_COMMON} from "../gameCommon.js";

import * as Color from "../gameColors.js";

const SCENE_PLAY = 'SCENE_PLAY';


// # SCENE_POKEMON
class Scene_Pokemon extends Phaser.Scene {
    canvas_size_x;
    canvas_size_y;
    
    //pika : Phaser.GameObjects.Sprite;

    // Add scene with new Scene_Template(x,y) in gameMain.js
    constructor(canvas_size_x_: number, canvas_size_y_: number) {
        super(
            {key: 'SCENE_POKEMON'}
        ); 
        this.canvas_size_x = canvas_size_x_;
        this.canvas_size_y = canvas_size_y_;

    }

    preload() {
        this.load.path=DATA_PATH_COMMON;

        let scale = 2
        let ext = 'png'
        // pikachu button
        this.load.spritesheet(
            {
                key: 'button_pikachu_ss',
                url: `monster/monster_pikachu_01_x${scale}_ss.png`,
                frameConfig: {
                    frameWidth:  32*scale,
                    frameHeight: 48*scale,
                }
            }
        );
        
        scale=4
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
    }

    create() {
        let pika : Phaser.GameObjects.Sprite;
        
        console.log('[SCENE_POKEMON]: create()');
        
        // Draw Text
        this.add.text(
            this.canvas_size_x*(1/2)-20, this.canvas_size_y*(1/4), 
            'PIKACHU'
        )
            .setTint(Color.BLACK);

        // Pikachu Button
        pika = this.add.sprite(
            this.canvas_size_x*(1/2), this.canvas_size_y*(1/4) + 50, 
            'button_pikachu_ss')
            .setInteractive()
        ;
        
        pika.on('pointerover', () => {
            console.log('[pikachu]: on');
            pika.setFrame(1);
        }).on('pointerout', () => {
            pika.setFrame(0);
        }).on('pointerdown', () => {
            pika.setFrame(1);
            pika.setScale(0.9);
        })
        .on('pointerup', () => {
            window.open('https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)', '_blank');
        });

        /*
        let button_arrow_L = this.add.image(
            {
                x: this.canvas_size_x *(1/12),
                y: this.canvas_size_y *(1/12),
                texture: 'arrows_ss',
                frame: 3,
            }
        );
        */

        let button_arrow_L2 = this.add.image(
            
                this.canvas_size_x *(1/12),
                this.canvas_size_y *(1/12),
                'arrows_ss',
                3,
            
        ).setInteractive();
        button_arrow_L2
            .on('pointerdown', () => {
                button_arrow_L2.setScale(0.9);
            })
            .on('pointerup', () => {
                this.scene.start(SCENE_PLAY);
            });
    }
}

export {Scene_Pokemon};