// We do our setup here.

import Phaser from 'phaser';

// import {DATA_PATH as DATA_PATH_COMMON} from "./gameCommon.js";

import {
    Scene_Home, Scene_Menu_Main, Scene_Pause, 
    Scene_Playing, Scene_Pokemon
} from "./gameSceneExports.js";


function configureGame() : Phaser.Types.Core.GameConfig {
    const widescreen = {
        x: 16,
        y:  9,
    };

    // Set Resolution
    let current_scale =  50;

    // 800 * 450
    const canvas_size_x = widescreen.x * current_scale;
    const canvas_size_y = widescreen.y * current_scale;
    console.log(`Setting resolution to: ${canvas_size_x}, ${canvas_size_y}`);
    
    const config = {
        type:   Phaser.AUTO,
        width:  canvas_size_x,
        height: canvas_size_y,
        backgroundColor: '#fbf0e4',
        physics: {
            default: 'arcade',
            arcade: {
                 //gravity: { y:200 }
            }
        },
        scene: [
            new Scene_Home(canvas_size_x/2,canvas_size_y),
            new Scene_Playing(canvas_size_x, canvas_size_y), 
            new Scene_Pause(canvas_size_x, canvas_size_y), 
            new Scene_Menu_Main(canvas_size_x, canvas_size_y), 
            new Scene_Pokemon(canvas_size_x, canvas_size_y),
        ]
    };

    return config;
}

export {configureGame};