// html canvas element
const canvas = document.querySelector('#game');
// method [ CanvasRenderingContext2D ]
const ctx = canvas.getContext('2d');

// canvas properties
canvas.width = 1920;
canvas.height = 1080;

// animated background element
const background = new Image();
background.src = 'forest.png';

// animated player element
const playerSprite = new Image();
playerSprite.src = 'wizard.png';

// animated action element
const playerAction = new Image();
playerAction.src = 'magic.png';

// animated attack element
const playerAttack = new Image();
playerAttack.src = ' attack.png';

// animated hurt element
const playerHurt  = new Image();
playerHurt.src = ' hurt.png';

// animated death element
const playerDeath  = new Image();
playerDeath.src = ' death.png';

// animated enemy [ 1 ] element
const enemySprite = new Image();
enemySprite.src = 'enemy1.png';

// array [ keys ] : keystroke tracker
let keys = [];

// event [ keydown ] : add array keystroke
window.addEventListener('keydown', function(e) {
    
    // remove last array item
    keys.pop(e.key);

    // add current keystroke to keys array
    keys.push(e.key);
    
    // test
    console.log('keydown : ' + keys[0]);

});
// event [ keyup ] : delete array keystroke
window.addEventListener('keyup', function(e) {

    // delete [ e.key ] value from keys array
    delete keys[e.key];
    
    // remove [ e.key ] value from keys array
    keys.pop(e.key);
    
    // test
    console.log('key deleted : ' + keys[0]);

});


/*
    objects [ canvas-elements ] 

    contains :
        1. canvas X, Y values
        2. element Width, Height values
        3. animation frame X, Y values
        4. element speed value
        5. animation action moving boolean

    stores data values that are used to apply attributes
    to canvas elements via the [ drawSprite ] function

    collections :
        1. [ player ]
            a. player - main element
            b. action - animation frame
            c. attack - create new object
            d. health - loss of life point
            e. death - loss of life

        2. [ enemy ] 
            a. enemy - main element
            b. action - automatic track
            c. attack - proximity check
            d. death - loss of life
    
*/

// object [ player ] properties
const player = {

    // start position
    x: -1,
    y: 665,

    // element dimensions
    width: 402,
    height: 343,

    // animation frames
    frameX: 1,
    frameY: 1,

    // movement speed of element
    speed: -9,

    // animation action
    moving: false,

};
// object [ action ] properties
const action = {

    // start position
    x: player.x,
    y: player.y,

    // element dimensions
    width: 618,
    height: 391,
    
    // animation frames
    frameX: 0,
    frameY: 0,

    // movement speed of element
    speed: -9,

};
// object [ attack ] properties
const attack = {

    // attack start position
    x: player.x,
    y: player.y,

    // dimensions [ resize image in photoshop ]
    width: 25,
    height: 25,

    // movement speed of element
    speed: 9,

}

// object [ enemy ] properties
const enemy = {

    // enemy encounter start position
    x: 1715,
    y: 665,
    
    // element dimensions
    width: 343,
    height: 343,

    // movement speed of element
    speed: 6,

};

/*

    function [ drawSprite ]

    required parameters : 
        1. image source
        2. source X, Y values
        3. source Width, Height values
        4. destination X, Y values
        5. destination Width, Height values

        inits a function to take in all parameters and draw a 2d canvas element
        utilizes object data for parameter values

*/
function drawSprite(img, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight) {
    ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight);
};

// start animation variables
let fps, fpsInterval, startTime, now, then, elasped;

// function [ startAnimation ( fps ) ]
function startAnimation(fps) {

    // fps interval = milliseconds divided by fps value
    fpsInterval = 1000 / fps;

    // get date information and assign to then variable
    then = Date.now();

    // assign startTime to then value
    startTime = then;

    // init [ animate ] function
    animate();

}

// init [ startAnimation ] function at 60 fps
startAnimation(60);

let score = 0;
let gamepoints = 1;

let life = 3;
let hitpoints = 1;

// test calc values
console.log('life : ' + life);

// function [ collusionDetection ]
function collusionDetection() {
    
    // validate enemy position [ x ] against player position [ x ]
    if ( enemy.x == player.x ) {
        
        // calculate life
        life = life - hitpoints;

        // validate life between [ 3 and 1 ] : active life
        if ( life <= 3 && life >= 1 ) {

            // test calc values
            console.log('life : ' + life);

            // clear canvas element
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // draw background canvas image
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            // draw the player sprite [ player is hurt ]
            drawSprite(playerHurt, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height);

            // reset enemy [ x ] axis position
            enemy.x = 1715;

            // draw the enemy animation
            drawSprite(enemySprite, 0, 0, enemy.width, enemy.height, enemy.x, enemy.y, enemy.width, enemy.height);

            // test
            console.log('COLLUSION : player collusion - 1 hp ');

        }
        // validate life value [ 0 ]
        if ( life == 0 ) {

            // test calc values
            console.log('life : ' + life);

            // clear canvas element
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // draw background canvas image
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            // draw the player sprite [ player is hurt ]
            drawSprite(playerDeath, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height);
            
            
            // test
            console.log('GAME OVER');

        }
    }
    else {
        
        // test
        console.log('COLLUSION : none');
    
    }

}

// function [ animate ]
function animate() {

    // request animation frame
    requestAnimationFrame(animate);

    // get date information and assign to now variable
    now = Date.now();

    // assign [ elasped ] as now minus then values
    elasped = now - then;
    
    // validate fpsInterval against time elasped
    if (elasped > fpsInterval) {

        // calculate then time value
        then = now - ( elasped % fpsInterval );

        // clear canvas element
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw background canvas image
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        // draw the player sprite
        drawSprite(playerSprite, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height);

            // setInterval(() => {

        // draw the enemy animation
        drawSprite(enemySprite, 0, 0, enemy.width, enemy.height, enemy.x, enemy.y, enemy.width, enemy.height);
            
            // }, 1000);
        
        // init [ moveEnemy ] function
        moveEnemy();

        // init [ movePlayer ] function
        movePlayer();

        // init [ collusionDetection ] function
        collusionDetection();

        // init [ keybinds ] function
        keybinds();
    
    }

}; 

/*
    function [ keybinds ] keystroke interactions

    contains : 
        1. keystroke event listeners
        2. keystroke validation
        3. specific keystroke functions

        provides actions to specific keystrokes that the player can use to 
        interact with the video game elements

*/
function keybinds() {

     // validate if action key has been pressed [ s ]
     if (keys[0] == 's') {

        // clear canvas element
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw background canvas image
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        // draw the player action sprite
        drawSprite(playerAction, 0, 0, action.width, action.height, player.x, player.y, action.width, action.height);

        // produce an attack action / projectile to interact with enemy sprite
        drawSprite(playerAttack, 0, 0, action.width, action.height, attack.x, attack.y, action.width, action.height);

        // produce an attack action / projectile to interact with enemy sprite
        drawSprite(enemySprite, 0, 0, enemy.width, enemy.height, enemy.x, enemy.y, enemy.width, enemy.height);

        // init [ moveEnemy ] function
        moveEnemy();

        // get current position of enemy
        currentEnemyPosition = enemy.x;

        // validate attack [ x ] against player [ x ] value
        if (attack.x != player.x ) {

            // reset the attack coordinates
            attack.x = player.x,
            attack.y = player.y,

            // produce an attack action / projectile to interact with enemy sprite
            drawSprite(playerAttack, 0, 0, action.width, action.height, attack.x, attack.y, action.width, action.height);

            // init attack movement across [ x ] axis
            attack.x += setTimeout((attack.speed) * 2.5, 2000);

        }

        // validate attack position against current enemy position
        if (attack.x < currentEnemyPosition) {

            // produce an attack action / projectile to interact with enemy sprite
            drawSprite(playerAttack, 0, 0, action.width, action.height, attack.x, attack.y, action.width, action.height);

            // init attack movement across [ x ] axis
            attack.x += setTimeout((attack.speed) * 2.5, 2000);

            // test
            // console.log('attack enemy : ' + currentEnemyPosition);
        }
        if (attack.x > currentEnemyPosition) {

            // draw attack / projectile element
            drawSprite(playerAttack, 0, 0, action.width, action.height, attack.x, attack.y, action.width, action.height);

            attack.x = player.x;

            // init attack movement across [ x ] axis
            attack.x += attack.speed;

            // test
            // console.log('attack out of view');
        }

        
    }

} // [ keybinds ] function end

// function [ movePlayer ] : directional player movement
function movePlayer() {

    // default character movement
    player.moving = false;
    
    // validate arrow keys
    if (keys[0] == 'ArrowUp') {
        
        // move player along the [ Y ] axis
        player.y += player.speed;

        // test directions
        console.log('MOVE UPWARDS : ' + keys[0]);
    }
    if (keys[0] == 'ArrowDown') {

        // move player along the [ Y ] axis in a downward direction
        player.y -= player.speed;

        // test directions
        console.log('MOVE DOWNWARDS : ' + keys[0]);
    }
    if (keys[0] == 'ArrowRight') {

        // move player along the [ x ] axis in a forward direction
        player.x -= player.speed;
        // test directions
        console.log('MOVE RIGHT : ' + keys[0]);
    }
    if (keys[0] == 'ArrowLeft') {

        // move player along the [ x ] axis in a backwards direction
        player.x += player.speed;
        // test directions
        console.log('MOVE LEFT : ' + keys[0]);
    }

};



// enemt position variable
let currentEnemyPosition;

// function [ moveEnemy ]
function moveEnemy() {

    // change validation value to move enemy
    if (enemy.x > 1) {
        // move enemy sprite along the x axis at 2.5 times the speed
        enemy.x -= (enemy.speed) / 2;
    }

    // test
    // console.log('ENEMY ENCOUNTER');
}






























// function collusionDetection attack validation


// // validate enemy position [ x ] against attack position [ x ]
    // if (enemy.x == attack.x ) {

    //     // calculate player score
    //     score = score + gamepoints;

    //     // test calculations
    //     console.log('SCORE AS : ' + score);

    //     // clear canvas element
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);

    //     // draw background canvas image
    //     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    //     // reset enemy [ x ] axis position
    //     enemy.x = 1715;

    //     // draw the enemy animation
    //     drawSprite(enemySprite, 0, 0, enemy.width, enemy.height, enemy.x, enemy.y, enemy.width, enemy.height);
        
    //     // test
    //     console.log('COLLUSION : projectile collusion');

    // }




// function [ animate ]
// function animate() {

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

//     if (keys[0] == 's') {

//         // reset player canvas
//         ctx.clearRect(0, 0, player.width, player.height);

//         // redraw background behind new image
//         ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

//         // draw the action animation
//         drawSprite(playerAction, 0, 0, action.width, action.height, player.x, player.y, action.width, action.height)
        
//         // test directions
//         console.log('SHOOT : ' + keys[0]);
//     }
//     else {

//         // draw the player animation
//         drawSprite(playerSprite, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height);
    
//     }

//     // init [ movePlayer ] function
//     movePlayer();

//     // callback [ animate ] function
//     requestAnimationFrame(animate);

// }
// // init [ animate ] function
// // animate();