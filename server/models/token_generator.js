require("dotenv").config();
const JWT = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;
const options = {expiresIn: "10m"}

class TokenGenerator {
    static jsonwebtoken(user_id){        
        return JWT.sign({user_id: user_id, iat: Date.now()}, secret, options)
    }
}

module.exports = TokenGenerator;
