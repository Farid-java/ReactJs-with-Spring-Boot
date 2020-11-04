import React, { useState } from 'react'
import Course from './Course';

const AllCourses = () => {

    const [courses, setCourses] = useState([
        { title:"Java Course" , description:"this is demo course"},
        { title:"Django Course" , description:"this is demo course"},
        { title:"ReactJs Courses" , description:"this is demo course"},
        { title:"Angular" , description:"this is demo course"},
    ] );
    return (
        <div>
             <h1>All Courses</h1>

             <p> List of Courses as followes</p>

             {
               courses.length>0 ? courses.map((item) => <Course course={item} />)  :"No Courses"
             }
        </div>
    )
}

export default AllCourses
