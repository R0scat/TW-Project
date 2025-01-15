// Simulating a user database (JSON)
const usersDatabase = [
    { username: 'user1', password: 'password123' },
    { username: 'user2', password: 'mypassword1' }
];

// Regular expressions for validation
const usernameRegex = /^[a-zA-Z0-9]{3,10}$/; // 3-10 alphanumeric characters
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Min 8 characters, 1 letter, 1 number

// Handle the login form submission
function loginUser(event) {
    event.preventDefault();
    resetErrors();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let isValid = true;

    // Validate username
    if (!usernameRegex.test(username)) {
        document.getElementById("username-error").textContent = "Username must be 3-10 characters, alphanumeric only.";
        isValid = false;
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        document.getElementById("password-error").textContent = "Password must be at least 8 characters, and contain at least one letter and one number.";
        isValid = false;
    }

    if (isValid) {
        // If valid, simulate a login request with AJAX-like behavior
        simulateLoginRequest(username, password);
    }
}

// Reset error messages
function resetErrors() {
    document.getElementById("username-error").textContent = '';
    document.getElementById("password-error").textContent = '';
}

// Simulate AJAX request for login
function simulateLoginRequest(username, password) {
    const user = usersDatabase.find(user => user.username === username && user.password === password);

    // Simulate a delay (like an actual request)
    setTimeout(() => {
        if (user) {
            // Simulate a successful login response with JSON
            const response = {
                success: true,
                username: user.username
            };
            handleLoginResponse(response);
        } else {
            // Simulate an error response with JSON
            const response = {
                success: false,
                message: 'Invalid username or password.'
            };
            handleLoginResponse(response);
        }
    }, 1000);
}

// Handle login response (success or failure)
function handleLoginResponse(response) {
    if (response.success) {
        // Show logout section and welcome message
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('logout-section').style.display = 'block';
        document.getElementById('user-welcome').textContent = response.username;
    } else {
        alert(response.message);
    }
}

// Handle the logout functionality
function logoutUser() {
    // Simulate a logout process
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('logout-section').style.display = 'none';
    resetErrors();
    document.getElementById("username").value = '';
    document.getElementById("password").value = '';
}

// Function to display a sign-up option (for future enhancements)
function showSignup() {
    alert("Sign up functionality can be added here.");
}
