'use strict';

let submit = document.querySelector('.submit');

// function to validate form
function validate () {    
    
    const firstName = document.querySelector('.first-name');
    const lastName = document.querySelector('.last-name');
    const message = document.querySelector('.message');
    const email = document.querySelector('.email').value.trim();
    
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    let count = 0;
    let text = '';

    if (firstName.value === ""){
        text += 'Please add your First Name\n';
        count++;
    }
    
    if (lastName.value === ""){
        text += 'Please add your Last Name\n';
        count++;
    } 
    
    if(email.length === 0) {
        text += 'Please enter your email\n';
        count++;
    } else if(!emailRegex.test(email)) {
        text += 'Please enter a valid email\n';
        count++;
    } 

    if (message.value === ""){
        text += 'Please add your Message\n';
        count++;
    } 
    
    if(count === 4) {
        alert('Fields with * are required');
    } else if (text !== '') {
        alert(text);
    } else {
        alert('Your message has been sent!');
    }

}

submit.addEventListener('click', function () {
    validate();
});

// reset form on window reload 
function init() {
    document.querySelector(".contact-form").reset();
}

window.onload = init();