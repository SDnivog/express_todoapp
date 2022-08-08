const router = require("express").Router()

const Todo = require("../models/Todo")


// routes
router.post("/add/todo/",(req,res)=>{
    const { todo } = req.body;
    // console.log(todo);
    const NewTodo = new Todo({todo});

    // save to todo
    NewTodo.save().then(()=>{
        console.log("Successfully added !");
        res.redirect("/");
    })
    .catch((err)=> console.log(err));

})

.get("/delete/toto/:_id",(req,res)=>{
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log("Deleted successfully !");
        res.redirect("/");
    })
    .catch((err)=> console.log(err));
});


module.exports = router;