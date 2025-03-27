//const tindeUser = new Object;
const tinderUser = {};
tinderUser.name="bob";
tinderUser.id="bob@gamil.com";
tinderUser.IsLoggedin=false;
console.log(tinderUser);

const someUser = {
    email:"someUser@gmail.com",
    fullName:{
        userFullname:{
            firstName:"Mahesh",
            middleName:"Kumar",
            lastName:"Yadav"
        }
    }
}
console.log(someUser.fullName.userFullname.firstName, someUser.fullName.userFullname.middleName, someUser.fullName.userFullname.lastName);
console.log(someUser.fullName?.userFullname.middleName);
console.log(someUser.fullName.userFullname.lastName);


const source = {1:"apple", 2:"mango"};
const target = {3:"banana",4:"grapes"};

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

//merging objects
const mergedObj  = Object.assign({},source,target); // (first method) {} -> empty object,  all the objects i.e source and target are getting stored in {}
console.log(mergedObj);

const mergedObject = {...obj1,...obj2};  // (second method)
console.log(mergedObject);



console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));



// Object Destructuring
const course={
    courseName: "JS",
    Fee : 999,
    Duration : "100 hours"
}
const {Duration : totalTime} = course;
console.log(totalTime);


