import React, {useState, useEffect} from "react";
import axios from "axios";
import Job from "./Job";
import { Button } from '@mui/material';
import { Container } from "react-bootstrap";





var i=1;

function JobSearch2(){

    
    const handleSubmit =(e)=>{
        e.preventDefault();
        i=i+1;
        fetchData(i);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        

    }
    
    const[loading, setLoading]= useState(true)
    
    const[post, setPost]= useState([])
     const fetchData=(i)=>{
         axios.get(`http://api.adzuna.com/v1/api/jobs/ca/search/${i}?app_id=fdaea332&app_key=aa07dcdfe96cbcc95069e7de157893cb&results_per_page=20&what=software%20developer&content-type=application/json`)
            .then(response=>{
                setLoading(false)
                console.log(response.data.results)
                setPost(response.data.results)           
                
            })
        }

    useEffect(()=>{
        
        // async function fetchData(i){
        // await axios.get(`http://api.adzuna.com/v1/api/jobs/gb/search/${i}?app_id=fdaea332&app_key=aa07dcdfe96cbcc95069e7de157893cb&results_per_page=20&what=javascript%20developer&content-type=application/json`)
        //     .then(response=>{
        //         setLoading(false)
        //         console.log(response.data.results)
        //         setPost(response.data.results)           
                
        //     })
        // }
        
        fetchData(i);
    }, [])
    return(
        <Container className="my-4 ">
        <div className="mt-5">
          <h1 className=" mt-3 mb-4"> Software Jobs </h1>
       {loading && <h1> Loading.. </h1>}
        {post?.map(result => {
            return <Job key={result.id} job={result}/>
    })}
        
        <Button variant="contained" onClick={handleSubmit}> Next </Button>
        </div>
        </Container>
        
        );
    }
    
    export default JobSearch2;