var form = document.getElementById('submit');
// to make the actual form
function submitForm(){
    var name = document.getElementById('name').value;
    var nickname = document.getElementById('nickName').value;
    alert(name + nickname);
    console.log(name, nickname);
    if(name == "" || nickname == ""){
        alert("Please fill in all required fields");
    } else {
        alert("Thank you for your message, " + name);
    }
}
