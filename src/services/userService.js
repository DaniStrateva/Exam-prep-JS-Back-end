import User from "../models/User.js"

export default{
    register(userData){
        //check if passwords are the same
        if(userData.password !== userData.rePassword){
            throw new Error('Password Missmatch');
        };

        //check if user exists
        const user = User.findOne({email: userData.email});
        if(user){
            throw new Error('User already exists');
        }
        
        return User.create(userData);
    }
}