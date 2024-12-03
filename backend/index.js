import express from "express";
import dotenv from 'dotenv'
dotenv.config()
const app = express();
app.get('/',(req,res)=>{
    res.send('home page');
})
const port = process.env.PORT||3000;
app.get('/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'joke1',
            content:'joke no 1'
        },
        {
            id:2,
            title:'joke2',
            content:'joke no 2'
        },{
            id:3,
            title:'joke3',
            content:'joke no 3'
        },{
            id:4,
            title:'joke4',
            content:'joke no 4'
        },{
            id:5,
            title:'joke5',
            content:'joke no 5'
        }
    ]
    res.send(jokes)
})

app.listen(port,()=>{
    console.log(`server at https://localhost:${port}`);

})
