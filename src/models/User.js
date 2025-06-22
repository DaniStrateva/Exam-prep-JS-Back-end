import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    //sample data, edit when doing specific project
    username:{
        type: String,
        required: [true, 'Username is required!'],
    },
    email:{
        type: String,
        required: [true, 'Email is required!'],
    },
    password:{
        type: String,
        required: [true, 'Password is required!'],
    }
});

//hash password before db save
userSchema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password, 10);
});

const User = model('User', userSchema);

export default User;