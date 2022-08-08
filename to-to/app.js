const express = require('express');

const mongoose = require("mongoose")

const app = express();


// DB configuration
mongoose.connect("mongodb://localhost/todo");

// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


// routes

app.use(require("./routes/index"))
app.use(require("./routes/todo"))



// Server configurations...
app.listen(3000,()=> console.log('Server running on Port:3000'))