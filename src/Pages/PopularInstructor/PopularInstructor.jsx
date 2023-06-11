import { useEffect, useState } from "react";
import InstructorCard from "../Shared/InstructorCard/InstructorCard";


const PopularInstructor = () => {
    const[instructor,setInstructor]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res=>res.json())
        .then(data=>{
            setInstructor(data.slice(0, 6));        })
    },[])
    return (
        <section>
             <div className="grid md:grid-cols-2 gap-10">
            {
            instructor.map(item=><InstructorCard
            key={item._id}
            item={item}
            ></InstructorCard>)
        }
        
        </div>
        </section>
    );
};

export default PopularInstructor;