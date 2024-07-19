import React from "react";
//import { FaGun } from "react-icons/fa6";
//import { GiPistolGun } from "react-icons/gi";
//import { DiJsBadge } from "react-icons/di";
//import { GiTechnoHeart } from "react-icons/gi";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";




const Card = (props) => {
    let course = props.course;

    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;


    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //pahle se liked pada huwa hai
            setLikedCourses ((prev) => prev.filter((cid)=> (cid !== course.id))) ;
            toast.warning("Like removed");
        }
        else{
            //pahle se like hai
            // insert kerna hai liked course me 
            if(likedCourses.length === 0 ){
                setLikedCourses([course.id])

            } 
            else{
                setLikedCourses( (prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully"); 
        }
    }

    return (
        <div className="w-[300px] bg-blue-950 bg-opacity-80 rounded-md overflow-hidden"> 
            <div className="relative ">
            <img src={course.image.url} alt="mode"></img >

            <div className="grid place-items-center w-[40px] h-[40px] rounded-full bg-white absolute right-2 bottom-[-14px]">
                <button onClick={clickHandler}>
                    {
                         likedCourses.includes(course.id) ? 
                         (<FcLike fontSize="1.75rem"/>):
                         (<FcLikePlaceholder fontSize="1.75rem"/>) 
                    }
                </button>
            </div>
 
            </div>
            
            <div className="p-4">
                <p className="text-white text-xl font-semibold leading-6">{course.title} </p> 
                <p className="mt-2 text-white  ">
                    {
                        course.description.length >90 ?
                        (course.description.substr(0,90) + "...") :
                        (course.description)
                    }    
                </p>
             </div>
        </div> 
    )
}

export default Card;