// section wrapper element selector
const wrapper = document.querySelector('#wrapper');

// function [ defaultView ]
defaultView = () => {

    // wrapper inner all selector
    let wrapper_inner = document.querySelectorAll('.wrapper_inner');

    // loop iterator
    let i;

    // loop [ wrapper inner ]
    for(i = 0; i < wrapper_inner.length; i++) {
        
        // assign all wrapper inner elements display props to none
        wrapper_inner[i].style.display = 'none', 
            
        // assign all wrapper inner elements class to phaseout
        wrapper_inner[i].classList.toggle('phaseout');
        // wrapper_inner[i].classList.toggle('phaseout');
        
    }

}

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

// function [ mobilepageView ]
mobilepageView = () => {

    // wrapper inner all selector
    let wrapper_inner = document.querySelectorAll('.wrapper_inner');

    // loop iterator
    let i;

    // loop [ wrapper inner ]
    for(i = 0; i < wrapper_inner.length; i++) {
        // set all [ wrapper inner ] elements to flex on mobile
        wrapper_inner[i].style.display = 'flex';
    }


}
// function contentView
contentView = () => {

    // link class all selector
    let links = document.querySelectorAll('.links');
    let sections = document.querySelectorAll('.wrapper_inner');
    // for each [ link 
    links.forEach(item => {

        let i;
        let id;
        let sectionIndex = 1;
        
        for (i = 0; i < sections.length; i++) {

            
            

        }

        
        // section id selectors
        // let home = document.querySelector('#homepage');
        // let about = document.querySelector('#about');
        // let proj = document.querySelector('#projects');
        // let tech = document.querySelector('#technical');
        // let cont = document.querySelector('#footer');

    
        // event [ display section on click ]
        item.addEventListener('click', ()=> {

            // init default view
            defaultView();

            // validate link id
            if (item.id == 'link_homepage') {
                
                // assign class [ phase : animation ] to item
                // home.classList.toggle('phase');
                id.classList.add('phase');

                // assign matched item id to section
                // id[sectionIndex - 1].style.display = 'flex';

                // test
                console.log('displaying : ' + item.id);
            }
            if (item.id == 'link_about') {
                
                // assign class [ phase : animation ] to item
                // home.classList.toggle('phase');
                id.classList.add('phase');

                // assign matched item id to section
                id.style.display = 'flex';

                // test
                console.log('displaying : ' + item.id);
            }
            if (item.id == 'link_projects') {
                
                // assign matched item id to section
                // proj.style.display = 'grid';
                id.style.display = 'grid';

                // assign class [ phase : animation ] to section
                // proj.classList.toggle('phase');
                id.classList.add('phase');

                // test
                console.log('displaying : ' + item.id);
            }
            if (item.id == 'link_technical') {

                // assign matched item id to section
                // tech.style.display = 'grid';
                id.style.display = 'grid';

                // assign class [ phase : animation ] to section
                // tech.classList.toggle('phase');
                id.classList.add('phase');

                // test
                console.log('displaying : ' + item.id);
            }
            if (item.id == 'link_footer') {

                // assign matched item id to section
                // cont.style.display = 'grid';
                id.style.display = 'grid';

                // assign class [ phase : animation ] to section
                // cont.classList.toggle('phase');
                id.classList.add('phase');

                // test
                console.log('displaying : ' + item.id);
            }

            id.style.display = 'grid';

        });
        
        // test
        console.log('link item events assigned');
    });

}

// init [ contentView ] function
// contentView();