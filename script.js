function showSignUp() {
    document.getElementById('signup').classList.remove('hidden');
    document.getElementById('login').classList.add('hidden');
}

function showLogin() {
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
}

function signUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Sign up successful! You can now log in.');
        showLogin();
    } else {
        alert('Please fill in both fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        document.getElementById('login').classList.add('hidden');
        document.getElementById('menu').classList.remove('hidden');
    } else {
        alert('Incorrect username or password.');
    }
}

function viewBooks() {
    alert('This will show the list of books.');
}

function viewCart() {
    alert('This will show your cart.');
}

function logout() {
    document.getElementById('menu').classList.add('hidden');
    showLogin();
}
