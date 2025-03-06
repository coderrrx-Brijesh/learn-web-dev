import React, { useState } from 'react'
import Card from "./Card";
import "./Cards.css"
function Cards({courses,category}) {
    let allCourses=[]
    const [liked_courses,set_liked_courses]=useState([]);

    function getCourse(){
        if(category=="All"){
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else {
            return courses[category];
        }
    }

    getCourse({courses});
    return (
        <div className='cards'>
            {getCourse().map((course)=>{
                return <Card key={course.id} course={course} 
                liked_courses={liked_courses} set_liked_courses={set_liked_courses}/>
            })}
        </div>
    )
}

export default Cards