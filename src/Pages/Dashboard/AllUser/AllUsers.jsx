import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";


const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res=await fetch('http://localhost:5000/users')
        return res.json();
    });
    const handleDelete=()=>{

    }
    const handleMakeAdmin=()=>{

    }
    const handleMakeInstructor=()=>{

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
                                   <td className="flex flex-col"> <button onClick={() => handleMakeAdmin(user._id)} className="btn bg-sky-400   text-white mb-2">Make Admin</button> 
                                   <button onClick={() => handleMakeInstructor(user._id)} className="btn bg-slate-500   text-white">Make Instructor</button>
                                    </td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;