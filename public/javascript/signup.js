async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const input = document.querySelector('#file').files[0];
    const zipCode = document.querySelector('#zipCode').value.trim();



    if (username && email && password) {
      let formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("avatar", input);
      if (zipCode){
        
        formData.append("zip_code", zipCode);
      }
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
        username,
        email,
        password,
        formData,
        zipCode
        }),
      headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }

 
  
  // Need event listeners for login or sign up  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);