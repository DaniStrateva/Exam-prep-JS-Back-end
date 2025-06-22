import { Schema, model } from "mongoose";

const userSchema = new Schema({
    //sample data, edit when doing specific project
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
});

const User = model('User', userSchema);

export default User;