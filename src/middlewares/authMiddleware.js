import { AUTH_COOKIE_NAME } from "../config/index.js";

export function auth(req,res,next){
    //get token
    const token = req.cookies[AUTH_COOKIE_NAME];

    //check if guest
    if(!token){
        return next();
    }
}