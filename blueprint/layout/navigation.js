
const navigation = () => {

    // set enabled variable to true
    let enabled;
    
    // navigation component selector
    const nav = document.querySelector('.nav');
    
    // mobile menu button selector
    const menu = document.querySelector('.menu');
    const exit = document.querySelector('.exit');

    // mobile navigation links selector all
    const links = document.querySelectorAll('.link');
    
    // section container selectors
    const homepage = document.querySelector('#homepage');
    const introduction = document.querySelector('#introduction');
    const project = document.querySelector('#project');
    const skills = document.querySelector('#skills');
    const contact = document.querySelector('#contact');

    // navigation link selectors
    const link_homepage = document.querySelector('#link-homepage');
    const link_introduction = document.querySelector('#link-introduction');
    const link_project = document.querySelector('#link-project');
    const link_skills = document.querySelector('#link-skills');
    const link_contact = document.querySelector('#link-contact');

    // main section container selector all
    const container = document.querySelectorAll('.container');

    
    
    enabled = true;

    // // function [ mql ] : media query listener
    window.onload = mql = (e)=> {
    
        // media query [ mq ] variable for devices greater than 700px
        let mq = window.matchMedia('(min-width: 700px)');
    
        // assign event [ e ] to match media [ mq ] value
        e = mq;
    
        // validate if page matches media query [ mq ]
        if (e.matches) {
    
            enabled = true;
            console.log('MQ : enabled = ' + enabled);

            links.forEach(element => {
                element.addEventListener('click', ()=> {
                    if (nav.classList != 'nav') {
                        nav.setAttribute('class', 'nav');
                    }
                });
            });

            container.forEach(element => {

                // navigation desktop view
                nav.style.display = 'flex';
                menu.style.display = 'none';
                exit.style.display = 'none';
                
                // element default props
                element.style.display = 'none';
        
                // homepage landing view
                homepage.style.display = 'flex';
                
                // btn events for site navigation
                link_homepage.addEventListener('click', (e)=> {
        
                    // default section container view
                    element.style.display = 'none';
                    
                    // prevent default anchor action
                    e.preventDefault();
        
                    // init [ clearSections ] function
                    // clearSections();
        
                    // validate section style
                    if (homepage.style.display == 'none') {
                        
                        // display current section container
                        homepage.style.display = 'flex';
        
                        // test
                        console.log('link : home [ fn init ]');
                    }
                    
                });
        
                link_introduction.addEventListener('click', (e)=> {
                    
                    // default section container view
                    element.style.display = 'none';
                    
                    // prevent default anchor action
                    e.preventDefault();
        
                    // init [ clearSections ] function
                    // clearSections();
                    
                    // validate section style
                    if (introduction.style.display == 'none') {
                        
                        // display current section container
                        introduction.style.display = 'flex';
        
                        // test
                        console.log('link : intro [ fn init ]');
                    }
                    
                });
        
                link_project.addEventListener('click', (e)=> {
        
                    // default section container view
                    element.style.display = 'none';
                    
                    // prevent default anchor action
                    e.preventDefault();
        
                    // init [ clearSections ] function
                    // clearSections();
        
                    // validate section style
                    if (project.style.display == 'none') {
                        
                        // display current section container
                        project.style.display = 'flex';
        
                        // test
                        console.log('link : project [ fn init ]');
                    }
        
                });
        
                link_skills.addEventListener('click', (e)=> {
        
                    // default section container view
                    element.style.display = 'none';
                    
                    // prevent default anchor action
                    e.preventDefault();
        
                    // init [ clearSections ] function
                    // clearSections();
        
                    // validate section style
                    if (skills.style.display == 'none') {
                        
                        // display current section container
                        skills.style.display = 'flex';
        
                        // test
                        console.log('link : skills [ fn init ]');
                    }
        
                });
        
                link_contact.addEventListener('click', (e)=> {
        
                    // default section container view
                    element.style.display = 'none';
                    
                    // prevent default anchor action
                    e.preventDefault();
        
                    // init [ clearSections ] function
                    // clearSections();
        
                    // validate section style
                    if (contact.style.display == 'none') {
                        
                        // display current section container
                        contact.style.display = 'flex';
        
                        // test
                        console.log('link : contact [ fn init ]');
                    }
        
                }); // end of event link buttons
            
            }); // end of for each loop [ container ]
        
        } // end of if event matches statement
    
        // default functions for switching to non matched media query [ mobile ]
        else {

            nav.style.display = 'none';
            menu.style.display = 'flex';
            exit.style.display = 'flex';

            // event [ window ] : scroll position listener
            window.addEventListener('scroll', ()=> {
                
                // position variable [ undefined ]
                let pos;

                // set a min section height for comparison
                let sectionHeight = '100vh';
                
                // if scroll position is less than section height
                if (window.scrollY < sectionHeight) {
                    
                    // get current position
                    pos = window.scrollY;
                    
                    // assign nav position prop to top of header [ native placement ]
                    nav.style.top = '0';
            
                    // test 
                    // console.log('[ window IF ] :' + pos + 'px');
                }
                else {

                    // get current position
                    pos = window.scrollY;

                    // test
                    // console.log('current position : ' + pos);
                    
                    // assign header position to fixed [ from relative ]
                    // menu.style.position = 'fixed';
                    // mode.style.position = 'fixed';

                    // header [ menu ] button position props
                    menu.style.top = '10px';
                    menu.style.right = '10px';
                    // menu.style.background = 'var(--mode-background)';
                    // menu.style.zIndex = '4';

                    // header [ mode ] button position props
                    // mode.style.top = '0';
                    // mode.style.right = '0';
                    // mode.style.background = 'var(--mode-background)';
                    
                    
                    // nav component props
                    nav.style.top = pos + 'px';
                    nav.style.zIndex = '1';
                                
                    // test 
                    // console.log('[ window Else ] :' + pos + 'px');
                }
            
            }); // end [ window ] : scroll position listener

            // mobile menu event
            // menu.addEventListener('click', ()=> {

            //     if (nav.style.display != 'flex') {
                    
            //         nav.setAttribute('class', 'active');
            //         nav.style.display = 'flex';
            //     }
                
            // });

            menu.addEventListener('click', ()=> {
                
                

                if (nav.className != 'active') {

                    nav.setAttribute('class', 'active');
                    nav.style.display = 'flex';
                    
                    // menu.style.zIndex = 200;
                    exit.style.zIndex = 300;
                }
                
                // menu.style.background = 'rgba(20, 20, 20, 0.822)';
                
               
                // if (nav.style.width != '100%') {
                    
                //     // change nav width to active [ 100% ] 
                //     nav.style.width = '100%';
                // }
                // else {
                
                //     // change icon class list to [ bars ] menu
                //     icon.classList = 'fas fa-bars';

                //     // change nav width back to default [ 0% ]
                //     nav.style.width = '0%';
                
                // }
                
            });

            // mobile navigation exit event
            exit.addEventListener('click', ()=> {

                if (nav.style.display != 'none') {
                    nav.style.display = 'none';
                    nav.setAttribute('class', 'nav');

                    
                }

                // test
                console.log('exit btn : none');
                
            });

            // section container for each loop
            container.forEach(element => {
                        
                // mobile styles
                element.removeAttribute('style', 'display: none');
                element.style.display = 'flex';

                if (nav.className == 'active') {
                    nav.setAttribute('class', 'nav');
                    nav.style.display = 'none';

                }
                    // // const links = document.querySelectorAll('.links');
                    links.forEach(element => {

                        element.addEventListener('click', (e)=> {
                            e.preventDefault();
                        });
                        
                    });
                

                

                
                link_homepage.addEventListener('click', ()=> {

                    if (link_homepage.id != 'link-homepage-mobile') {
                        link_homepage.setAttribute('id', 'link-homepage-mobile');

                        console.log('link mobile homepage id change = ' + link_homepage.id);
                    }
                });
                link_introduction.addEventListener('click', ()=> {});
                link_project.addEventListener('click', ()=> {});
                link_skills.addEventListener('click', ()=> {});
                link_contact.addEventListener('click', ()=> {});

                    

                
                
            });

            
            

            

            // section container for each loop
            // container.forEach(element => {
                
            //     // mobile styles
            //     element.removeAttribute('style', 'display: none');
            //     element.style.display = 'flex';
                
                
            //     homepage.scrollTo(top);

            // });
    
            enabled = false;
            console.log('MQ : enabled = ' + enabled);
        
        } // end of else event matches statement
    
        // event [ mq ] listener, run mql function on [ mq ] change
        mq.addEventListener('change', mql);
    
    };

}; // end of navigation function


// init navigation function
navigation();






