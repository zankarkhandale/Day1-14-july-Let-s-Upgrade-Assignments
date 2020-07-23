 //document.write("open console box for output");
 var kill=['Pink','Orange','Green','Yellow','Blue','Brown','Maroon','Ivory','Orchid','wheat'];
 function change() {
     setTimeout(function loop() {
         document.bgColor=kill.shift();
         if(kill.length)
         {
           setTimeout(loop,5000);
         }
     },5000);
 }
     function start()
     {
        setInterval(change(),5000); 
     }