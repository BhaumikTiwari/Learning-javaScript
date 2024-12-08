// Primitive 
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt


const score=100;
const scoreValue=100.33;

const isLoggedin=false;
const outsideTemp=null;
let usermail;


// Refrence (non primitive)
// Arrays, Objects, Functions

const heros=["batman","superman","spiderman"];
let obj={
    name:"bhaumik",
    age:24
}

const fun = function(){
    console.log("hello there");
}

console.log(typeof(obj));
console.log(typeof(fun));



// Memory Allocation
// Stack(primitive) , heap(non primitive)

let username = "Bhaumik";
let anothername=username;
anothername="Vibhu";
console.log(username);
console.log(anothername);

let user1={
    email:"bhaumik@gmail.com",
    upi:"7881102809@ybl"
}

let user2=user1;
user2.email="tiwari@gmail.com";

console.log(user1);
console.log(user2);
