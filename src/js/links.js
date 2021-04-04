/*
    contact links 

    assigns each button link with a external destination
    resume will open up in a new window a PDF document 
    github will open in a new window to my personal github account page
    email will open in a new window the users email browser with my pre-filled email address

*/

// resume selector
let resume = document.querySelector('#resume');

// event [ resume ] : open resume file
resume.addEventListener('click', ()=> {

    // set PDF as external document
    let pdf = 'src/docs/Resume.pdf';

    // open resume in a new window
    window.open(pdf);

});

// github selector
let github = document.querySelector('#github');

// event [ github ] : open github profile
github.addEventListener('click', ()=> {

    // set GIT as external website link
    let git = 'https://github.com/decode-harris';

    // open resume in a new window
    window.open(git);

});

// email selector
let email = document.querySelector('#email');

// event [ email ] : open email client
email.addEventListener('click', ()=> {

    // set MAIL as external email client
    let mail = 'mailto:decode.harris@gmail.com';

    // open mail in same window [ device email client ]
    window.location = mail;

});