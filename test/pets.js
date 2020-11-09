let petsArray = [

    // web hosted pet image sources + pet name
    {   
        // set image value as image host href
        img: 'https://i.ibb.co/nnWFmvY/IMG20171224114945.jpg',
        name: 'marley'
    },
    {   
        // set image value as image host href
        img: 'https://i.ibb.co/r57LHhD/IMG20181121150545.jpg',
        name: 'theodore'
    },
    {
        img: 'https://i.ibb.co/RBdPDXV/IMG20181104134344.jpg',
        name: 'pandora'
    }
    
];
    
let slideIndex = 1;

currentSlide = (n) => {
    slideshow(slideIndex=n);
}
controlSlide = (n) => {
    slideshow(slideIndex+=n);
}

const slideshow = (n) => {

    let slides = document.getElementsByClassName('slides');
    
    let petName = document.getElementsByClassName('petName');
    
    if(n > slides.length) slideIndex = 1;
    if(n < 1) slideIndex = slides.length;

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }


    // loop [ puppies ] image array
    for (i = 0; i < petsArray.length; i++) {

        // assign images to slides background
        slides[i].style.backgroundImage = 'url(' + petsArray[i].img + ')';
        slides[i].style.backgroundPosition = 'center';
        slides[i].style.backgroundSize = 'cover';
        
        
    }

    for (i = 0; i < petName.length; i++) {
        
        // pet name assignment
        petName[i].innerHTML = petsArray[ slideIndex - 1].name;
        petName[i].style.color = '#FFF';
    }

    slides[ slideIndex - 1 ].style.display = 'flex';

};

// init slideshow test
slideshow();

// control btn selectors
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

// events control btns
prev.addEventListener('click', ()=> {
    controlSlide(-1);
});
next.addEventListener('click', ()=> {
    controlSlide(1);
});

