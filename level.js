let colliderOriginalScreenWidth = 1912;
let colliderOriginalScreenHeight = 930;

let clock = 0 // 0 is noon 
let night = false;
let is_inside_house = false;
const village_colliders =[
    {
        "x": -91,
        "y": 132,
        "w": 278,
        "h": 438
    },
    {
        "x": 227,
        "y": 129,
        "w": 446,
        "h": 357
    },
    {
        "x": 320,
        "y": 318,
        "w": 452,
        "h": 429
    },
    {
        "x": 365,
        "y": 126,
        "w": 707,
        "h": 207
    },
    {
        "x": 608,
        "y": 123,
        "w": 701,
        "h": 534
    },
    {
        "x": 311,
        "y": 459,
        "w": 704,
        "h": 534
    },
    {
        "x": 386,
        "y": 501,
        "w": 491,
        "h": 585
    },
    {
        "x": -76,
        "y": 456,
        "w": 272,
        "h": 525
    },
    {
        "x": 890,
        "y": 534,
        "w": 1013,
        "h": 642
    },
    {
        "x": 689,
        "y": 225,
        "w": 773,
        "h": 336
    },
    {
        "x": 701,
        "y": 600,
        "w": 866,
        "h": 711
    },
    {
        "x": 338,
        "y": 645,
        "w": 623,
        "h": 705
    },
    {
        "x": 569,
        "y": 708,
        "w": 689,
        "h": 816
    },
    {
        "x": 863,
        "y": 657,
        "w": 1022,
        "h": 771
    }
]
   
;
const house_colliders = []


function loadLevel(){
    
    if (is_inside_house){

        background(0,0,0)
        loadBackground(village_house,getRelativeX(560),getRelativeY(50),getRelativeX(600),getRelativeY(800));
        loadPlayer(player_x,player_y);
        loadHouseEvents();

    } else {
        
        loadPlayer(player_x,player_y);
        bg = village;
        loadBackground(village_overlay);
        loadVillageEvents();
    }
        if (night == false){
            dayEveningOverlay(clock)
            clock +=0.03

            if (clock >= 60){
                night =true;
            } 
        } else {
            dayNightOverlay(clock)
            clock -=0.03
            if (clock <= 0){
                night =false;
            }
        }
        
        
        listenPlayerControls();
        loadText()
    
}


function dayEveningOverlay(time){
    background(255,165,0,time);

}

function dayNightOverlay(time){
    background(0,0,200,time);

}


function detectCollision(x, y , colliders) {
    if (debugMode){
        return false;
    }
    for (let collider of colliders) {

        if (
            x+2*(((1920-1912)/1912)*1920) >= ((collider.x/colliderOriginalScreenWidth)* windowWidth) &&  //THE GAMECHANGER                       
            x <= ((collider.w/colliderOriginalScreenWidth)* windowWidth) &&            
            y >= ((collider.y/colliderOriginalScreenHeight)* windowHeight) &&                       
            y <= ((collider.h/colliderOriginalScreenHeight)* windowHeight)                
        ) {
            return true;  // Point is inside this collider
        }
    }
    return false; 
    
  }

  function loadText(){
    
    textFont(convoFont);
    textSize(100 * windowWidth/2560);
    textAlign(CENTER,CENTER);
    fill(255,255,255);
    
    text( "Allowance:"+allowance+".00$",windowWidth/5,50)

    text( "Plants:"+playerPlants.length,(windowWidth/2+windowWidth/4),50)

    textFont(convoFont);
    textSize(100 * windowWidth/2560);
    textAlign(CENTER,CENTER);
    fill(255,255,255);
    if (night==false && clock<30)
    {text( "Day",windowWidth/2,50);}
    if (night==false && clock>30)
    {text( "Evening",windowWidth/2,50);}
    if (night==true && clock>30)
    {text( "Night",windowWidth/2,50);}
    if (night==true && clock<30)
    {text( "Morning",windowWidth/2,50);}
}
    
  

  function loadVillageEvents(){

    if (player_x<= getRelativeX(320) && player_x>=getRelativeX(257) && player_y<=getRelativeY(427) && player_y>=getRelativeY(357))
        {
            
            is_inside_house = true;
            player_x = getRelativeX(-140)+(windowWidth/2);
            player_y = getRelativeY(180)+(windowHeight/2);
            player_sprite = player_up;
            colliders = house_colliders;
        }
  }

  function loadHouseEvents(){
    if (player_y>=getRelativeY(661)){
        is_inside_house = false;
        player_x = getRelativeX(290);
        player_y = getRelativeY(450);
        player_sprite = player_up;
        colliders = village_colliders;
        
    }
  }
