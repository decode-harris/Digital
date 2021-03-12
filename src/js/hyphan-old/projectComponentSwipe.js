// gallery container [ swipe ] selector
const swipe = document.querySelector('.swiper'), N = swipe.children.length;

// [ i ] variable && [ x0 ] variable
let x0 = null;

console.log(N);
// function [ unify ( event ) ]
function unify(e) {	return e.changedTouches ? e.changedTouches[0] : e };

// function [ lock ( event ) ]
function lock(e) { x0 = unify(e).clientX };

// function [ move ( event ) ]
function move(e) {

	// validate [ x0 ] value
	if(x0 || x0 === 0) {

		// [ dx ] clientX value - x0 value || sine calculation on [ dx ]
		let dx = unify(e).clientX - x0, s = Math.sign(dx);

		// validate [ i ] value against value [ 0 ], sine calc & number [ s ] of slides [ n ]
		if((i > 0 || s < 0) && (i < N - 1 || s > 0))

			// assign custom variable [ --i ] as [ i ] -= sine calc
			swipe.style.setProperty('--i', i -= s);

			// return [ x0 ] to null ( default )
			x0 = null
	}
};

// assign swipe prop [ --n ] as number of slides [ N ]
swipe.style.setProperty('--n', N);

// event [ mouse down + touch start ] : init function [ lock ]
swipe.addEventListener('mousedown', lock, false);
swipe.addEventListener('touchstart', lock, false);

// event [ touch move ( event ) ] : init function [ prevent default ]
swipe.addEventListener('touchmove', e => { e.preventDefault() }, false);

// event [ mouse up + touch end ] : init function [ move ]
swipe.addEventListener('mouseup', move, false);
swipe.addEventListener('touchend', move, false);