
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularCard from "./PopularCard";

import { useEffect, useState } from "react";

const PopularInstructor = () => {

    const[Instructor,setInstructor]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res=>res.json())
        .then(data=>{
            const popularInstructor=data.filter(instructor=>instructor.role==='Instructor');
            setInstructor(popularInstructor.slice(0, 6))
        })
    },[])
    
    
    return (
        <section>
            <SectionTitle
            heading={"Popular Instructors"}
            subHeading={"It’s important to know that the people behind your training know their stuff, so meet your Perfect Capture instructors and course instructors."}></SectionTitle>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
            Instructor.map(instructor=><PopularCard
            key={instructor._id}
            instructor={instructor}
            ></PopularCard>)
        }
        
        </div>
        </section>
    );
};

export default PopularInstructor;