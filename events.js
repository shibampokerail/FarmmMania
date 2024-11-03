let hasEnteredHouseBefore = false;
let hasEnteredFarmBefore = false;
let isInFarm =  false;
let pestEncounter = false;
let goMarketQueryEnabled = false;
let currentEnemy;

function houseFirstEntry(){
    if (is_inside_house & !hasEnteredHouseBefore){
        currentConversation = 'tutorialHouse';
        convoIndex = 0;
        hasEnteredHouseBefore = true;
    }
}
 
function farmFirstEntry(){
    if (player_x> getRelativeX(1157) & player_y>getRelativeY(282) ){
        if (!hasEnteredFarmBefore)
        {
            currentConversation = 'tutorialFarm';
            convoIndex = 0;
            hasEnteredFarmBefore = true;
            initEnemies(20);
            
        }
        isInFarm = true;
        
    } else {
        isInFarm = false;
    }
}

function displayPests(){
    
    if (isInFarm & (enemies_location.length>0)){
        for (let i=0; i<enemies_location.length; i++)
            
        {
            // console.log(enemies_location[i].x, enemies_location[i].y)
            image(enemies_location[i].enemy, getRelativeX(enemies_location[i].x),enemies_location[i].y, 100,100 )
        
            if (player_x > enemies_location[i].x & player_x < enemies_location[i].x+100 & player_y+100 > enemies_location[i].y & player_y < enemies_location[i].y+100)
            {
                console.log("Encountering a pet")
                pestEncounter = true;
                currentEnemy = enemies_location[i];
                

            }
        }
    }

}

function gotoMarket(){

    if (player_x>=(windowWidth-50) & player_y<=getRelativeY(180) & player_y>=getRelativeY(30) & player_x>=(windowWidth-70)){
        
        goMarketQueryEnabled = true;
        
    }

    console.log(player_x, player_y);
    if (goMarketQueryEnabled){
        console.log("going to market")
        if (allowance>=5){
            goMarketQueryEnabled = false;
            
            convoIndex = 0;
            
            isMarket = true;
            currentConversation = "Market"
            player_x = getRelativeX(1800);
            
        } else {
            goMarketQueryEnabled = false;
            currentConversation = "MarketNotEnoughAllowance"
            convoIndex = 0;
            player_x = getRelativeX(1800);
            
        }
        
    }
    

}





function  loadEvents(){

    houseFirstEntry();
    farmFirstEntry();
    displayPests();
    gotoMarket();
    
}