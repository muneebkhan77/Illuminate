import { join } from 'path-browserify';
import React, { Component }  from 'react';
import { Badge, Card, Button, Collapse, Container} from 'react-bootstrap'
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';




const Job=({job})=>{

  const [open, setOpen]= useState(false)


    return(<>
      
      
      <Card className='scroll'>
        <Card.Body >

          <div className='d-flex justify-content-between  '>
            <div>
              <Card.Title>
                
                {job.title}-<span className='text-muted font-weight-light'>    {job.company.display_name}</span> 

                </Card.Title>
                <Card.Subtitle className='text-muted mb-2'>
                {new Date (job.created).toLocaleDateString()} 
                </Card.Subtitle>
                <Badge> {job.location.area[2]}  </Badge>

            
            </div>


          </div>

        


<Card.Text className='mt-2'>


<Button onClick={()=>setOpen(prevOpen=>!prevOpen)} variant='secondary' size='sm'> {open? 'Hide Details' : 'View Details'}
</Button>
<Collapse in={open}>
<div className='mt-4'>
      {job.description}

</div>
</Collapse>

</Card.Text>
        </Card.Body>
        
        </Card>
        
        </>
    )
  
  }
  export default Job;
  