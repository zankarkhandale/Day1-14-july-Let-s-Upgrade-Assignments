 //ternary.
let marks=prompt("enter marks")



let macks=(marks>=90)? `your marks is ${marks} and grade is A.`:
          (marks>=80)? `your marks is ${marks} and grade is B.`:
         (marks>=70)? `your marks is ${marks} and grade is C.`:
         (marks>=60)? `your marks is ${marks} and grade is D`:
         (marks>=50)? `your marks is ${marks} and grade is E.`:
        `your marks are ${marks} and grade is F.`;
        console.log(macks);
