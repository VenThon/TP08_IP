const {readUsers} = require("../db/db");

const login =(email, password) =>{
    console.log(password);
    console.log(email);
    const users = readUsers();
    for(let i=0; i<users.length; i++){
        let user = users[i];
        if(user.email == email){
            if(user.password == password){
                return{
                    success: true ,
                    data: user
                }
            }
        }
    };
    return{
        success: false,
        err: "Email and password is incorrect"
    }
}

module.exports = {
    login
}