let  marks=prompt("enter the marks")
if(marks>=1 && marks<=100) {
    switch (true) {
        case marks>=90:
         console.log(`Marks are ${marks} and grade is A`);
            break;
         case marks<90 && marks>=75:
             console.log(`Marks are ${marks} and grade is B`);
             break;
             case marks<75 && marks>=55: 
             console.log(`Marks are ${marks} and grade is C`);
             break;
             case marks<55 && marks>=35:
                 console.log(`Your marks are ${marks} and grade is D`);
                 break;
            case marks<35 && marks>=25:
                console.log(`Your marks are ${marks} and grade is E`);
                break;
        default:
            console.log(`Your marks are ${marks}  and grade is F`);
            break;
    }
    
} 
else {
    console.log("enter the marks");
}
if (marks>=90) {
    console.log(`Marks are ${marks} and grade is A`);
} else if (marks<90 && marks>=75) {
    console.log(`Marks are ${marks}  and grade is B`);
}else if (marks<75 && marks>=55) {
    console.log(`Marks are ${marks}  and grade is C`);
}else if (marks<55 && marks>=35) {
    console.log(`Marks are ${marks} and grade is D`);
}else if (marks<35 && marks>=25) {
    console.log(`Marks are ${marks} and grade is E `);

}else{
    console.log(`marks are ${marks} and grade is F`);
    
}
let score=(marks>=90)? `Marks are ${marks} grade is A`:
        (marks<90 && marks>=75)? `Marks are ${marks} grade is B`:
        (marks<75 && marks>=55)? `Marks are ${marks} grade is C`:
        (marks<55 && marks>=35)? `Marks are ${marks} grade is D`:
        (marks<35 && marks>=25)? `Marks are ${marks} grade is E`:
        `Marks are ${marks} grade is F`;
        console.log(score);
