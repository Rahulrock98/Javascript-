const user={
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log('got user details from database');
        // console.log(this);
        // console.log(`username: ${this.username}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


// const promisOne = new Promise()


function User(username, loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;                                               
    this.isLoggedIn = isLoggedIn   
    this.greeting =  function(){
        console.log(`Welcome ${this.username}`);
    }                
    // return this                                      
}

// const userOne = User("rahul",12,true)                        // constructor function return or give new instance like, new Promise, new User,etc.......
// const userTwo = User("chaiAurCode",10,false)                // if we run this program then output will show too many rough return, before actuall expected output. 
// console.log(userOne);                                        // if we add 'new' before 'User' then it will show expected output.
                                                            // that's why .... new is a constructor 

 const userOne = new User("rahul",12,true) 
 const userTwo = new User("chaiAurCode",10,false)
 console.log(userOne);
 console.log(userTwo);