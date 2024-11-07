const Task = require("../models/Task");
const assert = require("assert");

const getAllTasks = async (req, res) => 
{
    console.log("called getAllTasks");
    try
    {
        const allTask = await Task.find({});
        res.status(200).json(allTask);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
};

const getAllTasks2 = async (req, res) =>
{
    console.log("called getAllTasks2");
    try
    {
        const allTask = await Task.find({});
        res.status(200).json(allTask);
    }
    catch (err)
    {
        res.status(500).json(err);
    }
}

const createTask = async (req, res) => 
{
    console.log("called createTask");
    try 
    {
        const createTask = await Task.create(req.body);
        res.status(200).json(createTask);
    }
    catch(err) 
    {
        res.status(500).json(err);
    }
};

const createUser = async (req, res) =>
{
    console.log("called createUser from Unity");
    try {
        const createUser = await Task.create(req.body);
        res.status(200).json(createUser);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
}

const getSingleTask = async (req, res) => {
    console.log("called getSingleTask");
    try
    {
        const getSingleTask = await Task.findOne( { _id: req.params.id });
        if(!getSingleTask)
        {
            return res.status(404).json(`_id:${req.prams.id}は存在しません。`);
        }
        res.status(200).json(getSingleTask);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
};

const updateTask = async (req, res) => {
    console.log("called updateTask");
    try
    {
        const updateTask = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new: true
            }
        );
        if(!updateTask)
        {
            return res.status(404).json(`_id:${req.prams.id}は存在しません。`);
        }
        res.status(200).json(updateTask);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
};

const deleteTask = async (req, res) => {
    console.log("called deleteTask");
    try
    {
        const deleteTask = await Task.deleteOne(
            { _id: req.params.id }
        );
        if(!deleteTask)
        {
            return res.status(404).json(`_id:${req.prams.id}は存在しません。`);
        }
        res.status(200).json(deleteTask);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
    createUser,
    getAllTasks2,
};