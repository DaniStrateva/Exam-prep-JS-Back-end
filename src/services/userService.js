import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'
import { JWT_SECRET } from "../config/index.js";
import { generateToken } from "../utils/userUtils.js";

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

        const token = generateToken(user);
        return token;
    },
}

