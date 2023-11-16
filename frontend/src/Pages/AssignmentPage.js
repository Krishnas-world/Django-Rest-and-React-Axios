// ! DEPRECATED


import React, { useState , useEffect} from 'react'
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom';

import axios from 'axios';

const AssignmentPage = () => {
  let [note, setNote] = useState([])
  
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/pdf/assignment/')
    .then(response => setNote(response.data))
    .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <>
    <div>
      {note.map(item => (

      
    
     <Card style={{ width: '18rem' }}>
       <Card.Body>
         <Card.Title key= {item.id}>{item.name}</Card.Title>
         <Card.Subtitle className="mb-2 text-muted" key= {item.id} >Prof : {item.prof_name}</Card.Subtitle>
         {/* <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text> */}
         <Card.Text key= {item.id}>Ideal index : {item.length}</Card.Text>
         <Card.Title key= {item.id}>Subject Code : {item.sub_code}</Card.Title>    
         <Card.Title key= {item.id}>Submission Date: {item.l_submission}</Card.Title>        
         <Card.Link as={Link} to={item.assignment} key= {item.id}>View Assignment</Card.Link>
         <Card.Link as={Link} to={item.assignment} target='_blank' download ={item.note} key= {item.id} >Download Assignment</Card.Link>
       </Card.Body>
     </Card>
     ))}
     </div>
    </>

  )
}

export default AssignmentPage;