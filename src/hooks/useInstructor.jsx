import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const useInstructor = () => {
    const {user,loading}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {data:isInstructor,isLoading:isInstructorLoading}=useQuery({
     queryKey:['isInstructor',user?.email],
     enabled: !loading,
     queryFn:async()=>{
        if(!loading && user?.email){
         const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
         console.log('is instructor response',res)
         return res.data.instructor;
     }
    },
    })
    return [isInstructor,isInstructorLoading]
    };

export default useInstructor;