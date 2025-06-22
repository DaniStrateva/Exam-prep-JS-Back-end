import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import { JWT_SECRET } from "../config/index.js";

export default{
    async register(userData){
        //check if passwords are the same
        if(userData.password !== userData.rePassword){
            throw new Error('Password Missmatch');
        };

        //check if user exists
        const user = await User.findOne({username: userData.username});
        
        if(user){
            throw new Error('User already exists');
        }

        return User.create(userData);
    },
    async login(username, password){
        //validate user 
        const user = await User.findOne({username});

        if(!user){
            throw new Error('Invalid user or password!');
        }

        //validate password
        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid){
            throw new Error('Invalid user or password!')
        }

        //generate token
        const payload = {
            id: user.id,
            username,
        }
        const token = jsonwebtoken.sign(payload, JWT_SECRET, {expiresIn: '2h'})
    },
}