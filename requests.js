
function logout(){
    alert("You have been logged out.");
    sessionStorage.clear();
    window.location.href = "/index.html"; 
}