n=Number(prompt("enter the number till where you want prime no."))
for ( var counter=0; counter<=n; counter++ ) {

    var notPrime=false;
    for (var i=2; i<=counter; i++){
        if(counter%i===0 && i!==counter){
            notPrime=true;
        }
    }
    if (notPrime===false){
        console.log(counter);
    }
}