import fs from 'fs';
import express from 'express';
import { create } from 'domain';
const server=express()


server.post("/createfile",(req,res)=>{zc
    try{
     fs.writeFile(`Task/${Date.now()}`,Date().toString(),()=>{
        console.log("created successfully")
        })
        res.send({message:"File created successfully"})
    }
    catch(error){cz
        res.send({message:error})
    }

})
server.get("/",(req,res)=>{
    let file=fs.readdirSync('./Task')
    console.log(file)
    res.send({data:"Data getting successfully"});
})
const port=5000;
server.listen(port,
    ()=>{
        console.log("server listening on port"+port)});

