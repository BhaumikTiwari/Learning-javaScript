function sayMyname(){
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("U");
    console.log("M");
    console.log("I");
    console.log("K");
}
sayMyname();


function addTwonumbers(a,b){
    return a+b;
}

console.log(addTwonumbers(6,4));


function userLoginMessage(user){
    if(!user){
        return "please enter username!";
    }
    return `${user} logged in sussecfully`;
}

console.log(userLoginMessage("Bhaumik"));
