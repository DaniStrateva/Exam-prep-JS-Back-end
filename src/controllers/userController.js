import {Router} from "express";
import userService from "../services/userService.js";

const userController = Router();

userController.get('/register',(req,res)=>{
    res.render('user/register');
});

userController.post('/register',async (req,res)=>{
    const userData = req.body;
//have to add error handling later

        await userService.register(userData);
        res.redirect("/users/login");
     
});

userController.get('/login',(req,res)=>{
    res.render('user/login');
});

userController.post('/login',async(req,res)=>{
    const {username, password} = req.body;

    //call userService.login
    const token = await userService.login(username, password);
    
    //attach token to cookie
    res.cookie('auth', token);

    res.redirect('/');
});

export default userController;