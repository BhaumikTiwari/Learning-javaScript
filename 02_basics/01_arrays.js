// array
const arr=[1,2,3,4,5,5,6,9];
console.log(arr);

const arr2=new Array(1,2,3,4,5)

// Array methods

arr2.push(6);
arr2.push(7);
arr2.pop();
console.log(arr2);

arr2.unshift(9); // pushes value at starting 
arr2.shift();    // pops value from starting
console.log(arr2);

console.log(arr2.includes(10));
console.log(arr2.indexOf(4));

const newarr=arr2.join(); // joins the arrays and convert them into string datatype
console.log(newarr);
console.log(typeof(newarr));


// slice , splice

const n1=arr2.slice(1,3);
console.log();

const n2=arr2.splice(1,3); // splice will manipulate the orignal array
console.log(n2);

console.log(arr2);







