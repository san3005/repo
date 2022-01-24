const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/backend-todo",{ 
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("connected to database"))
.catch(console.err);

const Todo=require('./models/Todo');

app.get('/todos',async(req,res)=>{
    const todo=await Todo.find();
    res.json(todo);
})
app.delete('/todos/delete/:id',async(req,res)=>{
    const tada=await Todo.findByIdAndDelete(req.params.id);
    res.json({tada});
})

app.post('/todos/new',async(req,res)=>{
    const todo=new Todo({
text:req.body.text,
    })
    todo.save();
    res.json(todo);
});
app.get('/todos/complete/:id',async(req,res)=>{
    const todo=await Todo.findById(req.params.id);
    todo.complete=!todo.complete;
    todo.save();
    res.json(todo);

});
app.listen(8000);