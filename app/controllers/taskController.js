import mongoose from "mongoose"
import tasks from "../models/taskModel.js"








export const CreateTask = async (req, res)=>{

    try {
        let user_id = req.headers.user_id
        let reqBody = req.body
        reqBody.user_id = user_id
        const data = await tasks.create(reqBody)
        res.json({"status":"success", "message":"Task Created Successfully", "data":data})

    } catch (e) {
        return res.json({"status":"Failed", "message":req.headers.user_id})
    }
}




export const UpdateTaskStatus = async (req, res)=>{
    try {
        let id = req.params.id
        let status = req.params.status
        let user_id = req.headers.user_id

        await tasks.updateOne({"_id":id, "user_id":user_id},{"status":status})
        res.json({"status":"success", "message":"Task Updated Successfully"})

    } catch (e) {
        return res.json({"status":"Failed", "message":e.toString()})
    }
}





export const TaskListByStatus = async (req, res)=>{
    try {
        let status = req.params.status
        let user_id = req.headers.user_id

        let data = await tasks.find({"user_id":user_id, "status":status})
        if(data == null){
            return res.json({"status":"success", "message":"No data Found"})
        }
        else{
            res.json({"status":"success", "data":data})
        }

    } catch (e) {
        return res.json({"status":"Failed", "message":e.toString()})
    }
}



export const DeleteTask = async (req, res)=>{
    try {
        let id = req.params.id
        let user_id = req.headers.user_id

        await tasks.deleteOne({"_id":id, "user_id":user_id})
        return res.json({"status":"success", "message":"Task Deleted Successfully"})

    } catch (e) {
        return res.json({"status":"Failed", "message":e.toString()})
    }
}



export const CountTask = async (req, res)=>{
    try {
        let ObjectId = mongoose.Types.ObjectId
        let user_id = new ObjectId(req.headers.user_id)

       const data = await tasks.aggregate([
        {$match:{"user_id":user_id}},
        {$group:{_id:"$status", sum:{$count:{}}}}
       ])
       return res.json({"status":"success", "message":"count success", "data":data})
       

    } catch (e) {
        return res.json({"status":"Failed", "message":e.toString()})
    }
}