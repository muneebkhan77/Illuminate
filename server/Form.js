import mongoose from "mongoose";

const form2Schema = new mongoose.Schema({

   
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
    developmentEnvironmet : {
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


export default mongoose.model("Form1", form2Schema)
