// singleton

// object literals

const mySym= Symbol("key1");
console.log(mySym);

const user={
    name: "Bhaumik",
    "full name": "Bhaumik Tiwari",
    [mySym] : "myKey1", // inserting Symbol inside an object
    age: 25,
    location: "Kanpur",
    email: "tiwaribhaumik900@gmail.com",
    isLogged: false,
    lastLoginDay: ["Monday","Saturday"]
}

console.log(user.email);
console.log(user["email"]); // preferred way
console.log(user["location"]);
console.log(user.location);
console.log(user["full name"]);
console.log(user[mySym]);

user.email = "tiwaribhaumik5@gmail.com";  // way to override values
//Object.freeze(user); // we are locking the object here so that initial values do not get changed
user.email = "bhaumik@google.com";  // this line will not throw the error, but new value will also not propogate

user.greeting = function(){
    console.log("Hello JS user");
} 

user.greetingTwo = function(){
    console.log(`hello JS user ${this.name}`);
}
user.greeting();
user.greetingTwo();
console.log(user["email"]);