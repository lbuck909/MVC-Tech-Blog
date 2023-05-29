async function loginFormHandler(event) {
  event.preventDefault();

  // need the info from the login form

  const username = document.querySelector('#username-login').value.trim();

  const password = document.querySelector('#password-login').value.trim();

// need a POST request to go to API endpoint

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method:'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);