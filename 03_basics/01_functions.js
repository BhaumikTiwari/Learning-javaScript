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


function calculatePrice(...product){       // rest operator
    return product;
}
console.log(calculatePrice(209,1033,399));

function calculatePrice2(prod1,prod2,...prod){
    return prod;
}
console.log(calculatePrice2(100,200,500,890));



const user={
    username:"Bhaumik",
    price:1000
}

function handleUser(anyobject){
    console.log(`This user is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleUser(user);

handleUser({
    username:"Sam",
    price:100
})


const arr=[10,20,30,40];

function returnFirstelement(getarray){
    return getarray[0];
}

console.log(returnFirstelement(arr));
