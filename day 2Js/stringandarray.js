/*confirm
let age = confirm("Are you over 18?");
console.log(age)
*/

//To show the variable and aray types
let name = "Killua and Gon are going to infiltrate the Gordon palace."
 let brick = "But the King and the royal Guards are planning to attack the Hunter's Association."

//charAt()
console.log(name.charAt(9));
console.log(brick.charAt(5));

//charCodeAt()
console.log(name.charCodeAt(2));
console.log(brick.charCodeAt(4));

//concat
console.log(name.concat(brick));
console.log(brick.concat(name));

//includdes()
console.log(name.includes("the"));
console.log(brick.includes("royal"));

//endsWith()
console.log(name.endsWith("palace"));
console.log(brick.endsWith("game"));

/*fromCharCode()
console.log(name.fromCharCode(108))
console.log(brick.fromCharCode(116));
*/

//indexOf()
console.log(name.indexOf("are"));
console.log(brick.indexOf("royal")); 

//lastindexOf
console.log(name.lastIndexOf("Gon"));
console.log(brick.lastIndexOf("King"));

//match()
console.log(name.match(/the/g));
console.log(brick.match(/to/g));


//repeat()
console.log(name.repeat(2));
console.log(brick.repeat(2));

//replace
console.log(name.replace(/the/g, "THE"));
console.log(brick.replace(/to/g, "THE"));

//search()
console.log(name.search("the"));
console.log(brick.search("to"));

//slice()
console.log(name.slice(2, 4));
console.log(brick.slice(9, 12));

//split()
console.log(name.split(" "));
console.log(brick.split(" "));

//startsWith()
console.log(name.startsWith("Killua"));
console.log(brick.startsWith("But"));

//substr()
console.log(name.substr(2, 4));
console.log(brick.substr(5, 8));

//substring()
console.log(name.substring(2, 4));
console.log(brick.substring(5, 9));

//trim()
let fruit="   Mango!!   ";
console.log(fruit.trim());


//toLowerCase()
console.log(name.toLowerCase());
console.log(brick.toLowerCase());

//toUpperCase
console.log(name.toUpperCase());
console.log(brick.toUpperCase());

//arrray
let kid=['one', true, 324, ['1', '2']];
let kid2=['rio', 'sydney', 'gio'];
console.log(kid);
console.log(kid.reverse());
console.log(kid.concat(kid2));
console.log(kid[3]);
console.log(Array.isArray(kid));