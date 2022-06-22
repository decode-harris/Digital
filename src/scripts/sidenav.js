/*
    Side Navigation Component Functionality.

        Select the side navigation component.
        Select the list square link elements.
        Loop through the square link elements.
        Search for the 'active' class if applied.
        Remove the 'active' class if another element is clicked.
        Apply the active element to the new clicked element.

*/

// select the side navigation component
const sidenav = document.querySelector('#sidenav');
// select the side navigation lists
let lists = sidenav.querySelectorAll('.list');
// select the square link elements
let squares = sidenav.getElementsByClassName('squares');
// test selection method
console.log(squares);
// loop through all square elements inside the navigation component
for ( let i = 0; i < squares.length; i++ ) {
    // apply a click event to all square elements inside the side navigation component
    squares[i].addEventListener('click', function() { 
        // search for the active class name applied to the box element
        let current = document.getElementsByClassName('active');
        // replace the active class name with an empty string
        current[0].className = current[0].className.replace(' active', '');
        // apply the active class to the clicked side navigation element
        this.className += ' active';
    });
};