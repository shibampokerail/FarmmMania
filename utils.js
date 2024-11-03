

function loadBackground(img, x=0,y=0, width=windowWidth, height=windowHeight){
    image(img,x,y,width,height);
}

function loadPlayer(x, y){
    noStroke();
    fill(0, 0, 0, 150);
    ellipse(x+40, y+100, 40, 20);
    image(player_sprite, x,y, 90, 110);
}

function toggleMusic(){
    if (bgMusic.isPlaying()){
        bgMusic.stop();
    } else {
        bgMusic.play();
    }
}

function loadScreen(){
    loadBackground(bg);
    
    if (isMenuScreenActive){
        loadMenu();
    } else if (isPaused){
        menuScreenMusic.stop();
        battleMusic.stop();
        gameMusic.stop()
        if (!pauseScreenMusic.isPlaying()){
            pauseScreenMusic.play();
        }
        loadPauseMenu();
    }
    else if (pestEncounter){
        pauseScreenMusic.stop();
        gameMusic.stop();
        //console.log("HLOOOOOO!!!!");
        bg = battle_bg;
        if (!battleMusic.isPlaying()){
            battleMusic.play();
        }
        battle(currentEnemy);
        say(Conversations[currentConversation][convoIndex]);
    }
    else if (isMarket){
        pauseScreenMusic.stop();
        gameMusic.stop();
        bg = market_bg;

        Market()
        say(Conversations[currentConversation][convoIndex]);
    }
    else {   
        battleMusic.stop();
        menuScreenMusic.stop();
        if (!gameMusic.isPlaying()){
            gameMusic.play()
        }
        
        pauseScreenMusic.stop();
        loadEvents();
        loadLevel();
        say(Conversations[currentConversation][convoIndex]);
        
        debug();
    }
    
}

function listenPlayerControls(){
    if (!isTalkingSoStopMoving){
        if (keyIsDown(87)) { 
            player_sprite.play()
            player_sprite = player_up;
            
            if (!detectCollision(player_x, player_y-player_speed, colliders)){
                player_y-=player_speed;
            }
            
        } 
        else if (keyIsDown(65)) { 
            player_sprite.play()
            player_sprite = player_left; 
            if (!detectCollision(player_x-player_speed, player_y, colliders)){
                player_x-=player_speed;
            }
        } 
        else if (keyIsDown(83)) { 
            player_sprite.play()
            player_sprite = player_down; 
            if (!detectCollision(player_x, player_y+player_speed, colliders)){
                player_y+=player_speed;
            }
        }
        else if (keyIsDown(68)) { 
            player_sprite.play()
            player_sprite = player_right; 
            if (!detectCollision(player_x+player_speed, player_y, colliders)){
                player_x+=player_speed;
            }
        }  else{
            player_sprite.reset();
            player_sprite.pause();
        }

    } else {
            player_sprite.reset();
            player_sprite.pause();
    }
    

    
    
}


let tempCollider = {x:"",y:"",w:"",h:""}
function keyPressed(){
    if (key === 'q') {
        debugMode = !debugMode
        console.log("Debug Mode toggle");
      }
    if (keyCode===32){
        
        if (tempCollider.x==""){
            tempCollider.x =player_x;
            tempCollider.y =player_y;
        } else {
            tempCollider.h = player_y;
            tempCollider.w = player_x;
            colliders.push(tempCollider);
            tempCollider = {x:"",y:"",w:"",h:""}

            console.log(colliders);
        }
    }
    if (key === 'e') {
        colliders.pop()
        console.log(colliders);
    }
    
    if (keyCode == ESCAPE && !isMenuScreenActive){
        isPaused = !isPaused;

    }
    
    if (key === 'm'){
        toggleMusic();
    }

    if (key === 'z'){
        initiateConversationIfNeeded();
    }

    if (pestEncounter && convoIndex==2){ //battle moveset menu
        if (key === '1'){
            if(currentConversation=='battleCrow'){
                currentConversation = "Crow1"
                convoIndex = 0;
            }
            if(currentConversation=='battleWorm'){
                currentConversation = "Worm1"
                convoIndex = 0;
            }
        } else if (key==='2') {
            if(currentConversation=='battleCrow'){
                currentConversation = "Crow2"
                convoIndex = 0;
            }
            if(currentConversation=='battleWorm'){
                currentConversation = "Worm2"
                convoIndex = 0;
            }

        } else if (key==='3') {
            if(currentConversation=='battleCrow'){
                currentConversation = "Crow3"
                convoIndex = 0;
            }
            if(currentConversation=='battleWorm'){
                currentConversation = "Worm3"
                convoIndex = 0;
            }

        }
        else if (key==='4') {
            if(currentConversation=='battleCrow'){
                currentConversation = "Crow4"
                convoIndex = 0;
            }
            if(currentConversation=='battleWorm'){
                currentConversation = "Worm4"
                convoIndex = 0;
            }

        }

    }

    if (isMarket){
        if (key === '1'){
            if (allowance<5){
                currentConversation = "Market-NotEnough"
                convoIndex = 0
            } else {
                playerPlants.push(eggplant)
                allowance = allowance - 5;
                currentConversation = "Market-Bought"
                convoIndex = 0
            }
        }
        if (key === '2'){
            if (allowance<10){
                currentConversation = "Market-NotEnough"
                convoIndex = 0
            } else {
                playerPlants.push(surprize)
                allowance = allowance - 10;
                currentConversation = "Market-Bought"
                convoIndex = 0
            }
        }

        if (key === '3'){
            isMarket = false;
            player_x = player_x - 30;
            
        }
        

    }

}

function debug(){
    if (debugMode){
        debugColliders();
       
    }
   
}

function debugColliders(){
    for (let collider of colliders) {
        let square = collider
        let  width = (square.w) - square.x;
        let height = square.h - square.y;
        fill(0, 0, 255);
        rect((square.x+35), (square.y+100), width, height);
    }
}

function getRelativeX(x){
   return (x/colliderOriginalScreenWidth)* windowWidth

}

function getRelativeY(y){
   return (y/colliderOriginalScreenHeight)* windowHeight

}