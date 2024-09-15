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
router.post("/CreateTask",authMiddleware, TaskController.CreateTask)
router.get("/CountTask",authMiddleware, TaskController.CountTask)
router.get("/DeleteTask/:id",authMiddleware, TaskController.DeleteTask)
router.get("/UpdateTaskStatus/:id/:status",authMiddleware, TaskController.UpdateTaskStatus)
router.get("/TaskListByStatus/:status",authMiddleware, TaskController.TaskListByStatus)

export default router