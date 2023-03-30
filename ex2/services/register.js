const { readUsers, writeUser} = require("../db/db");

const register = (param) =>{
    const {email,username,firstname,lastname,password} = param;
    let users = readUsers();
    for(let i=0; i<users.length; i++){
        const user = users[i];
        if(user.email == email){
            return{
                success: false,
                err:  "Email is used already"
            }
        }
        if(user.username == username){
            return{
                success: false,
                err: "username is used already"
            }
        }
    }
    users.push(param);
    writeUser(users);
    return{
        success: true,
        data: param
    }
}

module.exports ={
    register
}