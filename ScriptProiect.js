window.onload = function() {
    var canvas = document.createElement('canvas');
    const divToAppend = document.getElementById('toAppend');
    var color = '#b9ab8c';
    var currentTemplate = 1;
    // am nevoie sa setup uiesc culoarea de la link uri for some reason...
    var links = document.getElementsByTagName('a');
    sessionStorage.setItem('nrPresses', 0);

    canvas.id = 'canvas';
    canvas.className = 'canvasClass';

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.style.padding = '25vw';
    canvas.onclick = changePageStyle;
    
    divToAppend.appendChild(canvas);
    
    draw(color);
    
    function draw(color) {
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var textColor = document.body.style.backgroundColor;

            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(innerWidth/4, innerHeight/4, innerHeight/4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();

            // questionMark(ctx, color);
        }
    }

    function questionMark(ctx, color) {
        var height = innerHeight;
        var width = innerWidth;
        ctx.font = '50px Arial';
        ctx.fillStyle = color;

        ctx.fillText('? ? ?', Math.floor(Math.random() * width) - 900, Math.floor(Math.random() * height));
    }
    
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();
    });

    //window.addEventListener('onclick', changeColor, false);

    // function changeColor(){
    //     if (color === '#b9ab8c'){
    //         color = 'red';
    //     } else {
    //         color = '#b9ab8c';
    //     }
    //     draw(color);
    // }

    function changePageStyle(){
        var links = document.getElementsByTagName('a');
        if (currentTemplate === 1){
            for (var i = 0; i < links.length; i++){
                links[i].style.color = 'black';
            }
            document.body.style.backgroundColor = '#b9ab8c';
            document.body.style.color = 'black';
            currentTemplate = 0;
            draw('black');
        }
        else {
            for (var i = 0; i < links.length - 2; i++){
                links[i].style.color = '#b9ab8c';
            }
            document.body.style.backgroundColor = 'black';
            document.body.style.color = '#b9ab8c';
            currentTemplate = 1
            draw('#b9ab8c');
        }
    }
}

//function ButtonClick(){
    // document.getElementById("btn").style.color = "#b25146";
    //document.getElementById("btn").style.backgroundColor = "#b25146";
//}

window.addEventListener('keydown', checkKeyPressed, false); 

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function checkKeyPressed(event){
    if (event.key === "Escape"){
        scrollToTop();
    }
}



// document.addEventListener('DOMContentLoaded', function(){

// create a button to go back up
// const goUp = document.createElement('button');
// goUp.innerText = 'Go Up';
// goUp.style.position = 'fixed';
// goUp.style.bottom = '20px';
// goUp.style.right = '20px';
// goUp.style.color = 'white';
// goUp.style.backgroundColor = 'black';
// goUp.style.opacity = '0.8';

// document.body.appendChild(goUp);

// window.onscroll = appear();
// function appear(){
//     if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){ // if the user scrolls more than 500px from the top of the page or the top of the document
//         goUp.style.display = 'block';
//     } else {
//         goUp.style.display = 'none';
//     }
// }

// goUp.addEventListener('click', goUpFunct())

// function goUpFunct(){
//     alert("asta merge in sus");
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

// })
