import React, { Component }  from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';







function App() {
    return <Button variant="contained">hello</Button>;
    
    
  }
  
const FormSubmitted =()=> {
    const history=useHistory();

const handleSubmit=(event)=>{
        event.preventDefault();
        history.push("/dashboard");

};

    return(
    
<>

<div className='mt-5'>
  
    <h1 className='h1main'>Thankyou </h1> 
    <h2 className='text-dark'>Your Form is submitted succesfully</h2>
    <div className='d-inline'>
    <form className='mt-2' onSubmit={handleSubmit}>
      

    <Button style= {{
      borderRadius: 30,
      backgroundColor: "#1769aa",
      padding: "12px 24px", 
      fontSize: "12px"
    }} variant="contained" onSubmit={{handleSubmit}} type="submit" className="btn btn-primary">Dashboard</Button>
    </form>
    
    </div>
    </div>

    </>  
    
    )}
    
    export default FormSubmitted;