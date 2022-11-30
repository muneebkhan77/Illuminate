import express from "express";
import Form1 from './../Form.js'
import {v4 as uuidv4} from 'uuid';



const formRouter = express.Router();




formRouter.post('/submitForm', async (req,res)=>{

const data  =req.body
Form1.syncIndexes();
Form1.ensureIndexes();
await Form1.create(data)
console.log(data)

res.send(data)
console.log('form submitted')


})

export default formRouter;