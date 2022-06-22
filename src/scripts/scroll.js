
const portfolio = document.querySelector('#portfolio');

portfolio.onscroll = function() {

    // test scroll Y output
    console.log(scrollY);

    // search for the active class name applied to the box element
    let current = document.getElementsByClassName('active');
    
    if (portfolio.scrollTop <= 400) {
        // test scroll function
        console.log('Viewing : Landing Page');

        // search for the active class name applied to the box element ( create scoped )
        // let current = document.getElementsByClassName('active');
        // replace the active class name with an empty string
        current[0].className = current[0].className.replace(' active', '');
        // set the third square element to active
        squares[0].className += ' active';
    }
    else if (portfolio.scrollTop > 400 && portfolio.scrollTop <= 850) {
        // test scroll function
        console.log('Viewing : About Page');
        
        // replace the active class name with an empty string
        current[0].className = current[0].className.replace(' active', '');
        // set the third square element to active
        squares[1].className += ' active';
    }
    else if (portfolio.scrollTop > 850 && portfolio.scrollTop < 1400 ) {
        // test scroll function
        console.log('Viewing : Development Page');

        // replace the active class name with an empty string
        current[0].className = current[0].className.replace(' active', '');
        // set the third square element to active
        squares[2].className += ' active';
    }
    else {
        // test scroll function
        console.log('Viewing : Contact Page');

        // replace the active class name with an empty string
        current[0].className = current[0].className.replace(' active', '');
        // set the third square element to active
        squares[3].className += ' active';
    }
    
};

// const projects = document.querySelector('#projects');

projects.onscroll = function() {

    // test scroll value
    console.log(scrollY);

    // validate which part of the page a user has scrolled to
    if ( projects.scrollTop <= 1700 ) {
        console.log('Viewing : Projects - Showcase (Web Development).');
    }
    else if ( projects.scrollTop >= 1700 ) {
        console.log('Viewing : Projects - Design (Design Prototypes).');
    }
    else {
        console.log('Viewing : Projects - Concepts (Application Concepts).');
    }
}

/*
    Projects OnScroll Tracker

    Side Navigation Component switches to projects tracker
    view onload. Will automatically track the current section 
    the user is viewing.
*/
// projects.onscroll = () => {

//     // test scroll Y output
//     console.log(scrollY);

//     if (projects.scrollTop <= 850) {

//         // test scroll function
//         console.log('Viewing : Projects Page - Web Development.');

//         // search for the active class name applied to the sidealt element
//         let current = document.getElementsByClassName('active');
//         // replace the active class name with an empty string
//         current[0].className = current[0].className.replace(' active', '');
//         // set the third square element to active
//         squares[0].className += ' active';
//     }
//     else if (projects.scrollTop > 900 && projects.scrollTop <= 1700) {

//         // test scroll function
//         console.log('Viewing : Projects Page - Layout Design.');

//         // search for the active class name applied to the sidealt element
//         let current = document.getElementsByClassName('active');
//         // replace the active class name with an empty string
//         current[0].className = current[0].className.replace(' active', '');
//         // set the second square element to active
//         squares[1].className += ' active';
//     }
//     else {
//         // test scroll function
//         console.log('Viewing : Projects Page - Concept Applications.');

//         // search for the active class name applied to the sidealt element
//         let current = document.getElementsByClassName('active');
//         // replace the active class name with an empty string
//         current[0].className = current[0].className.replace(' active', '');
//         // set the third square element to active
//         squares[2].className += ' active';
//     }
// }