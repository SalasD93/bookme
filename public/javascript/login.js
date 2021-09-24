// Add async functions for logging in/signing up
var login = document.getElementById("loginDisplay");
login.style.display="none";
async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      console.log("avd");
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  // Need event listeners for login or sign up
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
