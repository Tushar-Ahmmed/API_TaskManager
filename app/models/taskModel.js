import mongoose, { Mongoose } from "mongoose";


const userSchema = mongoose.Schema(
    {
        title:{type:String,required:true},
        description:{type:String, required:true},
        status:{type:String, required:true},
        user_id:{type:Mongoose.Schema.Types.ObjectId, unique:true, required:true}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const tasks = mongoose.model("tasks",userSchema)

export default tasks