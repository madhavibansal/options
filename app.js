const express=require("express");
const app=express();
const postroute=require('./routes/post');

const bodyparser=require('body-parser');

app.use(bodyparser.json())


app.use('/',postroute);
app.put('/',(req,res) =>{
    const username= req.body.name
    res.send(req.body.username)
    
})
app.delete('/',(req,res) =>{
    
    res.send("delete username")
    
    
})
app.post('/',(req,res) =>{
    const age= req.body.age
    res.send(age)
    
    
})
const port=8080;
app.listen(port,() => {
console.log(`a jwtauth port: ${port}`)
});