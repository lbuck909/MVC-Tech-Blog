async function loginFormHandler(event) {
  event.preventDefault();

  // need the info from the login form

  const username = document.querySelector('#username-login').value.trim();

  const password = document.querySelector('#password').value.trim();

// need a POST request to go to API endpoint

  if (username && password) {
    const response = await fetch(`/api/user/login`, {
      method:'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);