console.log("Hello World!!")

const student={
    name:"Helsinki",
    age:24,
    projects:{
        diceGame:"Two player dice game using Javascript"
    }
}

//const{name,age}=student;
//console.log(name,age);

//const{name,projects,diceGame}=student;
//console.log(name,projects.diceGame);

//const {age,name,projects,diceGame}=student
//console.log(age,name,projects.diceGame);

//const{name,age,projects}=student;
//console.log(name,age,projects);

const{name,age,projects,diceGame}=student;
console.log(name,age,projects.diceGame);