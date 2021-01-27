// html canvas element
const canvas = document.querySelector('#game');
// method [ CanvasRenderingContext2D ]
const ctx = canvas.getContext('2d');

// canvas properties
canvas.width = 800;
canvas.height = 500;

// array [ keys ]
let keys = [];

// object [ player ] properties
const player = {

    // start position
    x: 1,
    y: 100,

    // dimensions [ resize image in photoshop ]
    width: 402,
    height: 343,

    // animation frames
    frameX: 12,
    frameY: 1,

    // animation speed
    speed: -5,

    // animation action
    moving: false,

};
// object [ action ] properties
const action = {

    // animation frames
    frameX: 12,
    frameY: 1,

    // dimensions [ resize image in photoshop ]
    width: 618,
    height: 391,
}

// animated player element
const playerSprite = new Image();
playerSprite.src = 'wizard.png';

// animated action element
const playerAction = new Image();
playerAction.src = 'magic.png';

// animated background element
const background = new Image();
background.src = 'forest.png';

// function [ drawSprite ]
function drawSprite(img, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight) {
    ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight);
};

// function [ animate ]
function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    if (keys[0] == 's') {

        // reset player canvas
        ctx.clearRect(0, 0, player.width, player.height);

        // redraw background behind new image
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        // draw the action animation
        drawSprite(playerAction, 0, 0, action.width, action.height, player.x, player.y, action.width, player.height)
        
        // test directions
        console.log('SHOOT : ' + keys[0]);
    }
    else {

        // draw the player animation
        drawSprite(playerSprite, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height);
    
    }

    // init [ movePlayer ] function
    movePlayer();

    // callback [ animate ] function
    requestAnimationFrame(animate);

}
// init [ animate ] function
animate();

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
        console.log('MOVE UPWARDS : ' + keys);
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

    // if (keys[0] == 's') {

    //     // ctx.clearRect(0, 0, player.width, player.height);
    //     // drawSprite(playerMagic, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height)
    //     // move player along the [ x ] axis in a backwards direction
    //     // player.x += player.speed;
    //     // test directions
    //     console.log('SHOOT : ' + keys[0]);
    // }
    
    // test [ keys ] array output
    // console.log(keys);

};