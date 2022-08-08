const router = require("express").Router()

const Todo = require("../models/Todo")

//All routes

// router.get('/',(req,res) =>{
//     // res.send("Welcome to home page!")
//     res.render("index")
// });

router.get('/',async(req,res) =>{
    // res.send("Welcome to home page!")
    const allTodo = await Todo.find();
    res.render("index", {todo:allTodo})
});

module.exports = router;