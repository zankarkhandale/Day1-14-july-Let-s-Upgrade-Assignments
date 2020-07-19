/*function ask(questions, yes, no) {
    if (confirm(question)) 
        yes()
     else 
        no();
    
}
ask("Do you agree?",
function () {alert("You agreed.");}
function () {alert("You have canceled the execution")
    
}
);*/

let ask=(question,Yes,No)=>confirm(question)==Yes()?Yes()=No():
ask(
     `Do you agree?`,
function (){return alert("you have agreed");},
function(){alert("You have cancelled the execution");}

);