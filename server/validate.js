import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import Joi from 'joi';
import JoiPasswordComplexity from "joi-password-complexity";



const validate= (data) =>{
    const schema=Joi.object({
        firstName:Joi.string().required().label("First Name"),
        lastName:Joi.string().required().label("Last Name"),
        email:Joi.string().required().label("Email"),
        password:Joi.JoipasswordComplexity().required().label("Password"),



    });
    return schema.validate(data)
};

export default validate;