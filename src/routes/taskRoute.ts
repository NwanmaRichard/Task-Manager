import express from "express";
import {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
} from "../controllers/taskController";
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
