import { Helmet } from "react-helmet-async";
import useClass from "../../../hooks/useClass";


const ManageClass = () => {

    const [Class] = useClass();
    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | Manage Classes</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users: {Class.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Class.map((classes, index) => <tr key={classes._id}>
                                <th>{index + 1}</th>
                                <td><div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classes.image} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{classes.className}</div>
                                        
                                    </div>
                                </div></td>
                                
                                <td>{classes.instructorName}</td>
                                <td>{classes.instructorEmail}</td>
                                <td>{classes.availableSeats}</td>
                                <td>{classes.price}</td>
                                <td className="flex flex-col">
                                    <button className="btn bg-orange-400   text-white">Pending</button>

                                    <button className="btn bg-sky-400   text-white mb-2">Approve</button>
                                    <button className="btn bg-slate-500   text-white">Deny</button>
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;