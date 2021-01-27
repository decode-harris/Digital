// canvas game development

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');

// canvas properties
canvas.width = 800;
canvas.height = 500;

// array [ keys ] ''
let keys = [];

let keystrokes;
// object [ player ] properties
const player = {
    x: 1,
    y: 100,

    // resize image in photoshop 
    width: 402,
    height: 343,

    frameX: 1,
    frameY: 1,

    speed: -5,

    moving: false,

};


// animated player element
const playerSprite = new Image();
playerSprite.src = 'wizard.png';

// animated background element
const background = new Image();
background.src = 'forest.png';

// position variable
// let position = 0;

// function [ drawSprite ]
function drawSprite(img, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight) {
    ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight);
};

// function [ animate ]
function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    drawSprite(playerSprite, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height);

    movePlayer();
    // position++;


    requestAnimationFrame(animate);
}

// init [ animate ] function
animate();

// console.log(playerSprite);


window.addEventListener('keydown', function(e) {
    
    // remove last array item
    keys.pop(e.key);

    // add current keypush to array
    keys.push(e.key);
    
    // test
    console.log('keydown : ' + keys);

});
window.addEventListener('keyup', function(e) {

    delete keys[e.key];
    
    // remove [ e.key ] value from keys array
    keys.pop(e.key);
    
    // test
    console.log('key deleted : ' + keys);

});

function movePlayer() {

    player.moving = false;

    // console.log(player.entries);


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

    


    

    

    // test [ keys ] array output
    // console.log(keys);

};