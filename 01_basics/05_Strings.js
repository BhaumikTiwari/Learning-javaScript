const str1="bhaumik";
const repocount=3;

console.log(`Hello my name is ${str1} and my repocount is ${repocount}`);

const username = new String("bhaumik");
console.log(username.length);
console.log(username[0]);
console.log(username.charAt(0));
console.log(username.toUpperCase())
console.log(username.charAt(6));
console.log(username.indexOf('i'));

let str2 = new String("amit and aman");
str2.slice(-8,4);
console.log(str2.replace("aman","robin"));

let str3= new String ("    oye sunn   ")
console.log(str3.trim());

//converting string to array
let str4 = new String("getting started with string in javascript");
console.log(str4.split(' '));

