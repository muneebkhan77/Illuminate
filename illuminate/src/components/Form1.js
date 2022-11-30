
import ReactDOM from 'react-dom';
import { redirect, useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Snackbar } from '@mui/material';
import { useState } from 'react';
import { Badge, Card, Collapse, Container} from 'react-bootstrap'



function App() {
  return <Button variant="contained">hello</Button>;
  <Snackbar message="submitted succesfully" autoHideDuration={3000}></Snackbar>
  
}




const Form1 = () =>{
  
  let history=useHistory();
  
  return (
    <>
    <div className='bg-dark'>
    <Container  className=''>
      
    <div className='container border rounded d-block text-light bg-dark ' >
    <div className='mt-5 d-grid gap-3'>
    <h1>Survey</h1>
    
    <Formik
    initialValues={{
      picked1: '',
      picked2:' ',
      picked3:' ',
      picked4:' ',
      picked5:' ',
      picked6:' ',
      picked7:' ',
      picked8:' ',
      picked9:' ',
      picked10:' ',
      picked11:' ',
      picked12:' '

    }}
    
    onSubmit={ (values) => {
      
      console.log('form submitted')
      fetch('http://localhost:5000/form2/submitForm2', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
        firstCode : values.picked1,
        learnToCode : values.picked2,
        formalEducation: values.picked3,
        programmingScriptingandMarkupLanguages: values.picked4,
        developmentEnvironment: values.picked5,
        databaseEnvironments: values.picked6,
        cloudPlatforms: values.picked7,
        webFrameworksAndLibraries:  values.picked8,
        otherFrameworksAndLibraries: values.picked9,
        tools: values.picked10,
        operatingSystem: values.picked11,
        getStuck:  values.picked12,









        
      })
      
    })
    .then(response=>response.json())
    
    
    history.push("/formsubmitted")
  }}
  
  
  >
  {({ values }) => (
    <Form>
    
    <div className='d-grid gap-5'>
      <Card className='bg-dark'>
    <div id="my-radio-group" className='font-weight-bold lead'>1- At what age did you write your first line of code or program? </div>
    <div  role="group" aria-labelledby="my-radio-group" className='mt-2'>
    <label >
    <Field className='mx-2' type="radio" name="picked1" value="15-20 years" />
    15-20 years
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked1" value="20-29 years" />
    20-29 years
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked1" value="29+ years" />
    29+ years
    </label>
    <Badge className='bg-secondary h2'>
    <div>Your choice:<span className='fw-bold'> {values.picked1} </span></div>
    </Badge>
    
    </div>
    </Card >
    <div className='d-grid gap-3' >
      <Card className='bg-dark'>
    <div id="my-radio-group" className='font-weight-bold lead'>2-How did you learn to code?</div>
    <div role="group" aria-labelledby="my-radio-group" className='ms-2'>
    <label>
    <Field className='mx-2' type="radio" name="picked2" value="School" />
    School
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked2" value="Books" />
     Books/Physicalmedia  
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked2" value=" OnlineCourses/Certifications " />
    Online Courses or Certifications                                                                                                                     
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked2" value="Coding Bootcamp" />
    Coding Bootcamp
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked2" value="OnlineForum" />
    Online Forums
    </label>
    <Badge className='bg-secondary h2'>
    <div>Your choice:<span className='fw-bold'> {values.picked2} </span></div>

    </Badge>
    </div>
    
    </Card>
    </div>
    <div>
    <Card className='bg-dark'>
    <div id="my-radio-group" className='font-weight-bold lead'>3-Which of the following best describes the highest level of formal education that you’ve completed?</div>
    <div role="group" aria-labelledby="my-radio-group" className='ms-2'>
    <label>
    <Field className='mx-2' type="radio" name="picked3" value="Primary/Elementary School" />
    Primary/Elementary School
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked3" value="Some College/University" />
    Some College/University
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked3" value="Bachelors degrees" />
    Bachelors degree
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked3" value="Masters degree" />
    Masters degree
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked3" value="Other doctoral degree" />
    Other doctoral degree
    </label>
    <Badge className='bg-secondary h2'>
    <div>Your choice:<span className='fw-bold'> {values.picked3} </span></div></Badge>
    </div>
    </Card >
    </div>
    <div >
    <div id="my-radio-group" className='font-weight-bold lead'>4-Which programming languages have you done 
    extensive development work in over the past year, and which do you want to work in over the next year? </div>
    <div role="group" aria-labelledby="my-radio-group" className='ms-2'>
    <label>
    <Field className='mx-2'type="radio" name="picked4" value="JavaScript" />
    javaScript
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked4" value="Python" />
    Python
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked4" value="Java" />
    Java                                                                                                                    
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked4" value="C++" />
    C++
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked4" value="C#" />
    C#
    </label>
    <Badge className='bg-secondary h2'>
    <div>Your choice:<span className='fw-bold'> {values.picked4} </span></div></Badge>
    </div>
    </div>

    <div >
    <div id="my-radio-group" className='font-weight-bold lead'>5-Which development environments did you use regularly over the past year, and which do 
    you want to work with over the next year? </div>
    <div role="group" aria-labelledby="my-radio-group" className='ms-2'>
    <label>
    <Field className='mx-2' type="radio" name="picked5" value="Visual Studio Code" />
    Visual Studio Code
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked5" value="Notepad++" />
    Notepad++
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked5" value="IntelliJ" />
    IntelliJ                                                                                                                  
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked5" value="PyCharm" />
    PyCharm
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked5" value="Eclipse" />
    Eclipse
    </label>
    <Badge className='bg-secondary'>
    <div>Your choice:<span className='fw-bold'> {values.picked5} </span></div></Badge>
    </div>
    </div>

    <div >
    <div id="my-radio-group" className='font-weight-bold lead'>6-Which database environments have you done extensive
     development work in over the past year, and which do you want to work in over the next year? </div>
    <div role="group" aria-labelledby="my-radio-group" className='ms-2'>
    <label>
    <Field className='mx-2' type="radio" name="picked6" value="MySQL" />
    MySQL
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked6" value="PostgreSQL" />
    PostgreSQL
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked6" value="MongoDB" />
    MongoDB                                                                                                                  
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked6" value="DynamoDB" />
    DynamoDB
    </label>
    <label>
    <Field  className='mx-2' type="radio" name="picked6" value="Cassandra" />
    Cassandra
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked6" value="SQLite" />
    SQLite
    </label>
    <Badge className='bg-secondary'>
    <div>Your choice:<span className='fw-bold'> {values.picked6} </span></div></Badge>
    </div>
    </div>

    <div >
    <div id="my-radio-group" className='font-weight-bold lead'>7-Which cloud platforms have you done extensive development work in over the past year, and which do you want to work in over the next year? </div>
    <div role="group" aria-labelledby="my-radio-group" className='mt-3'>
    <label>
    <Field className='mx-2' type="radio" name="picked7" value="AWS" /> 
    AWS
    </label>
    <label>
    <Field  className='mx-2' type="radio" name="picked7" value="Google Cloud Platform" />
    Google Cloud Platform
    </label>
    <label>
    <Field  className='mx-2' type="radio" name="picked7" value="Microsoft Azure" />
    Microsoft Azure                                                                                                                 
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked7" value="DigitalOcean" />
    DigitalOcean
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked7" value="IBM Cloud or Watson" />
    IBM Cloud or Watson
    </label>
    <Badge className='bg-secondary mx-2'>
    <div>Your choice:<span className='fw-bold'> {values.picked7} </span></div></Badge>
    </div>
    </div>
    <div >
    <div id="my-radio-group" className='font-weight-bold lead'>8-Which web frameworks and libraries have you done extensive development work in over the past year, and which do you want to work in over the next year? </div>
    <div role="group" aria-labelledby="my-radio-group" className='mt-3'>
    <label>
    <Field className='mx-2' type="radio" name="picked8" value="React.js" /> 
    React.js
    </label>
    <label>
    <Field  className='mx-2' type="radio" name="picked8" value="Express" />
    Express
    </label>
    <label>
    <Field  className='mx-2' type="radio" name="picked8" value="Angular" />
    Angular                                                                                                                
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked8" value="ASP.NET Core" />
    ASP.NET Core
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked8" value="Django" />
    Django
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked8" value="Spring" />
    Spring
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked8" value="Laravel" />
    Laravel
    </label>
    <Badge className='bg-secondary mx-2'>
    <div>Your choice:<span className='fw-bold'> {values.picked8} </span></div></Badge>
    </div>
    </div>

    <div >
    <div id="my-radio-group" className='font-weight-bold lead'>9-Which other frameworks and libraries have you done extensive development work in over the past year, and which do you want to work in over the next year? </div>
    <div role="group" aria-labelledby="my-radio-group" className='mt-3'>
    <label>
    <Field className='mx-2' type="radio" name="picked9" value=".Net Framework" /> 
    .Net Framework
    </label>
    <label>
    <Field  className='mx-2' type="radio" name="picked9" value="Numpy" />
    Numpy
    </label>
    <label>
    <Field  className='mx-2' type="radio" name="picked9" value="Pandas" />
    Pandas                                                                                                                
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked9" value="TensorFlow" />
    TensorFlow
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked9" value="Flutter" />
    Flutter
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked9" value="Apache Spark" />
    Apache Spark
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked9" value="Hadoop" />
    Hadoop
    </label>
    <Badge className='bg-secondary mx-2'>
    <div>Your choice:<span className='fw-bold'> {values.picked9} </span></div></Badge>
    </div>
    </div>

    <div >
    <div id="my-radio-group" className='font-weight-bold lead'>10-Which tools have you done extensive development work in over the past year, and which do you want to work in over the next year? </div>
    <div role="group" aria-labelledby="my-radio-group" className='mt-3'>
    <label>
    <Field className='mx-2' type="radio" name="picked10" value="Git" /> 
        Git
    </label>
    <label>
    <Field  className='mx-2' type="radio" name="picked10" value="Docker" />
    Docker
    </label>
    <label>
    <Field  className='mx-2' type="radio" name="picked10" value="Yarn" />
    Yarn                                                                                                               
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked10" value="Kubernetes" />
    Kubernetes
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked10" value="Unity 3D" />
    Unity 3D
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked10" value="Ansible" />
    Ansible
    </label>
    
    <Badge className='bg-secondary mx-2'>
    <div>Your choice:<span className='fw-bold'> {values.picked10} </span></div></Badge>
    </div>
    </div>

    <div >
    <div id="my-radio-group" className='font-weight-bold lead'>11-Which tools have you done extensive development work in over the past year, and which do you want to work in over the next year? </div>
    <div role="group" aria-labelledby="my-radio-group" className='mt-3'>
    <label>
    <Field className='mx-2' type="radio" name="picked11" value="Windows" /> 
        Windows
    </label>
    <label>
    <Field  className='mx-2' type="radio" name="picked11" value="Linux-Based" />
    Linux-Based
    </label>
    <label>
    <Field  className='mx-2' type="radio" name="picked11" value="MacOS" />
    MacOS                                                                                                  
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked11" value="Windows Subsystem for Linux (WSL)" />
    Windows Subsystem for Linux (WSL)
    </label>
    
    
    <Badge className='bg-secondary mx-2'>
    <div>Your choice:<span className='fw-bold'> {values.picked11} </span></div></Badge>
    </div>
    </div>

    <div >
    <div id="my-radio-group" className='font-weight-bold lead'>12-What do you do when you get stuck on a problem?  </div>
    <div role="group" aria-labelledby="my-radio-group" className='mt-3'>
    <label>
    <Field className='mx-2' type="radio" name="picked12" value="Google it" /> 
    Google it
    </label>
    <label>
    <Field  className='mx-2' type="radio" name="picked12" value="Visit Stack Overflow" />
    Visit Stack Overflow
    </label>
    <label>
    <Field  className='mx-2' type="radio" name="picked12" value="Watch help / tutorial videos" />
    Watch help / tutorial videos                                                                                                              
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked12" value="Call a coworker or friend" />
    Call a coworker or friend
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked12" value="Do other work and come back later" />
    Do other work and come back later
    </label>
    <label>
    <Field className='mx-2' type="radio" name="picked12" value="Meditate" />
    Meditate
    </label>
    
    <Badge className='bg-secondary mx-2'>
    <div>Your choice:<span className='fw-bold'> {values.picked12} </span></div></Badge>
    </div>
    </div>
   
   
    <div className='d-inline'>
    <Button style= {{
      borderRadius: 30,
      backgroundColor: "#616161",
      padding: "12px 24px",
      fontSize: "12px"
    }} variant="contained" type="submit" className="btn btn-primary">Submit</Button>
    
    </div>
    </div>
    </Form>
    
    )}
    </Formik>
    </div>
    </div>
    
    </Container>
    </div>
    </>
    )};
    
    export default Form1;
    