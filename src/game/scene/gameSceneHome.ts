import Phaser from 'phaser';

import {DATA_PATH as DATA_PATH_COMMON} from "../gameCommon.js";

import {game} from "../gameMain.ts";

const SCENE_PLAY='SCENE_PLAY';
// const HOUSE_SPRITE='building/house_01_5x.png';

// # SCENE TEMPLATE
class Scene_Home extends Phaser.Scene {
     canvas_size_x: number;
     canvas_size_y: number;
    //house: Phaser.GameObjects.Sprite;

    // Add scene with new Scene_Template(x,y) in gameMain.js
     constructor(canvas_size_x_: number, canvas_size_y_: number) {
          super(
               {key: 'SCENE_HOUSE'}
          ); 
          this.canvas_size_x = canvas_size_x_;
          this.canvas_size_y = canvas_size_y_;
          //this.house = {};
     }

    // Initialization
    // Load assets here
    preload(){

          this.load.path = DATA_PATH_COMMON;

          //let ext='png';
          let src_image_path = 'building/house-round-00-2x.png';
          let num_frames = 2;
          let frameW = 512*num_frames;
          let frameH = 512;
          
          this.load.spritesheet(
           {
               key: 'house',
               url: src_image_path,
               frameConfig: {
                   frameWidth:  frameW/num_frames,
                   frameHeight: frameH,
                   startFrame: 0,
                   endFrame:   num_frames,
               }
           }
        
          );
          // resize
          //game.scale.resize(window.innerWidth, window.innerHeight);
          game.scale.resize(frameW, frameH);
    }

    // Instantiate objects here
    create(){

          this.add.text(
               this.canvas_size_x*(1/2), this.canvas_size_y*(10/11),
               'WELCOME HOME'
          ).setTint(0xFFFFFF);

          let house = this.add.sprite(
               this.canvas_size_x, this.canvas_size_y/2, 
               'house'
          ).setInteractive();

          house.on('pointerover', () => {
               house.setFrame(1);
          }).on('pointerout', () => {
               house.setFrame(0);
          }).on('pointerdown', () => {
               house.setScale(0.9);
          }).on('pointerup', () => {
               console.log(`ENTER ${SCENE_PLAY}`);
               this.scene.start(SCENE_PLAY);
          });
    }

    // Scene Update Loop //
    update(){

    }
    render(){

    }
    // Loop
}

export {Scene_Home};