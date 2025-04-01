// immideately Invoked Function Expression

(function DB(){         // named iife
    console.log("database connected");
})();

(()=>{                  // un-named iife
    console.log("database two connected")
})();

( (username)=>{
    console.log(`user name is ${username}`)
} )("Bhaumik");