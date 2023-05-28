//const { JSON, json } = require("sequelize");

const loginForm=document.querySelector('.login-form');
const signupForm=document.querySelector('.signup-form');   //from mini project

const sendLogin = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
    
    if (username && password) {
    
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert("Please enter a valid username and  password...")
      }
    }
    else
        alert("Please enter a valid username and  password...")
  };




  const sendSignup = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const conPassword = document.querySelector('#conPassword-signup').value.trim();
    const match=(password && (password===conPassword));
  
    if (username && email && match) {
      const response = await fetch('/api/users/create', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert("Ensure you've entered a Username, an Email, and matching Passwords...")
      }
    }
    else
        alert("Ensure you've entered a Username, an Email, and matching Passwords...")
  };




loginForm.addEventListener('submit',sendLogin);
signupForm.addEventListener('submit',sendSignup )
  