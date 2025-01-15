//REGEX
const usernameRegex = /^[a-zA-Z0-9]{3,10}$/; // 3-10 alphanumeric characters
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Min 8 characters, 1 letter, 1 number

function loginUser(event) {
    event.preventDefault();
    event.stopPropagation();
    resetErrors();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    //alert("Username: " + username + "\nPassword: " + password);

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
        alert("Valid input. Logging in...");
        fetch("users.json")
            .then((response) => response.json())
            .then((users) => {
                const userExist = users.some(
                    (user) =>user.username === username && user.password === password
                );
                if (userExist){
                    sessionStorage.setItem("username", username);
                    const currentDateTime = new Date(); //metoda din clasa DATE  
                    sessionStorage.setItem("date", formatDateTime(currentDateTime));
                   
    
                    setTimeout(function(){//set timeout
                        window.location.href = "requests.html";
                    },500);
                }else{
                    alert("Invalid username or password. Try again?");
                }
            })
            .catch((error) =>{
                console.error("Error retrieving user list:",error);
            });
    }

    function resetErrors() {
        document.getElementById("username-error").textContent = '';
        document.getElementById("password-error").textContent = '';
    }
};

function formatDateTime(date) {
    const time = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return date.toLocaleDateString('EU', time);
}


