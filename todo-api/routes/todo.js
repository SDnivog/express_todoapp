const express = require('express')
const router = express.Router()

const Todo = require('../models/todo')

// Add ToDo
router.post('/', async(req,res) => {
    const todo = new Todo({
        title: req.body.title
    })

    try{
        const data =  await todo.save() 
        res.json(data)
    }catch(err){
        res.send('Error')
    }
})

// Get All ToDo 

router.get('/', async(req,res) => {
    try{
           const todos = await Todo.find()
           res.json(todos)
    }catch(err){
        res.send('Error ' + err)
    }
})

// Get TodoBy Id

router.get('/:id', async(req,res) => {
    try{
           const todo = await Todo.findById(req.params.id)
           res.json(todo)
    }catch(err){
        res.send('Error ' + err)
    }
})


// Todo Update 

router.patch('/:id',async(req,res)=> {
    try{
        const todo = await Todo.findById(req.params.id) 
        todo.title = req.body.title
        const data = await todo.save()
        res.json(data)   
    }catch(err){
        res.send('Error')
    }

})

// Delete Todo 

router.delete('/:id', async(req,res) => {
    try{
        const todo = await Todo.findById(req.params.id)
        Todo.deleteOne({todo})
        .then(()=>{
            res.send("Deleted successfully !");
        })
    }
    catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router