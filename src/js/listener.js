/*

    scroll listener

    applies background & text props to navigation button
    when a page has scrolled into view

*/
let pos = window.scrollY;
let section_homepage = document.querySelector('#homepage');

console.log(section_homepage.clientTop);

function listenForScrollChange() {
    let main = document.querySelector('.main');

    main.addEventListener('scroll', ()=> {

        links.forEach(element => {
            element.addEventListener('click', ()=> {
        
                // assign pos to window position
                let pos = window.scrollY;
        
                // test
                console.log('window pos : ' + pos);
            });
        });

        // test
        console.log('main component : ' + main);
    });


    
}
listenForScrollChange();




