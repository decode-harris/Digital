/*

    wireframe for vue js digital portfolio prototype

    components 

        [
            nav {

                img : img-sml

                h4: title
                h6 : tagline

                ul : list
                li : items
            },
            
            header {

                h6 : tagline
                h2 : title

                button : btn

                img : img-med

            },

            main {

                h2 : title

                ul : list
                li : items

                a : links
            },

            section {

                h2 : title

                p : text

                button : btn

                img : img-med
            },

            article {

                h4 : list title

                ul : list [ x 2 ]
                li : items

                i : icons
                div : lines

            },

            footer {

                h2 : title

                img: img-med

                form : form
                label : label
                input : input
                textarea : textarea

            },
        ]

        

*/
let container = document.querySelector('.container');
container.style.display = 'none';

// select button [ more ]
let more = document.querySelector('#more');

// click event [ more ] button
more.addEventListener('click', ()=> {
    if (container.style.display != 'grid') {
        container.style.display = 'grid';
        more.innerHTML = 'less';
    }
    else {
        more.innerHTML = 'more';
        container.style.display = 'none';
    }
});


let items = document.querySelectorAll('.main .items');
console.log(items);

items.forEach(element => {
    element.addEventListener('click', ()=> {
        element.style.background = 'none';
        if ( element.id = 'project-one') {
            let link = element.firstElementChild;
            link.href = 'projects.html';
        }
        if (element.style.background != 'black') {
            element.style.background = 'black';
            
        }
        else {
            element.style.background = 'none';
        }
        
    })
});