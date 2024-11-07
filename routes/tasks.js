const express = require("express");
const router = express.Router();
const {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
    createUser,
    getAllTasks2,
} = require("../controllers/tasks");
const {get} = require("mongoose");

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
router.post("/createUser", createUser);
router.get("/get2", getAllTasks2);

module.exports = router;