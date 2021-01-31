// button selectors
const controlsNext = document.querySelector('#controlsNext');
const controlsPrev = document.querySelector('#controlsPrev');
const controlsView = document.querySelector('#controlsView');

// element ids array
const elementArray = [
    // element id array items
    'projectPlanets',
    'projectNiflheim',
    'projectCoffee',
    'projectRntlpay'

];

// set index at 0
let elementIndex = 0;

// set btn view id to default [ 0 ]
controlsView.className = elementArray[0];

// [ previous ID ] function
const prevID = () => {
    // reverse order of array items
    elementArray.reverse();
    // assign btn view id to prev array item
    controlsView.className = elementArray[elementIndex % elementArray.length];
    // test
    console.log(controlsView);
}

// [ next ID ] function
const nextID = () => {
    // assign btn view id to next array item
    controlsView.className = elementArray[elementIndex++ % elementArray.length];
    // test
    console.log(controlsView);
}

// events [ control buttons ]
controlsNext.addEventListener('click', nextID);
controlsPrev.addEventListener('click', prevID);
