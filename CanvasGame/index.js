// html canvas element
const canvas = document.querySelector('#game');
// method [ CanvasRenderingContext2D ]
const ctx = canvas.getContext('2d');

// canvas properties
canvas.width = 1920;
canvas.height = 1080;

// array [ keys ]
let keys = [];

// object [ player ] properties
const player = {

    // start position
    x: -60,
    y: 665,

    // dimensions [ resize image in photoshop ]
    width: 402,
    height: 343,

    // animation frames
    frameX: 1,
    frameY: 1,

    // movement speed of element
    speed: -5,

    // animation action
    moving: false,

};
// object [ action ] properties
const action = {

    // animation frames
    frameX: 0,
    frameY: 0,

    // dimensions [ resize image in photoshop ]
    width: 618,
    height: 391,
}
// object [ enemy ] properties
const enemy = {

    // enemy encounter start position
    x: 1715,
    y: 665,
    
    // dimensions [ resize image in photoshop ]
    width: 343,
    height: 343,

    // movement speed of element
    speed: -3,

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
    speed: -3,

}

// animated player element
const playerSprite = new Image();
playerSprite.src = 'wizard.png';

// animated action element
const playerAction = new Image();
playerAction.src = 'magic.png';

const playerAttack = new Image();
playerAttack.src = ' attack.png';

// animated enemy [ 1 ] element
const enemySprite = new Image();
enemySprite.src = 'enemy1.png';

// animated background element
const background = new Image();
background.src = 'forest.png';

// function [ drawSprite ]
function drawSprite(img, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight) {
    ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight);
};

// event [ keydown ] : add array keystroke
window.addEventListener('keydown', function(e) {
    
    // remove last array item
    keys.pop(e.key);

    // add current keystroke to keys array
    keys.push(e.key);
    
    // test
    console.log('keydown : ' + keys[0]);

    // output player position
    console.log('PLAY POS [ X ] : ' + player.x);
    console.log('PLAY POS [ y ] : ' + player.y);

});
// event [ keyup ] : delete array keystroke
window.addEventListener('keyup', function(e) {

    delete keys[e.key];
    
    // remove [ e.key ] value from keys array
    keys.pop(e.key);
    
    // test
    console.log('key deleted : ' + keys);

});

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
    if (keys[0] == 'm') {

        // init [ pauseGame ] function
        pauseGame();
    }

};

// start animation variables
let fps, fpsInterval, startTime, now, then, elasped;

// function [ startAnimation ( fps ) ]
function startAnimation(fps) {
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

// function [ animate ]
function animate() {

    // request animation frame
    requestAnimationFrame(animate);

    // get date information and assign to now variable
    now = Date.now();

    // assign [ elasped ] as now minus then values
    elasped = now - then;

    
    if (keys[0] == 's') {

        // // calculate then time value
        then = now - ( elasped % fpsInterval );

        // clear canvas element
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw background canvas image
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        // // draw the player animation
        // drawSprite(playerSprite, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height);

        // // init [ movePlayer ] function
        // movePlayer();

        // // draw the enemy animation
        // drawSprite(enemySprite, 0, 0, enemy.width, enemy.height, enemy.x, enemy.y, enemy.width, enemy.height);

        // // init [ moveEnemy ] function
        // moveEnemy();

        // draw the action animation
        drawSprite(playerAction, 0, 0, action.width, action.height, player.x, player.y, action.width, action.height)

        // produce an attack action / projectile to interact with enemy sprite
        drawSprite(playerAttack, 0, 0, action.width, action.height, attack.x, attack.y, action.width, action.height);

        // init [ attackEnemy ] function
        attackEnemy();

        
        
        // test directions
        console.log('SHOOT : ' + keys[0]);
        
    }
    // validate fpsInterval against time elasped
    else if (elasped > fpsInterval) {

        // calculate then time value
        then = now - ( elasped % fpsInterval );

        // clear canvas element
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // draw background canvas image
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        // draw the player animation
        drawSprite(playerSprite, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height);

        // init [ movePlayer ] function
        movePlayer();

        // draw the enemy animation
        drawSprite(enemySprite, 0, 0, enemy.width, enemy.height, enemy.x, enemy.y, enemy.width, enemy.height);

        // init [ moveEnemy ] function
        moveEnemy();
    }
    // if (keys[0] == 's') {

    //     // reset player canvas
    //     ctx.clearRect(0, 0, player.width, player.height);

    //     // redraw background behind new image
    //     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        

    //     // init [ attackEnemy ] function
    //     // attackEnemy();

    //     // init [ collusionDetection ] function
    //     // collusionDetection();

        
    // }

    
};


// enemt position variable
let currentEnemyPosition;

// function [ moveEnemy ]
function moveEnemy() {

    // change validation value to move enemy
    if (enemy.x < 1) {
        // move enemy sprite along the x axis at 2.5 times the speed
        enemy.x += (enemy.speed) / 2.5;
    }

    // test
    console.log('ENEMY ENCOUNTER');
}

function attackEnemy() {

    

    // get current position of enemy
    currentEnemyPosition = enemy.x;

    // validate attack position against current enemy position
    if (attack.x < currentEnemyPosition) {

        // init attack movement across [ x ] axis
        attack.x -= (attack.speed) * 2.5;

        // test
        console.log('attack enemy : ' + currentEnemyPosition);
    }
    
}


function resetAttackProjectile() {

    let resetAttack = player.x;
} 


// function [ collusionDetection ]
function collusionDetection() {
    
    

    // draw attack / projectile element
    drawSprite(playerAttack, 0, 0, action.width, action.height, player.x, player.y, action.width, action.height);
    
    // init [ moveAttack ] function
    

    // // validate attack position
    // if (attack.x < currentEnemyPosition) {

    //     attack.x += attack.speed;

        
        
    //     // test
    //     console.log('enemy has not been attacked : ' + currentEnemyPosition);
    // }
    // else {
    //     attack.x += attack.speed;

    //     // test
    //     console.log('player is attacking : ' + currentEnemyPosition);
    // }
}



function pauseGame() {
    // enemy position variables
    let enemyPositionX = enemy.x;
    let enemyPositionY = enemy.y;
    

    // test
    console.log(enemyPositionX);
    console.log(enemyPositionY);
}


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