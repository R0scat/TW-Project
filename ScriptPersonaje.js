
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

myInterval = setInterval(toggle, 500);

function toggle(){
    document.getElementById("titlu").classList.toggle("TitleStyle");
}

function getRandomPastelColor() {
    const r = Math.floor((Math.random() * 127) + 127);
    const g = Math.floor((Math.random() * 127) + 127);
    const b = Math.floor((Math.random() * 127) + 127);
    return `rgb(${r}, ${g}, ${b})`;
}

function startChangingBackground() {
    //alert('aici intra');
    setInterval(() => {
        document.body.style.backgroundColor = getRandomPastelColor();
    }, 1000);
}


