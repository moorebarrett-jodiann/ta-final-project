'use strict'

const validate = document.querySelector('.submit');

const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const message = document.querySelector('.message');
let email = document.querySelector('.email').value.trim();

const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

validate.addEventListener('click', () =>{
    if (firstName.value == "" || lastName.value == ""){
        alert('Please add your full name')
    }
    if(email.length === 0) {
        alert('Please enter your email');
    }
    else if(!emailRegex.test(email)) {
        alert('Please enter a valid email');
    }
    else if(message.value == ""){
        alert('Please add your message')
    }
    else{
        alert('message has been sent')
    }
});