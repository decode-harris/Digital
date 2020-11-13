



page_loader = () => {
    let load_animation;        
    // load_animation = setTimeout(page_content, 3000);

}

page_content = () => {
    const page = document.querySelector('#page');
    const load = document.querySelector('#load');

    // set page display to flex
    page.style.display = 'flex';

    // set load display to none
    load.style.display = 'none';

    // test
    console.log('page loaded');
}

page_loader();