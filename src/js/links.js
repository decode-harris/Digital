// page section selectors
let homepage = document.querySelector('#page');
let information = document.querySelector('#information');
let projects = document.querySelector('#projects');
let technical = document.querySelector('#technical');

// link homepage selector
let link_homepage = document.querySelector('#link_homepage');

// event [ link homepage ]
link_homepage.addEventListener('click', ()=> {
    // add margin to top of section [ height of sticky nav ]
    homepage.style.paddingTop = '12vh';
    // scroll the section into view
    homepage.scrollIntoView();
    // assign nav to display propety none
    nav.style.display = 'none';
});

// link information selector
let link_information = document.querySelector('#link_information');

// event [ link information ]
link_information.addEventListener('click', ()=> {
    // add margin to top of section [ height of sticky nav ]
    information.style.paddingTop = '12vh';
    // scroll the section into view
    information.scrollIntoView();
    // assign nav to display propety none
    nav.style.display = 'none';
});

// link projects selector
let link_projects = document.querySelector('#link_projects');
// event [ link projects ]
link_projects.addEventListener('click', ()=> {
    // add margin to top of section [ height of sticky nav ]
    projects.style.paddingTop = '12vh';
    // scroll the section into view
    projects.scrollIntoView();
    // assign nav to display propety none
    nav.style.display = 'none';
});

// link technical selector
let link_technical = document.querySelector('#link_technical');

// event [ link technical ]
link_technical.addEventListener('click', ()=> {
    // add margin to top of section [ height of sticky nav ]
    technical.style.paddingTop = '12vh';
    // scroll the section into view
    technical.scrollIntoView();
    // assign nav to display propety none
    nav.style.display = 'none';

    // test
    console.log('scrolled to section [ technical ]');
});

// link footer selector
let link_footer = document.querySelector('#link_footer');

// event [ link footer ]
link_footer.addEventListener('click', ()=> {
    // add margin to top of section [ height of sticky nav ]
    footer.style.paddingTop = '12vh';
    // scroll the section into view
    footer.scrollIntoView();
    // assign nav to display propety none
    nav.style.display = 'none';

    // test
    console.log('scrolled to section [ footer ]');
});

/*
    [ project link ] events

    1. [ alfheim ] : open alfheim website / application in a new tab
    2. [ niflheim ] : open niflheim website / application in a new tab
    3. [ jotunheim ] : open jotunheim website / application in a new tab
    4. [ vanaheim ] : open vanaheim website / application in a new tab


*/

let controlsView = document.querySelector('.controlsView');

controlsView.addEventListener('click', ()=> {

    if (controlsView.id == 'alfheim') {
        
        // open [ alfheim ] github hosted website
        window.open('https://decode-harris.github.io/alfheim/');

        // test
        console.log('opening : [ ALFHEIM ]');
    }
    if (controlsView.id == 'niflheim') {
        
        // open [ niflheim ] github hosted website
        window.open('https://decode-harris.github.io/niflheim/');

        // test
        console.log('opening : [ niflheim ]');
    }
    if (controlsView.id == 'jotunheim') {

        // open [ jotunheim ] github hosted website
        window.open('https://decode-harris.github.io/jotunheim/');        

        // test
        console.log('opening : [ jotunheim ]');
    }
    if (controlsView.id == 'vanaheim') {
        
        // open [ vanaheim ] github hosted website
        window.open('https://decode-harris.github.io/vanaheim/');
        
        // test
        console.log('opening : [ vanaheim ]');
    }

});

// // project [ alfheim ] slide selector
// let alfheim = document.querySelector('#alfheim');

// // event [ alfheim ] : open live project in a new tab
// alfheim.addEventListener('click', ()=> {

//     // open [ alfheim ] github hosted website
//     window.open('https://decode-harris.github.io/alfheim/');
    
//     // test
//     console.log('opening...alfheim website');
    
//     // open planets live website [ direct tab ]
//     // window.location = 'https://decode-harris.github.io/planets/';
    
// });

// // project [ niflheim ] slide selector
// let niflheim = document.querySelector('#niflheim');

// // event [ niflheim ] : open live project in a new tab
// niflheim.addEventListener('click', ()=> {

//     // open [ niflheim ] github hosted website
//     window.open('https://decode-harris.github.io/niflheim/');
    
//     // test
//     console.log('opening...niflheim website');
    
//     // open planets live website [ direct tab ]
//     // window.location = 'https://decode-harris.github.io/planets/';
    
// });

// // project [ jotunheim ] slide selector
// let jotunheim = document.querySelector('#jotunheim');

// // event [ jotunheim ] : open live project in a new tab
// jotunheim.addEventListener('click', ()=> {

//     // open [ jotunheim ] github hosted website
//     window.open('https://decode-harris.github.io/jotunheim/');
    
//     // test
//     console.log('opening...jotunheim website');
    
//     // open planets live website [ direct tab ]
//     // window.location = 'https://decode-harris.github.io/planets/';
    
// });

// // project [ vanaheim ] slide selector
// let vanaheim = document.querySelector('#vanaheim');

// // event [ vanaheim ] : open live project in a new tab
// vanaheim.addEventListener('click', ()=> {

//     // open [ vanaheim ] github hosted website
//     window.open('https://decode-harris.github.io/vanaheim/');
    
//     // test
//     console.log('opening...vanaheim website');
    
//     // open planets live website [ direct tab ]
//     // window.location = 'https://decode-harris.github.io/planets/';
    
// });


/*
    [ footer component ] events

        1. [ resume ] : open resume pdf file
        2. [ github ] : open github profile
        3. [ email  ] : open email client

*/

// resume selector
let resume = document.querySelector('#contact_resume');

// event [ resume ] : open resume file
resume.addEventListener('click', ()=> {

    // assign resume source file to pdf variable
    let pdf = 'src/docs/ChristopherHarrisResume.pdf';

    // open resume in a new window
    window.open(pdf);

});

// github selector
let github = document.querySelector('#contact_github');

// event [ github ] : open github profile
github.addEventListener('click', ()=> {

    // assign github href to git variable
    let git = 'https://github.com/decode-harris';

    // open resume in a new window
    window.open(git);

});

// email selector
let email = document.querySelector('#contact_email');

// event [ email ] : open email client
email.addEventListener('click', ()=> {

    // assign email address to mail variable
    let mail = 'mailto:decode.harris@gmail.com';

    // open mail in same window [ device email client ]
    window.location = mail;

}); 