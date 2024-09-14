import mongoose from "mongoose";


const userSchema = mongoose.Schema(
    {
        email:{type:String, unique:true, required:true},
        firstName:{type:String, required:true},
        lastName:{type:String,required:true},
        mobile:{type:String, unique:true, required:true},
        passwprd:{type:String, unique:true, required:true},
        otp:{type:String, default:0}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const Users = mongoose.model("Users",userSchema)

export default Users