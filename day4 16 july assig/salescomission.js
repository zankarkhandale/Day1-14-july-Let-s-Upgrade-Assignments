let sales=prompt("enter the value");

if (sales>=0 && sales<=5000) {
    var k=sales*0.02
    console.log(`Total comission earned by the employee: ${k}.`);
} else if (sales>=5000 && sales<=10000) {
    var m=((5000*0.02)+((sales-5000)*0.05));
    console.log(`Total comission earned by the employee:${m}.`);
    
} else if(sales>=10000 && sales<=20000) {
    var n=((5000*0.02)+(5000*0.05)((sales-10000)*0.07));
    console.log(`total comission earned by employee: ${n}`)
} else if (sales>=20000) {
    var o=((5000*0.02)+(5000*0.05)+(10000*0.07)+(sales-20000)*0.1);
    console.log(`total comission earned by the employee: ${o}.`);
}