import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin=()=>{
    const {user,loading}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {data:isAdmin,isLoading:isAdminLoading}=useQuery({
     queryKey:['isAdmin',user?.email],
     enabled: !loading,
     queryFn:async()=>{
        if(!loading && user?.email){
         const res = await axiosSecure.get(`/users/admin/${user?.email}`);
         console.log('is admin response',res)
         return res.data.admin;
        }
     },
     
    });
    return [isAdmin,isAdminLoading]
}
export default useAdmin;