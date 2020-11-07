import axios from 'axios';
import React, { useEffect, useState } from 'react';
import base_url from './bootapi';
import Course from './Course';

const AllCourses = () => {
    useEffect(() => {
        document.title="All Course"
        
    }, [])

    //function to call url from boot Rest
        const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/getAllCourse`).then(
            (response)=>{console.log(response) 
            setCourses(response.data);
         
            },
            (error)=>{console.log(error)}
        );  
        }
      
        //calling server for laoding data from DB at the time of component_mount
        useEffect(() => {
           getAllCoursesFromServer();
        }, [])

        
        
        const deleteCourseList= (id) => {
            setCourses(courses.filter((c)=>c.id!==id));
        }
        
       
        
 
    const [courses, setCourses] = useState([] );
    return (
        <div>
             <h1>All Courses</h1>

             <p> List of Courses as followes</p>

             {
               courses.length>0 ? courses.map((item) => <Course key={item.id} course={item}  deletedu={deleteCourseList}  />)  :"No Courses"
             }
        </div>
    )
}

export default AllCourses
