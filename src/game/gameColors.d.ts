export const name = "gameColors";

// hex colors
const BLACK   = 0x000000;
const RED     = 0xFF0000;
const GREEN   = 0x00FF00;
const GREEN_1 = 0x3D8C40;
const BLUE    = 0x0000FF;
const BLUE_LL = 0xB1F2FF;
const YELLOW  = 0xFFFF00;
const FUCSHIA = 0xFF00FF;
const AQUA    = 0x00FFFF;
const WHITE   = 0xFFFFFF;
const GRAY    = 0x808080;
const GRAY_L  = 0xD3D3D3;

// * A more convenient way of exporting all items you want
// is to use a single export statement at the end of the module file.
export {
    BLACK  ,
    RED    ,
    GREEN  ,
    GREEN_1,
    BLUE   ,
    BLUE_LL,
    YELLOW ,
    FUCSHIA,
    AQUA   ,
    WHITE  ,
    GRAY   ,
    GRAY_L  
}; 

// usage:
// import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";