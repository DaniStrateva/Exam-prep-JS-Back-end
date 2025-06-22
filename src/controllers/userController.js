import {Router} from "express";
import userService from "../services/userService.js";
import { AUTH_COOKIE_NAME } from "../config/index.js";
import { isGuest } from "../middlewares/authMiddleware.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const userController = Router();

userController.get('/register',isGuest,(req,res)=>{
    res.render('user/register');
});

userController.post('/register',isGuest,async (req,res)=>{
    const userData = req.body;
//have to add error handling later

        //register user
        const token = await userService.register(userData);
        //attach token to cookie
        res.cookie(AUTH_COOKIE_NAME,token);

        //redirect to home page
        res.redirect("/");
     
});

userController.get('/login',isGuest,(req,res)=>{
    res.render('user/login');
});

userController.post('/login',isAuth, async(req,res)=>{
    const {username, password} = req.body;

    //call userService.login
    const token = await userService.login(username, password);
    
    //attach token to cookie
    res.cookie(AUTH_COOKIE_NAME, token);

    res.redirect('/');
});

userController.get('/logout',isAuth,(req,res)=>{
    //have to delete cookie from user session
    res.clearCookie(AUTH_COOKIE_NAME);

    res.redirect('/');
})

export default userController;