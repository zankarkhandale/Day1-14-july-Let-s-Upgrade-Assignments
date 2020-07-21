//fetch api

 async function fetchapi() {
    const response= await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data= await response.json();

    console.log(data);

    
}
fetchapi();

/*
function fetchapi(){    
     fetch('https://jsonplaceholder.typicode.com/todos/').then(
         response=>{console.log(response)
            return response.json()}).then(data=>{
             console.log(data);
             for(let i=0;i,data.length;i++){

                if(data[i].completed==true){
                    console.log(data[i]);
                }
             }
         })
         .catch(error=>console.log(error))
}
fetchapi();
*/