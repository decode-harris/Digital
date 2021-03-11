// // // function [ mql ] : media query listener
// window.onload = mql = (e)=> {
    
//     // media query [ mq ] variable for devices greater than 700px
//     let mq = window.matchMedia('(min-width: 700px)');

//     // assign event [ e ] to match media [ mq ] value
//     e = mq;

//     // validate if page matches media query [ mq ]
//     if (e.matches) {

        

        

//         enabled = true;
//         console.log('MQ : enabled = ' + enabled);

//         // if (enabled === true) {
//         //     navigation();

            
//         // }

//     }

//     // default functions for switching to non matched media query [ mobile ]
//     else {

//         enabled = false;
//         console.log('MQ : enabled = ' + enabled);

//         // if (enabled === false) {

//         //     mobileNav = navigation = () => {};
//         // }

//     }

//     // event [ mq ] listener, run mql function on [ mq ] change
//     mq.addEventListener('change', mql);

// };




// var foo = () => { /* function of foo */ }

// let bar = foo;

// // re-assign foo to a new, empty function implementation
// foo = () => {};

// // re-enable foo original behavior by assigning foo to bar
// foo = bar;




function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
      document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addEventListener('change', myFunction) // Attach listener function on state changes