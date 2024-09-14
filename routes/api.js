import express from "express"
const router = express.Router()

import * as UserController from '../app/controllers/userController.js';
import * as TaskController from '../app/controllers/taskController.js'

// Users
router.post("/Registration", UserController.Registration)
router.post("/Login", UserController.Login)
router.post("/CodeVerify", UserController.CodeVerify)
router.post("/EmailVerify", UserController.EmailVerify)
router.get("/ProfileDetails", UserController.ProfileDetails)
router.post("/ProfileUpdate", UserController.ProfileUpdate)
router.post("/ResetPassword", UserController.ResetPassword)
router.post("/Logout", UserController.Logout)

// Task
router.post("/CreateTask",TaskController.CreateTask)
router.get("/CountTask",TaskController.CountTask)
router.get("/DeleteTask",TaskController.DeleteTask)
router.get("/UpdateTaskStatus",TaskController.UpdateTaskStatus)
router.get("/TaskListByStatus",TaskController.TaskListByStatus)

export default router