let menuScreen,pauseScreen,village,village_overlay,village_house,bg5;
let menuFont, convoFont;
let debugMode = false;
let isMenuScreenActive = true; //this is true  
let isPaused = false;
let bg, battle_bg, market_bg;

let menuScreenMusic, pauseScreenMusic, gameMusic;
let bgMusic, battleMusic;


let player_up, player_down, player_right, player_left;
let player_sprite;
let player_profile;

let crow;
let worm;

let eggplant, surprize;

let player_x = 290;
let player_y = 450;
let player_speed = 5;//debug change it to 4 or 5

let colliders;

let allowance = 10;

function preload(){
    menuScreen = loadImage(`./assets/bg/MenuScreen.gif`);
    pauseScreen = loadImage(`./assets/bg/PauseScreen.gif`);

    menuScreenMusic = loadSound('./assets/music/HomeScreen.mp3');
    pauseScreenMusic = loadSound('./assets/music/PauseMusic.mp3');
    gameMusic = loadSound('./assets/music/gameMusic.mp3');
    battleMusic = loadSound('assets/music/battleMusic.mp3');

    village = loadImage(`./assets/bg/lvl1farm.gif`);
    village_overlay = loadImage(`./assets/bg/village_overlay.png`);
    village_house = loadImage(`./assets/bg/House.png`);

    battle_bg = loadImage(`./assets/bg/battle_bg.jpg`);
    market_bg  = loadImage(`./assets/bg/market.png`);

    eggplant = loadImage(`./assets/plants/eggplant.gif`);
    surprize = loadImage(`./assets/plants/surprize.gif`);

    menuFont = loadFont("./assets/fonts/font1.otf");
    convoFont =loadFont("./assets/fonts/orange-kid.otf");

    player_profile = loadImage(`./assets/sprites/player/noah_profile.png`);
    player_up = loadImage(`./assets/sprites/player/noah_up.gif`);
    player_down = loadImage(`./assets/sprites/player/noah_down.gif`);
    player_right = loadImage(`./assets/sprites/player/noah_right.gif`);
    player_left = loadImage(`./assets/sprites/player/noah_left.gif`);

    crow = loadImage(`./assets/sprites/enemies/crow.gif`);
    worm = loadImage(`./assets/sprites/enemies/worm.gif`);

    player_sprite = player_down;
    bg = menuScreen;
    bgMusic = menuScreenMusic;
    colliders = village_colliders;
    player_x =  getRelativeX(290);
    player_y = getRelativeY(450);
}
