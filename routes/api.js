import express from "express"
const router = express.Router()

import * as UserController from '../app/controllers/userController.js';
import * as TaskController from '../app/controllers/taskController.js'
import authMiddleware from "../app/middlewares/authMiddleware.js";

// Users
router.post("/Registration", UserController.Registration)
router.post("/Login", UserController.Login)
router.get("/ProfileDetails",authMiddleware ,UserController.ProfileDetails)
router.post("/ProfileUpdate",authMiddleware, UserController.ProfileUpdate)
router.get("/EmailVerify/:email", UserController.EmailVerify)
router.post("/CodeVerify", UserController.CodeVerify)
router.post("/ResetPassword", UserController.ResetPassword)


// Task
router.post("/CreateTask",TaskController.CreateTask)
router.get("/CountTask",TaskController.CountTask)
router.get("/DeleteTask",TaskController.DeleteTask)
router.get("/UpdateTaskStatus",TaskController.UpdateTaskStatus)
router.get("/TaskListByStatus",TaskController.TaskListByStatus)

export default router