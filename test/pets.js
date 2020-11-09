let puppies = [

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
    
    let slides = document.getElementsByClassName('slides');
    
    const gallery = () => {
    
        let names = document.getElementsByClassName('names');
    
        // loop [ puppies ] image array
        for (i = 0; i < puppies.length; i++) {
    
            let puppyImage = document.createElement('div');
            let puppyName = document.createElement('h2');
    
            puppyName.innerHTML = puppies[i].name;
            puppyName.style.color = '#FFF';
            
            puppyImage.appendChild(puppyName);
    
            slides[i].style.backgroundImage = 'url(' + puppies[i].img + ')';
    
            console.log(puppies[i]);
            
            // assign images to slides background
            slides[i].style.backgroundImage = 'url(' + puppies[i].img + ')';
            slides[i].style.backgroundPosition = 'center';
            slides[i].style.backgroundSize = 'cover';
            
        }
    
        // loop [ names ] class selector
        for (i = 0; i < names.length; i++) {
    
            // assign names to puppies [ i ] : name
            names[i].innerHTML = puppies[i].name;
            
            // test
            // console.log(names);
            // set button id to puppies [ slide index - 1 ] : name
            btnView.id = puppies[slideIndex - 1].name;
        }
    
        // // puppies array loop
        for (let i = 0; i < puppies.length; i++) {
    
        
    
            
        }
    
        console.log(puppies[0].img);
    
            slider.style.width = '400px';
            slider.style.height = '400px';
            slider.style.border = '2px solid red';
            slider.style.backgroundPosition = 'center';
            slider.style.backgroundSize = 'cover';
    
            // remove to create element
            slider.style.display = 'none';
    
        }
    
        gallery();