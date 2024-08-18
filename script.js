javascript
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login process (replace with real authentication)
    if (username === 'user' && password === 'pass') {
        document.getElementById('message').innerText = 'Login successful! Redirecting...';
        // Redirect or perform further actions here
    } else {
        document.getElementById('message').innerText = 'Invalid username or password.';
    }
});