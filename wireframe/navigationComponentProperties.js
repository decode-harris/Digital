// function [ navigationComponentProperties ]
navigationComponentProperties = () => {

    // [ navigationElement ] component selector
    let navigationElement = document.querySelector('.navigation');

    // [ navigationElement ] default style
    navigationElement.style.display = 'none';

    // [ navigationButton ] button selector
    const navigationButton = document.querySelector('#navigation-btn');

    // event [ navigationButton ]
    navigationButton.addEventListener('click', ()=> {

        // validate [ navigationElement ] display props
        if (navigationElement.style.display != 'flex') {
            navigationButton.innerHTML = 'close';
            navigationElement.style.display = 'flex';
        }
        else {
            navigationButton.innerHTML = 'menu';
            navigationElement.style.display = 'none';
        }
    });

} // [ navigationComponentProperties ] function end

// init [ navigationComponentProperties ] function
navigationComponentProperties();

