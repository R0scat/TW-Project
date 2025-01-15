clickCounter();

function clickCounter() {
    //alert("it works?");
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    }
    else {
        localStorage.clickcount = 0;
    }
    localStorage.fontFamily = "Quattrocento";

    document.getElementById("clicks").innerHTML = localStorage.clickcount;
}