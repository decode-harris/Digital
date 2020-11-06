// [ scrollPositionProperties ] function
scrollPositionProperties = () => {

    // header selector
    let header = document.querySelector('#header');

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
            
            // assign header position prop to relative [ native placement ]
            header.style.position = 'relative'; 

            // assign nav position prop to top of header [ native placement ]
            nav.style.top = '0';
    
            // test 
            console.log('[ window IF ] :' + pos + 'px');
        }
        else {

            // get current position
            pos = window.scrollY;
            
            // assign header position to fixed [ from relative ]
            header.style.position = 'fixed'; 

            // header props
            header.style.top = '0';
            header.style.left = '0';
            header.style.background = 'var(--mode-background)';
            header.style.zIndex = '4';

            // nav component props
            nav.style.top = pos + 'px';
                        
            // test 
            console.log('[ window Else ] :' + pos + 'px');
        }
    
    });

}

// init [ scrollPositionProperties ] function
scrollPositionProperties();