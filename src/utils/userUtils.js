export function generateToken(user){
    //generate token
        const payload = {
            id: user.id,
            username: user.username,
        }
        const token = jsonwebtoken.sign(payload, JWT_SECRET, {expiresIn: '2h'});

        return token;
}