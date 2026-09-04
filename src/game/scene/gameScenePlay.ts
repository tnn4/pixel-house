import Phaser from 'phaser';

import {DATA_PATH} from "../gameCommon.js";

import * as Color from "../gameColors.js";

import {game} from "../gameMain.ts";

const SCENE_PAUSE='SCENE_PAUSE';
const SCENE_POKEMON='SCENE_POKEMON';
const SCENE_PLAY='SCENE_PLAY';
const SCENE_HOUSE='SCENE_HOUSE';

// # SCENE_PLAYING
class Scene_Playing extends Phaser.Scene {
    sceneName=SCENE_PLAY;
    isPaused_Global: boolean = false;
    canvas_size_x: number;
    canvas_size_y: number;

    // Add scene with new Scene_Template(x,y) in gameMain.js
    constructor(canvas_size_x_: number, canvas_size_y_: number) {
        super(
            {
                key: 'SCENE_PLAY',
            }
        );
        console.log(`${this.sceneName } CONSTRUCTOR CALLED`);
        this.canvas_size_x = canvas_size_x_;
        this.canvas_size_y = canvas_size_y_;
        

    }
    isPaused = false;

    preloadBuilding() {
        this.load.path=DATA_PATH;

        let scale;

        let imgW= 160;
        let imgH= 90;
        scale = 5;
        this.load.image(
            {
                key: 'floor-wood',
                url: `building/floor-wood-00-${scale}x.png`,
                frameConfig: {
                    frameWidth: imgW*scale,
                    frameHeight: imgH*scale
                }
            }
        );

        // todo: add wall
        imgW = 160;
        imgH = 90;
        scale = 5;
        this.load.image(
            {
                key: 'wall',
                url: `building/wall-00-${scale}x.png`,
                frameConfig: {
                    frameWidth: imgW*scale,
                    frameHeight: imgH*scale
                }
            }
        );

        imgW = 32;
        imgH = 32;
        scale = 4;
        this.load.spritesheet(
            {
                key: 'door',
                url: `building/door-00-${scale}x.png`,
                frameConfig: {
                    frameWidth: imgW*scale,
                    frameHeight: imgH*scale,
                    startFrame: 0,
                    endFrame: 1,
                }
            }

        )

    }

    preloadFurniture() {
        this.load.path=DATA_PATH;

        let scale;

        let ext;

        let id = '01';
        scale = 3;
        ext = 'png';
        let imgW= 128;
        let imgH = 128;
        this.load.image(
            {
                key: 'carpet',
                url: `furniture/carpet-${id}-${scale}x.${ext}`,
                frameConfig: {
                    frameWidth: imgW*scale,
                    frameHeight: imgH*scale,
                }
            }
        );
    }

    // fn()
    // LOAD data
    preload() {
        this.preloadBuilding();
        this.preloadFurniture();

        this.load.path=DATA_PATH;

        let scale;
        let x;
        let ext; // extension
        
        // Load furniture

        // Load table
        scale = 4;
        ext = 'png';
        this.load.spritesheet(
            {
                key: 'table',
                url: `furniture/table-00.${ext}`,
                frameConfig: {
                    frameWidth: 64*scale,
                    frameHeight: 64*scale,
                }
            }
        );

        // Load chair
        scale = 4;
        ext = 'png';
        this.load.spritesheet(
            {
                key: 'chair',
                url: `furniture/chair-00.${ext}`,
                frameConfig: {
                    frameWidth: 32*scale,
                    frameHeight: 32*scale,
                }
            }
        );

        // Load flower pot
        scale = 2;
        ext = 'png';
        this.load.spritesheet(
            {
                key: 'flower-pot',
                url: `furniture/flower-pot-00.${ext}`,
                frameConfig: {
                    frameWidth: 32*scale,
                    frameHeight: 32*scale,
                }
            }
        );

        // Load buttons

        // Load Github octocat image
        scale = 2;
        ext = 'png';
        this.load.spritesheet(
            {
                key: 'octocat_ss',
                url: `monster/monster_github_octocat_00_x${scale}_ss.${ext}`,
                frameConfig: {
                    frameWidth: 32*scale,
                    frameHeight: 32*scale,
                }
            }
        );

        // Load Nodejs image
        // Load Deno dino image
        scale = 2;
        ext = 'png';
        this.load.spritesheet(
            {
                key: 'node_ss',
                url: `monster/monster_nodejs_node_00_x${scale}_ss.${ext}`,
                frameConfig: {
                    frameWidth: 32*scale,
                    frameHeight: 32*scale,
                }
            }
        );

        // Load Deno dino image
        scale = 2;
        ext = 'png';
        this.load.spritesheet(
            {
                key: 'deno_ss',
                url: `monster/monster_deno_dino_00_x${scale}_ss.${ext}`,
                frameConfig: {
                    frameWidth: 32*scale,
                    frameHeight: 32*scale,
                }
            }
        );

        // Load Bun icon
        
        scale = 2;
        ext = 'png';
        this.load.spritesheet(
            {
                key: 'bun_ss',
                url: `monster/monster_bunjs_bun_00_x${scale}_ss.${ext}`,
                frameConfig: {
                    frameWidth: 32*scale,
                    frameHeight: 32*scale,
                }
            }
        );

        // Load Pokeball
        scale = 4;
        this.load.spritesheet(
            {
                key: 'button_pokeball_ss',
                url: `icon/icon_pokeball_00_x${scale}_ss.png`,
                frameConfig: {
                    frameWidth: 16*scale,
                    frameHeight: 16*scale,
                }
            }
        );

        // Load Exit Button
        scale = 4;
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

        x = 4;
        // load Pause Button
        this.load.spritesheet({
            key: 'button_pause_ss',
            url: 'button/button_pause_01_x4_ss.png',
            frameConfig: {
                frameWidth: 16*x,
                frameHeight: 16*x,
                startFrame: 0,
                endFrame: 1,
            }
        });

        x = 4;
        // load cursor
        this.load.spritesheet( 
            {
                key:'cursor',
                url: 'cursor/cursor_glove_00.png',
                frameConfig: {
                    frameWidth:  32,
                    frameHeight: 32,
                },
            }
        );
        

        // load Start Pause Button
        this.load.spritesheet(
            {
                key: 'button_pause_start_ss',
                url: 'button/button_pause_start_00.png',
                frameConfig: {
                    frameWidth:  32,
                    frameHeight: 16,
                },
            }
        );

        scale = 4;
        // load Arrow  buttons
        this.load.spritesheet(
            {
                key: 'button_arrow_ss',
                url: `button/button_arrow_02_x${scale}_ss.png`,
                frameConfig: {
                    frameWidth:  16*scale,
                    frameHeight: 16*scale,
                    startFrame: 0,
                    endFrame: 4,
                },
            }
        );

        scale = 4;
        // load ABXY buttons
        this.load.spritesheet(
            {
                key: 'button_abxy_ss',
                url: 'button/button_abxy_00_x4_ss.png',
                frameConfig: {
                    frameWidth:  16*scale,
                    frameHeight: 16*scale,
                    startFrame: 0,
                    endFrame: 4,
                },
            }
        );

        console.log(`${this.sceneName} preloaded()`)
    }

    createBuilding() {
        let anchorBX = this.canvas_size_x*(1/2);
        let anchorBY = this.canvas_size_y*(1/2);
        
        this.add.image(
            anchorBX, anchorBY,
            'wall'
        );
        this.add.image(
            anchorBX, anchorBY,
            'floor-wood'
        );

        // Back Door
        let backDoor = this.add.sprite(
            anchorBX, anchorBY-80,
            'door'
        ).setInteractive();
        backDoor.on('pointerover', () => {
            backDoor.setFrame(1);
            backDoor.setScale(1);
        }).on('pointerout', () => {
            backDoor.setFrame(0);
            backDoor.setScale(1);
        }).on('pointerdown', () => {
            backDoor.setScale(0.8);
        }).on('pointerup', () => {
            backDoor.setScale(1);
            this.scene.start(SCENE_POKEMON);
        })
    }

    createFurniture() {
        let anchorFX = this.canvas_size_x*(1/4);
        let anchorFY = this.canvas_size_y*(1/2);
        
        // Furniture
        
        this.add.image(
            anchorFX, anchorFY+80,
            'carpet'
        );
        // chair
        this.add.sprite(
            anchorFX, anchorFY-100, 
            'chair');
        // table
        this.add.sprite(
            anchorFX, anchorFY, 
            'table');
        // flower pot
        this.add.sprite(
            anchorFX, anchorFY-40, 
            'flower-pot');
    }

    // fn()
    // CREATE OBJECTS
    create() {
        //let unit_size;
        
        game.scale.resize(this.canvas_size_x, this.canvas_size_y);

        // Welcome
        this.add.text(
            this.canvas_size_x*(7/8), this.canvas_size_y*(11/12),
            "Welcome",
            {color: '#000000'}
        );
        //this.Keys_Cursor = this.input.keyboard.createCursorKeys();
        this.createBuilding();
        this.createFurniture();

        // Positioning data
        let anchorX = this.canvas_size_x*(1/12);
        let anchorY = this.canvas_size_y*(1/12);
        let divX = 100;

        // POKEBALL BUTTON
        let button_pokeball = this.add.sprite(
            anchorX, anchorY, 
            'button_pokeball_ss')
            .setInteractive();
        button_pokeball.on('pointerover', () => {
            button_pokeball.setFrame(1);
            button_pokeball.setScale(1.1);
        }).on('pointerout', () => {
            button_pokeball.setFrame(0);
            button_pokeball.setScale(1);
        }).on('pointerdown', () => {
            button_pokeball.setScale(0.8);
        }).on('pointerup', () => {
            button_pokeball.setScale(1);
            this.scene.start(SCENE_POKEMON);
        })

        // NODE BUTTON
        let button_octocat = this.add.sprite(
            anchorX+divX, anchorY,
            'octocat_ss')
            .setInteractive();
        
        button_octocat
            .on('pointerover', () => {
                button_octocat.setFrame(1);
            })
            .on('pointerout', () => {
                button_octocat.setFrame(0);
                button_octocat.setScale(1);
            })
            .on('pointerdown', () => {
                button_octocat.setScale(0.8);
                button_octocat.setFrame(1);
            })
            .on('pointerup', () => {
            button_octocat.setScale(1);
            button_octocat.setFrame(0);
            setTimeout(() => {
                window.open("https://github.com", "_blank");
            });
            
        });

        // NODE BUTTON
        let button_node = this.add.sprite(
            anchorX+divX*2, anchorY,
            'node_ss')
            .setInteractive();
        
        button_node
            .on('pointerover', () => {
                button_node.setFrame(1);
            })
            .on('pointerout', () => {
                button_node.setFrame(0);
                button_node.setScale(1);
            })
            .on('pointerdown', () => {
                button_node.setScale(0.8);
                button_node.setFrame(1);
            })
            .on('pointerup', () => {
            button_node.setScale(1);
            window.open("https://nodejs.org", "_blank");
        });

        // DENO BUTTON
        
        let button_deno = this.add.sprite(
            anchorX+divX*3, anchorY,
            'deno_ss')
            .setInteractive();

        button_deno.on('pointerover', () => {
            button_deno.setFrame(1);
        })
        .on('pointerout', () => {
            button_deno.setFrame(0);
            button_deno.setScale(1);
        })
        .on('pointerdown', () => {
            button_deno.setScale(0.8);
            button_node.setFrame(1);
        })
        .on('pointerup', () => {
            button_deno.setScale(1);
            button_node.setFrame(0);
            window.open("https://deno.com", "_blank");
        });

        // BUN BUTTON
        let button_bun = this.add.sprite(
            anchorX+divX*4, anchorY,
            'bun_ss')
            .setInteractive();
        button_bun.on('pointerover', () => {
            button_bun.setFrame(1);
        })
        .on('pointerout', () => {
            button_bun.setFrame(0);
            button_bun.setScale(1);
        })
        .on('pointerdown', () => {
            button_bun.setScale(0.8);
            button_bun.setFrame(1);
        })
        .on('pointerup', () => {
            button_bun.setScale(1);
            button_bun.setFrame(0);
            window.open("https://bun.sh/", "_blank");
        });



        // EXIT BUTTON
        let button_exit = this.add.sprite(
            this.canvas_size_x*(1/2), 
            this.canvas_size_y*(7/8), 
            'button_exit_ss'
        ).setInteractive();
        button_exit.on('pointerover', () => {
            button_exit.setFrame(1);
        }).on('pointerdown', () => {
            button_exit.setFrame(1);
            button_exit.setTint(Color.BLUE_LL);
            button_exit.setScale(0.8);
        }).on('pointerout', () => {
            button_exit.setFrame(0);
            button_exit.setScale(1);
            button_exit.clearTint();
        }).on('pointerup', () => {
            button_exit.setScale(1);
            this.scene.start(SCENE_HOUSE);
        });
        // EXIT_BUTTON

        // PAUSE_BUTTON
        let button_pause2 = this.add.sprite(
            this.canvas_size_x * (6/8), 
            this.canvas_size_y * (1/12), 
            'button_pause_ss'
        );

        button_pause2.setInteractive();
        button_pause2.on('pointerover', () => {
            //button_pause2.setTint(hex_BLUE);
            button_pause2.setFrame(1); // this.fn() <-- not a function 
        });
        button_pause2.on('pointerout', () => {
            //button_pause2.clearTint();
            button_pause2.setScale(1);
            button_pause2.setFrame(0);
        });
        button_pause2.on('pointerdown', () => {
            //button_pause2.setTint(hex_BLUE);
            button_pause2.setScale(0.8);
        });
        button_pause2.on('pointerup', () => {
            this.scene.start(SCENE_PAUSE);
        })
        // PAUSE_BUTTON END




        

    }
    // end create()

    // Game Loop: https://phaser.io/phaser3/contributing/part7
    // RAF = request animation frame handler

    // params
    // time = current time
    // delta = delta time (ms) since last frame
    /*
    update(time: number, delta: number) {
        //console.log(`SCENE_PLAY(time): ${time}`);
        //console.log(`SCENE_PLAY(delta): ${delta}`);

    }
    */
}

export {Scene_Playing};