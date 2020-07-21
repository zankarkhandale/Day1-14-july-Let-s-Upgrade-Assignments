class User{
    constructor(name, age, email){
this.name=name;
this.age=age;
this.email=email;
this.luCoins=0;
this.courses=[];
    }
    static greet(){
        console.log("Hello there");
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name, age, email);
        this.role=role;
    }

    addCoins(user,luCoins){
        user.luCoins+=(luCoins);
        console.log(user);
        return this;
    }
    removeCoins(user,luCoins){
        user.luCoins-=luCoins;
        console.log('${user.name} has ${user.luCoins} coins');
        return this;
    }
     
    
   
}
class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }

    deleteUser(user){
        users=users.filter(u=>{
            return u.email != user.email;
        })
    }
    
}
 
let user1=new User('Prince',25,'prince@gmail.com');
let user2=new User('King', 56, 'king@gmail.com');
let mod=new Moderator('Berlin', 25, 'b@gmail.com');
let admin=new Admin('Rio', 25, 'r@gmail.com')

let users=[user1,user2,mod,admin];

users.forEach(element=>{
    console.log(element);
});

User.greet();
mod.addCoins(user1,10);
mod.addCoins(user2, 5);

admin.deleteUser(user1);
console.log(users);

//user1.login().addCoins().addCoins().logout();