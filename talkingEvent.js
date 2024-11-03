let currentConversation = 'tutorial';
let convoIndex = 0;
let isTalkingSoStopMoving = false;

function say(whatToSay, player = ""){
    if (whatToSay==null){
        return;
    }
    initTextBox()
    textFont(convoFont);
    
    fill(255,255,255);
    background(0,0,0,70);
    textSize(100*windowWidth/colliderOriginalScreenWidth);
    text(whatToSay, getRelativeX(135)+50+ (textWidth(whatToSay)/2), height * 0.91);

    if (convoIndex==0||convoIndex==1){
        isTalkingSoStopMoving = true;
    } else {
        isTalkingSoStopMoving = false;
    }
}

function initTextBox(){
    
    fill(0, 100); // 0 for black, 100 for transparency
    noStroke(); // No border
    rect(0, height * 0.85, width, height * 0.15);
    image(player_profile, 0, height * 0.85, getRelativeX(135), getRelativeY(135))
}


let Conversations = {
    'tutorial':[ "Hi, I am Noah.(press z to continue...)" ,  "This is my farm! <z>", "You can use the WASD keys to move. <z>", ],
    'tutorialHouse':[ "This is my house. (press z to continue...)","You can go to the bed and press z to sleep.","..."],
    'tutorialFarm':['This is my field (press z to continue...)', 'Here you can grow crops and defend them',' from other animals and insects.'],
    'battleCrow': ['You see a Crow in your field eating your crops!', 'What would you like to do?', '1:Pesticide 2:Loud Noise 3:Kill it 4:Tranquilizer',"Press 123 or 4 to select (press z to go back)"],
    'battleWorm': ['You see a Jumping worm in your field! ', 'What would you like to do?', '1:Pesticide 2:Loud Noise 3:Kill it 4:Tranquilizer',"Press 123 or 4 to select (press z to go back)"],
    'Crow1': ['It does not work on the crow!', 'Instead you inhale some of it!','You are coughing and trying to breathe.' ,'The crow ate the crop!', "..."],
    'Crow2': ['You yell shoo! loudly!','The crow flies away!', 'You earned 2$ of allowance from your father!', "..."],
    'Crow3': ['You try to kill the crow with your slingshot!', 'You miss!', 'The crow flies away!', "..."],
    'Crow4': ['You get nearer to the crow!', 'The crow instead attacks you', 'you drop the tranquilizer!', 'You are searching for the tranquilizer','The crow ate the crop!', "You lost 2$.", "..."],
    'Worm1': ['You try to use pesticide on the worm!', 'It wiggles away and dies!', 'Your Crops are safe!', 'You earned 2$ of allowance from your father!', "..."],
    'Worm2': ['You decide to shoo the jumping worm away!', 'It does nothing!', 'The worm goes back into the soil and ','continues harming the soil.', "..." ],
    'Worm3': ['You try to stem on the worm!', 'You walk towards it!', 'The worm goes back into the soil! ' , "..."],
    'Worm4': ['The worm is too small to use a Tranquilizer!', 'It jumps back and then burrows deeper into the soil.' , "..."],
    "AskMarketEnoughAllowance":[],
    "MarketNotEnoughAllowance":["You don't have enough money to go to the market!", "Please come back after you have at least 5 dollars.", "..."],
    "Market": ["What would you like to buy?","1:EggPlant-$5 2:SurprisePlant-$10 3:Exit", "press 1 2 or 3 and select one option." ],
    "Market-NotEnough": ["You do not have enough money for this", 'please come back later', ],
    "Market-Bought":["Thank You for your purchase",'please come back later', "..."],
    "Market-exit":["Please come back later",'please come back later' ,"..."]
}



function initiateConversationIfNeeded(){

    if (isMarket & Conversations[currentConversation][convoIndex]=='...'){
        isMarket = false;
    }

    else if (Conversations[currentConversation][convoIndex]=='You earned 2$ of allowance from your father!'){
        allowance+=2;
        convoIndex+=1;
    }

    else if ((currentConversation=="battleCrow" || currentConversation=="battleWorm") & Conversations[currentConversation][convoIndex]=="Press 123 or 4 to select (press z to go back)"){
        convoIndex-=1;
    }

    else if ((currentConversation=="Market" & convoIndex==2)){
        convoIndex-=1;
    }


    else if (currentConversation!=null){
        
        
        if (convoIndex<Conversations[currentConversation].length){
            convoIndex+=1;
            
        } 
    }
}
