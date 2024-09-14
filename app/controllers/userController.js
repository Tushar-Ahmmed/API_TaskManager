
import Users from "../models/usersModel.js"
import SendEmail from "../utility/emailUtility.js"
import { TokenEncode } from "../utility/tokenUtility.js"

export const Registration = async (req, res)=>{
    try{
        let reqBody = req.body
        await Users.create(reqBody)
        return res.json({"status":"success", "message":"User Registeation Success"})
    }catch(error){
        return res.json({"status":"failed", "message": error.toString()})
    }   
}



export const Login = async (req, res)=>{
    try{
        let reqBody = req.body
        const data = await Users.findOne(reqBody)
        if(data == null){
            return res.json({"status":"Failed", "message":"User Not Found", "data":data})
        }
        else{
            // Login Success so we need jwt tocken
            const token = TokenEncode(data['email'], data['_id'])
            return res.json({"status":"success", "message":"User Login", "token":token})
        }       
    }catch(error){
        return res.json({"status":"failed", "message": error.toString()})
    }   
}



export const ProfileDetails = async (req, res)=>{
    try {
        let user_id = req.headers['user_id']
    let data = await Users.findOne({_id:user_id})
    return res.json({"status":"success", "message": "User profile successfully fetched", "data":data})
    } catch (error) {
        return res.json({"status":"faild", "message": error.toString()})
    }
}





export const ProfileUpdate = async (req, res)=>{
    try {
        let user_id = req.headers['user_id']
        let reqBody = req.body
        await Users.updateOne({_id:user_id},reqBody)
        return res.json({"status":"success", "message": "User profile successfully Updated"})
    } catch (error) {
        return res.json({"status":"faild", "message": error.toString()})
    }
}






export const EmailVerify = async (req, res)=>{
    try {
        let email = req.params.email
        let data = await Users.findOne({email: email})
        if(data == null){
            return res.json({"status":"Failed", "message":"User Email Does Not Exists"})
        }
        else{
            // Send OPT
            let code = Math.floor(100000+Math.random()*900000)
            let EmailTo = email
            let EmailText = "Your Code is " + code
            let EmailSub = "Task Manager Verification Code"
    
            await SendEmail(EmailTo, EmailText, EmailSub)
    
            // Update OTP
            await Users.updateOne({email:email},{otp:code})
            return res.json({"status":"success", "message":"Verification Successfull check Email"})
        }
    } catch (e) {
        return res.json({"status":"failed","message":e.toString()})
    }
}



export const CodeVerify = async (req, res)=>{
    try {
        let reqBody = req.body
        let data = await Users.findOne({email: reqBody.email, otp: reqBody.otp})
        if(data == null){
            return res.json({"status":"Failed", "message":"Wrong Verification Code"})
        }
        else{
            return res.json({"status":"success", "message":"Verification Successfull"})
        }
    } catch (e) {
        return res.json({"status":"failed","message":e.toString()})
    }
}




export const ResetPassword = async (req, res)=>{
    return res.json({"status":"Seccess"})
}
export const Logout = async (req, res)=>{
    return res.json({"status":"Seccess"})
}