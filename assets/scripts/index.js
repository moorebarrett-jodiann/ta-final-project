'use strict'

const validate = document.querySelector('.submit');

const email = document.querySelector('.email');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('last-name');
const message = document.querySelector('message');

validate.addEventListener('click', () =>{
    if (firstName.value == "" || lastName.value == ""){
        alert('Please add your full name')
    }
    else if(email.value.match(/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/)){
        alert('Email is missiing or has been put in wrong')
    }
    else if(message.value == ""){
        alert('Please add your message')
    }
})