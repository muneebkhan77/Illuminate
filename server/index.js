
import bodyparser from 'body-parser';
import usersRoutes from './routes/users.js';
import mongoose from 'mongoose';
import User from './User.js'
import Form1 from './Form.js'
import formRouter from './routes/form.js';
import cors from 'cors';
import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import Form2 from './Form2.js';
import formRouter2 from './routes/form2.js';


const app=express();
const PORT=5000;



app.use(cors())

mongoose.connect('mongodb+srv://muneebkhan:Illuminate123@cluster0.bp7hnyi.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,

    useUnifiedTopology: true
  }
).then((result) => {
 console.log('db connected')   
}).catch((err) => {
    console.error(err)
});;




app.use(bodyparser.json());
app.use("/api",userRouter);
app.use("/api",authRouter)
app.use('/form2', formRouter2);

app.get('/', (req,res)=>{
    console.log('[TEST}]!');
    res.send('Hello from homepage.');
});


app.listen(PORT, ()=>console.log(`server Running on port: http://localhost:${PORT}`));






