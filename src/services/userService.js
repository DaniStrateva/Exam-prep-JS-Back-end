import User from "../models/User.js"

export default{
    register(userData){
        //check if passwords are the same
        if(userData.password !== userData.rePassword){
            throw new Error('Password Missmatch');
        }
        return User.create(userData);
    }
}