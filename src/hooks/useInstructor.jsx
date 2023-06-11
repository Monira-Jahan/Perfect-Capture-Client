import { useEffect, useState } from "react";


const useInstructor = () => {
    const[instructors,setInstructor]=useState([]);
    const[loader,setLoader]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res=>res.json())
        .then(data=>{
            setInstructor(data);
            setLoader(false);
        });
    },[])
    return[instructors,loader]
};

export default useInstructor;