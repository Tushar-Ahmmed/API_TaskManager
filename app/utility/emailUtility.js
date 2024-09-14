
import nodemailer from "nodemailer"
import { EMAIL_SECURITY, EMAIL_HOST, EMAIL_PASS, EMAIL_PORT, EMAIL_USER } from "../config/config.js"












const SendEmail = async (EmailTo, EmailText, EmailSub)=>{
     
    let transporter = nodemailer.createTransport({
        host:EMAIL_HOST,
        port:EMAIL_PORT,
        security:EMAIL_SECURITY,
        auth:{
            user:EMAIL_USER,
            pass:EMAIL_PASS
        },
        tls:{
            rejectUnauthorized:false
        }
    })

    let mailOption ={
        from:"Task Manager MERN <info@teamrabbil.com>",
        to:EmailTo,
        sub:EmailSub,
        text:EmailText
    }

    return await transporter.sendMail(mailOption)

}

export default SendEmail