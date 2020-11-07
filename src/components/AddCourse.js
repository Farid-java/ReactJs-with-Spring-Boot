import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import base_url from './bootapi';
import { Link } from 'react-router-dom';

const AddCourse = () => {

     useEffect(() => {
        document.title="AddCourse"
     }, [])

     const [data, setdata] = useState({} );

     // form handler funtion
     const handleForm =(e)=>{
         console.log(data);
         postDatatoServer(data);

         e.preventDefault();
     };

     //creating funtion to post data on server
     const postDatatoServer = (data) => {
      axios.post(`${base_url}/addcourse`,data).then(
          (response)=>{console.log(response) 
        setdata({id:"",title:"",description:""});
        },(error)=>{console.log(error);}
      );
      };
          
    
     


    return (
        <div>
            <h1 className="text-centre my-3">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId"> Course Id</label>
                    <Input type="text" placeholder="Enter Id" name="courseId" id="id"  onChange={(e)=>
                      {setdata({...data,id:e.target.value});}}/>
                </FormGroup>
                <FormGroup>
                    <label for="title"> Course Title</label>
                    <Input type="text" placeholder="Enter title here" name="courseTitle" id="title" onChange={(e)=>
                      {setdata({...data,title:e.target.value});}}/>
                </FormGroup> 
                <FormGroup>
                    <label for="description"> Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" name="courseDescripton" id="description" style={{height:150}}
                     onChange={(e)=>{setdata({...data,description:e.target.value});}} />
                </FormGroup>
                <Container>
            <Button type="submit" color="success">Add Course</Button>
            <Button type="reset" color="warning ml-3">clear</Button>
        </Container>
                
            </Form>
        </div>
    )
}

export default AddCourse
