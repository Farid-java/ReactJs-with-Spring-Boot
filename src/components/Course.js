import React from "react";
import axios from 'axios';
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from "reactstrap";
import base_url from "./bootapi";

const Course = ({ course }) => {

const deleteCourse = (id) => { 
 
  axios.delete(`${base_url}/course/${id}`).then(
    (response)=>{
      console.log("data delete") 
     
    },
    (error)=>{console.log("not deleted")}
);  
}
 

  return (
    <Card>
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container>
            <Button color="danger" onClick={()=> {
              deleteCourse(course.id)

            }}>Delete</Button>
            <Button color="warning ml-3">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
