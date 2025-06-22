import {Router} from "express";
import userService from "../services/userService.js";
import { AUTH_COOKIE_NAME } from "../config/index.js";

const userController = Router();

userController.get('/register',(req,res)=>{
    res.render('user/register');
});

userController.post('/register',async (req,res)=>{
    const userData = req.body;
//have to add error handling later

        //register user
        const token = await userService.register(userData);
        //attach token to cookie
        res.cookie(AUTH_COOKIE_NAME,token);

        //redirect to home page
        res.redirect("/");
     
});

userController.get('/login',(req,res)=>{
    res.render('user/login');
});

userController.post('/login',async(req,res)=>{
    const {username, password} = req.body;

    //call userService.login
    const token = await userService.login(username, password);
    
    //attach token to cookie
    res.cookie(AUTH_COOKIE_NAME, token);

    res.redirect('/');
});

userController.get('/logout',(req,res)=>{
    //have to delete cookie from user session
    res.clearCookie(AUTH_COOKIE_NAME);

    res.redirect('/');
})

export default userController;