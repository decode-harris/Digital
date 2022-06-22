homepageLinkHandler = () => {
    // select the link inside the home button element
    let link = home.querySelector('a');

    // validate if aside projects component is active
    if (work.className === 'btn btn-active') {

        // alter the links href to the projects component 'homepage'.
        link.href = '#showcase';

        // test selection method
        console.log(link);
    }
    // if main portfolio component is active,
    else {
        // revert the links href to the portfolio component 'homepage'.
        link.href = '#landing';

        // test selection method
        console.log(link);
    }
    
}
