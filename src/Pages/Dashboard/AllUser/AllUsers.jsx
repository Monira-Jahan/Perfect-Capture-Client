import { useQuery } from "@tanstack/react-query";

import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res=await axiosSecure.get('/users')
        return res.data;
    });
    
   
    const handleMakeAdmin=user=>{
       fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH'
       })
       .then(res => res.json())
        .then(data => {
            console.log(data)
            
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        

    }
    const handleMakeInstructor=user=>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method: 'PATCH'
           })
           .then(res => res.json())
            .then(data => {
                console.log(data)
                
          
                if(data.modifiedCount){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
            
            
    }
    return (
        <div>
            <Helmet>
                <title>Perfect Capture | Manage Users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4 text-center">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>

                            <th className="ml-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user.role }</td>
                                   <td className="flex flex-col"> <button onClick={() => handleMakeAdmin(user)} className="btn bg-sky-400   text-white mb-2">Make Admin</button> 
                                   <button onClick={() => handleMakeInstructor(user)} className="btn bg-slate-500   text-white">Make Instructor</button>
                                    </td>
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;