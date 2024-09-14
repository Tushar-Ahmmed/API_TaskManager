import jwt from "jsonwebtoken"
import { JWT_EXPIRE_TIME, JWT_KEY } from "../config/config.js"

export const TokenEncode = (email, user_id)=>{
    const PAYLOAD = {email:email, user_id:user_id}
    const KEY = JWT_KEY
    const EXPIRE = {expiresIn:JWT_EXPIRE_TIME}
    const TOKEN = jwt.sign(PAYLOAD,KEY,EXPIRE)
    return TOKEN
}

export const TokenDecode = (token)=>{
    try {
        const KEY = JWT_KEY
        const verified = jwt.verify(token, KEY)
        return verified
    } catch (error) {
        return null
    }
}