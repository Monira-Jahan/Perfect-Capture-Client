import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import PopularClassCard from "./PopularClassCard";


const PopularClass = () => {
    const[Class,setClass]=useState([])
    useEffect(()=>{
        fetch('https://photography-school-server-monira-jahan.vercel.app/classes')
        .then(res=>res.json())
        .then(data=>{
            
             setClass(data.slice(0, 6))
        })
    },[])
    return (
        <section>
            <SectionTitle
            heading={"Popular Class"}
            subHeading={"Each course has been carefully crafted by a team of professional photographers to help beginners and amateurs gain higher-level photography skills and develop unshakable camera confidence, quickly."}></SectionTitle>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
            Class.map(classes=><PopularClassCard
            key={classes._id}
            classes={classes}
            ></PopularClassCard>)
        }
        
        </div>
        </section>
    );
};

export default PopularClass;