// button [ clear ] selector
let clear = document.querySelector('#clear');
// event [ clear ] : reset form input elements
clear.addEventListener('click', (e)=> {

    // prevent form submit
    e.preventDefault();

    // form input selectors
    let name = document.querySelector('#name');
    let mail = document.querySelector('#email');
    let mssg = document.querySelector('#message');

    // assign input values to an empty string
    name.value = '';
    mail.value = '';
    mssg.value = '';
    
    // form test DOM values
    // console.log(name); // html element
    // console.log(name.value); //input value
    // console.log(name.innerHTML); // empty string

});


// form selector
let form = document.querySelector('#form');
// verification selector
let complete = document.querySelector('#complete');
complete.style.display = 'none';

let submit = document.querySelector('#submit');

submit.addEventListener('click', (e)=> {

    // prevent form submit
    e.preventDefault();

    form.style.display = 'none';
    complete.style.display = 'flex';


});