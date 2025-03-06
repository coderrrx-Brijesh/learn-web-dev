import React from "react";
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import './Card.css'
import { set } from "mongoose";
import { toast } from "react-toastify";
function Card(props){
    let course=props.course
    let liked_courses=props.liked_courses
    let set_liked_courses=props.set_liked_courses
    function like_handler(){
        if(liked_courses.includes(course.id)){
            // remove from liked coures
            set_liked_courses((prev)=>prev.filter((cid)=>(cid!=course.id)));
            toast.warning("Like Removed")
        }
        else{
            if(liked_courses.length===0){
                set_liked_courses([course.id]);
            }
            else {
                set_liked_courses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked the Course");
        }
    }
    return (
        <div className="card">
            <div className="image">
                <img src={course.image.url}/>
                <div className="like-btn">
                    <button onClick={like_handler}>
                        {liked_courses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem" />)}
                    </button>
                </div>
            </div>
            <div className="content">
                <p className="title">{course.title}</p>
                <p className="desc">{course.description}</p>
            </div>
        </div>
    )
}

export default Card;