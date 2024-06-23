function setUser(username){
    this.username = username
    // console.log(username);
}

function createUser(username,email,password){
    setUser.call(this,username)
    this.email = email
    this.password =  password
}
const users = new createUser("rahul", "rahul@google.com","123421")
console.log(users);