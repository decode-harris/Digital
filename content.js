// section wrapper element selector
const wrapper = document.querySelector('#wrapper');

// function [ defaultView ]
defaultView = () => {

    // let timeout;
    
    

    // wrapper inner all selector
    let wrapper_inner = document.querySelectorAll('.wrapper_inner');

    // loop iterator
    let i;

    // loop [ wrapper inner ]
    for(i = 0; i < wrapper_inner.length; i++) {
        
        
            wrapper_inner[i].style.display = 'none', 
            

        // assign class [ phaseout : animation ] to all wrapper inner
        // wrapper_inner[i].classList.toggle('phase');

        wrapper_inner[i].classList.toggle('phaseout');
        // wrapper_inner[i].classList.toggle('phaseout');
        
    }

}

// let timeout = setTimeout(defaultView, 2000);


// function [ homepageView ]
homepageView = () => {

    // wrapper inner all selector
    let wrapper_inner = document.querySelectorAll('.wrapper_inner');

    // loop iterator
    let i;

    // loop [ wrapper inner ]
    for(i = 0; i < wrapper_inner.length; i++) {
        wrapper_inner[i].style.display = 'none';
        wrapper_inner[0].style.display = 'flex';
    }

    // test function
    console.log('homepage view');
}

// defaultView();
homepageView();

let wrapperArray = [];

const contentView = () => {

    // link class all selector
    let links = document.querySelectorAll('.link');

    // for each [ link 
    links.forEach(item => {

        // section id selectors
        let home = document.querySelector('#home');
        let proj = document.querySelector('#proj');
        let tech = document.querySelector('#tech');

    
        // event [ display section on click ]
        item.addEventListener('click', ()=> {

            // init default view
            defaultView();

            // validate link id
            if (item.id == 'link_home') {
                
                // assign class [ phase : animation ] to item
                // home.classList.toggle('phase');
                home.classList.add('phase');

                // assign matched item id to section
                home.style.display = 'flex';

                // test
                console.log('displaying : ' + item.id);
            }
            if (item.id == 'link_proj') {


                // assign matched item id to section
                proj.style.display = 'flex';

                // assign class [ phase : animation ] to section
                // proj.classList.toggle('phase');
                proj.classList.add('phase');

                // test
                console.log('displaying : ' + item.id);
            }
            if (item.id == 'link_tech') {

                // assign matched item id to section
                tech.style.display = 'flex';

                // assign class [ phase : animation ] to section
                // tech.classList.toggle('phase');
                tech.classList.add('phase');

                // test
                console.log('displaying : ' + item.id);
            }

        });
        
        // test
        console.log('link item events assigned');
    });

}

// init [ contentView ] function
contentView();