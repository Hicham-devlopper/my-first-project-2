let img = document.querySelector('.img');
let container = document.querySelector('.container');
let firstPhone = document.querySelector('.icons img');

img.src = firstPhone.src;   // غادي ياخذ أول صورة مباشرة

function phones(phone){
    img.style.transform = "scale(0.8)";
    img.style.opacity = "0";

    setTimeout(function(){
        img.src = phone;
        img.style.transform = "scale(1)";
        img.style.opacity = "1";
    },200);
}

function colors(color){
    container.style.background =
    "linear-gradient(45deg," + color + ",#111," + color + ")";
}