// Dates
let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toISOString);
console.log(typeof(mydate));

let myCreatedDate = new Date(2024, 0, 6);
console.log(myCreatedDate.toDateString());


let timeStamp=Date.now();
console.log(timeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate  = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString("default",{
    weekday : "long"
})