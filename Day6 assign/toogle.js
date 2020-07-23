const name=prompt("enter your name","Name");
title.innerText += `welcome to the family ${name}`;


//time clock
const ctime=document.getElementById('time');

function clock(){
    let date=new Date();
    let time=date.toLocaleTimeString();
    ctime.innerText=time;
}

setInterval(clock,1000);
console.log("HEllo");





//switching to dark mode
function switchtheme() {
    var element=document.body;
    element.classList.toggle("darkmode");
    
}