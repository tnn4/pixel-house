// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#aggregating_modules

// This bascially just re-exports everything but does it in one file to make finding things simpler.

// todo: convert js -> ts (DONE)
// export {Scene_Menu_Main} from "./scene/gameSceneMainMenu.js";
// export {Scene_Pause}     from "./scene/gameScenePause.js";
// export {Scene_Playing}   from "./scene/gameScenePlay.js"
// export {Scene_Pokemon}   from "./scene/gameScenePokemon.js";
// export {Scene_Template}  from "./scene/gameSceneTemplate.js";

// completed ts conversions'
export {Scene_Template}  from "./scene/gameSceneTemplate.ts";
export {Scene_Home}      from "./scene/gameSceneHome.ts";
export {Scene_Menu_Main} from "./scene/gameSceneMainMenu.ts";
export {Scene_Playing}   from "./scene/gameScenePlay.ts";
export {Scene_Pokemon}   from "./scene/gameScenePokemon.ts";
export {Scene_Pause}     from "./scene/gameScenePause.ts";

// usage: import {Scene_{a,b,c,d}} from "./gameSceneExports.js"