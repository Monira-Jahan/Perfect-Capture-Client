import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularCard from "./PopularCard";


const PopularInstructor = () => {
    const[instructorData,setInstructorData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res=>res.json())
        .then(data=>{
            setInstructorData(data.slice(0, 6));        })
    },[])
    return (
        <section>
            <SectionTitle
            heading={"Popular Instructors"}
            subHeading={"It’s important to know that the people behind your training know their stuff, so meet your Perfect Capture instructors and course instructors."}></SectionTitle>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
            instructorData.map(item=><PopularCard
            key={item._id}
            item={item}
            ></PopularCard>)
        }
        
        </div>
        </section>
    );
};

export default PopularInstructor;