let initialEncounter = false
function battle(pest)
{   
    
    enemyDisplay(pest.enemy)
    if (pest.enemy===worm && !initialEncounter){
        currentConversation = 'battleWorm';
        convoIndex = 0;
        initialEncounter = true;


    } else if (pest.enemy===crow && !initialEncounter){
        currentConversation = 'battleCrow';
        convoIndex = 0;
        initialEncounter = true;
    }

    if (Conversations[currentConversation][convoIndex]=="..." && pestEncounter){
        convoIndex+=1;
        console.log("HelloWorld")
        initialEncounter = false;
        pestEncounter = false;
        enemies_location = enemies_location.filter( creature => creature !== pest)
        

    }
    
    if (night == false){
        dayEveningOverlay(clock)
        clock +=0.05

        if (clock >= 60){
            night =true;
        } 
    } else {
        dayNightOverlay(clock)
        clock -=0.05
        if (clock <= 0){
            night =false;
        }}

}

function enemyDisplay(enemy){
    image(enemy, windowWidth/2, windowHeight/2.1,  300, 300)
}