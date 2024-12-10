const marvel_heros = ["Thor", "Ironan", "spiderman"]
const dc_heros = ["Batman","Superman","flash"];

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_arr=[1,2,3,[4,5,6],7,[6,7[4,5]]];
const another_arr2 = another_arr.flat(Infinity);
console.log(another_arr2);

console.log(Array.isArray("bhaumik"));
console.log(Array.from("bhaumik"));
console.log(Array.from({name:"bhaumik"}));

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
