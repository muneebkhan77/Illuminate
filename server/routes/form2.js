import express from "express";
import Form2 from './../Form2.js'
import {v4 as uuidv4} from 'uuid';



const formRouter2 = express.Router();




formRouter2.post('/submitForm2', async (req,res)=>{

const data  =req.body

await Form2.create(data)

res.send(data)
console.log('form submitted')


})

export default formRouter2;