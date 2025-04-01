const user={
    userName:"Bhaumik Tiwari",
    price: 699,

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to the website`);
        console.log(this);
    }
}

user.welcomeMessage();
user.userName="Vibhu";
user.welcomeMessage();
console.log(this); 


const addTwo=(num1,num2) => {
    return num1+num2;
}

const add=(a,b) => a+b;
