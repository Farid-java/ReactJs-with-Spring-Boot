import React, { useEffect } from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'

const AddCourse = () => {

     useEffect(() => {
        document.title="AddCourse"
     }, [])
    return (
        <div>
            <h1 className="text-centre my-3">Fill Course Details</h1>
            <Form>
                <FormGroup>
                    <label for="userId"> Course Id</label>
                    <Input type="text" placeholder="Enter Id" name="id" id="courseId"/>
                </FormGroup>
                <FormGroup>
                    <label for="title"> Course Title</label>
                    <Input type="text" placeholder="Enter title here" name="id" id="title" />
                </FormGroup> 
                <FormGroup>
                    <label for="description"> Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" name="id" id="description" style={{height:150}}/>
                </FormGroup>
                <Container>
            <Button color="success">Add Course</Button>
            <Button color="warning ml-3">clear</Button>
        </Container>
                
            </Form>
        </div>
    )
}

export default AddCourse
