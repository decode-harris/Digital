slidesDesktop = () => {

    // project information variables
    let projectTitle;
    let projectTag;
    let projectDesc;
    let projectImage;

    // project information output variables
    let slideTitle = document.getElementsByClassName('slideTitle');
    let slideTag = document.getElementsByClassName('slideTag');
    let slideDesc = document.getElementsByClassName('slideDesc');

    // card element element selectors
    let cardBack = document.getElementsByClassName('back');
    // let cardFront = document.getElementsByClassName('front');

    let cardFront_bk = document.getElementsByClassName('bk');
    let cardFront_img = document.getElementsByClassName('small');
    
    // loop [ projects array ]
    for (i = 0; i < projectsArray.length; i++) {

        // get current array projects title & assign to projectTitle variable
        projectTitle = projectsArray[i].title;
    
        // get current array projects desc & assign to projectDesc variable
        projectDesc = projectsArray[i].desc;

        // get current array projects tag * assign to projectTag variable
        projectTag = projectsArray[i].tagline;
    
        // get current array projects image & assign to projectImage variable [ mobile devices ]
        projectImage = projectsArray[i].imageMobile;

        
        cardBack[i].style.backgroundImage = 'url(' + projectImage + ')';
        cardFront_bk[i].style.backgroundImage = 'url(' + projectImage + ')';
        cardFront_img[i].src = projectImage;
        
    }

    for (i = 0; i < cardFront_bk.length; i++) {
        console.log(cardBack[i]);
    }
    for (i = 0; i < cardFront_img.length; i++) {

    }
    
    // loop [ title ] class selector
    for (i = 0; i < slideTitle.length; i++) {

        // assign slide title to project title value
        slideTitle[i].innerHTML = projectsArray[i].title;

        // assign [ controlsView ] button id to current projects array object title
        controlsView.id = projectsArray[slideIndex - 1].title;
    }

    // loop [ description ] class selector
    for (i = 0; i < slideDesc.length; i++) {

        // assign slide title to project title value
        slideDesc[i].innerHTML = projectsArray[i].desc;

    }

    // loop [ tagline ] class selector
    for (i = 0; i < slideTag.length; i++) {

        // assign slide tagline to project tagline value
        slideTag[i].innerHTML = projectsArray[i].tagline;
    }

}