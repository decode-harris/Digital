// projects overview selector
let overview = document.querySelectorAll('.overview');

projectsLoad = () => {

    // projects loop
    for (let i = 0; i < overview.length; i++) {
        
        // remove all project overview elements
        overview[i].style.display = 'none';
    }

    overview[0].style.display = 'flex';
    
}

projectsLoad();



