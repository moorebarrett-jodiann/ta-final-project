'use strict'

const validate = document.querySelector('.submit');

const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const message = document.querySelector('.message');
const email = document.querySelector('.email').value.trim();

const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

validate.addEventListener('click', () =>{
    if (firstName.value == ""){
        alert('Please add your First Name');
    }
    
    if (lastName.value == ""){
        alert('Please add your Last Name');
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