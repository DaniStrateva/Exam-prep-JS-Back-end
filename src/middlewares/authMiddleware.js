import { AUTH_COOKIE_NAME, JWT_SECRET } from "../config/index.js";
import jsonwebtoken from 'jsonwebtoken'

export function auth(req,res,next){
    //get token
    const token = req.cookies[AUTH_COOKIE_NAME];

    //check if guest
    if(!token){
        return next();
    }

    //validate token
    try{
        const user = jsonwebtoken.verify(token,JWT_SECRET);
    }catch(err){
        res.clearCookie(AUTH_COOKIE_NAME);

        res.redirect('/users/login');
    }
    
}