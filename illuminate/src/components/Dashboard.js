import { width } from "@mui/system";

import React from "react";
import { useEffect, useState } from "react";

const Dashboard =()=> {
const [searchText, setSearchText]= useState('');
const [data, setData] = useState('');
const [searchResults, setSearchResults] = useState([]);

const handleSubmit=(e)=>{
    e.preventDefault();
    setSearchText(searchText);
}

const updateSearchText =(e)=>{
    e.preventDefault();
    setSearchResults(e.target.value)
    
}

useEffect(() => {
    if (searchText) {
      fetch(
        'https://www.themuse.com/api/public/jobs?category=Computer%20and%20IT&category=Data%20and%20Analytics&category=Marketing&level=Entry%20Level&level=Internship&page=1'
      )
        .then((response) => response.json())
        .then((data) => data.results)
        
    }
  }, []);



const myChart={
    background: "#F1F5F4",
    border: "none",
    borderRadius: "2px",
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
    height:"400px",
    width:"500px", 
}




    return(
<div>
    <div>
<h1 className="mt-5"> </h1>
    </div>
<h1> Dashboard</h1>

    <iframe className="myframe " title="mydash" style={{myChart}} src="https://charts.mongodb.com/charts-project-0-snzri/embed/dashboards?id=6343195f-1cbb-43e7-8d3b-f321a8643a96&theme=dark&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>
   
    </div>
    
    
    )}
    
    export default Dashboard;