import mongoose from "mongoose";

const form3Schema = new mongoose.Schema({

   
    firstCode:{
        type : String,
        // required: true
    } ,
    learnToCode:{
        type : String,
        // required: true
    } ,
    formalEducation: {
        type: String,
    },
    programmingScriptingandMarkupLanguages: {
        type: String,
    },
    developmentEnvironment : {
        type: String,
    },
    databaseEnvironments: {
        type: String,
    },
    cloudPlatforms: {
        type: String,
    },
    
    webFrameworksAndLibraries: {
        type: String,
    },
    otherFrameworksAndLibraries: {
        type: String,
    },
    tools: {
        type: String,
    },
    operatingSystem: {
        type: String,
    },
    getStuck: {
        type: String,
    },


})


export default mongoose.model("Form2", form3Schema)
