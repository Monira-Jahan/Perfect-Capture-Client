import { FaUsers, FaCamera, FaChalkboardTeacher, FaHome, FaShoppingBasket, FaWallet, FaUserAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {

    //  TODO:load data from the server to have dynamic isAdmin based on Data
    const [isAdmin] = useAdmin();
    const [isInstructor]=useInstructor();
 
    return (
        <div className="drawer lg:drawer-open mt-10">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 h-full bg-sky-400">
                    <img src="https://i.ibb.co/9Ykncg8/logo.png" />
                    {
                        isAdmin ? <>
                            <li className="font-bold text-lg pt-4"><NavLink> <FaHome /> Admin Home</NavLink></li>
                            <li className="font-semibold text-lg pt-8"><NavLink to="/dashboard/history"> <FaCamera /> Manage Classes</NavLink></li>
                            <li className="font-semibold text-lg"><NavLink to="/dashboard/manageusers"> <FaUsers />Manage Users</NavLink></li>

                        </> : isInstructor ?
                            <>
                                <li className="font-bold text-lg pt-4"><NavLink> <FaHome /> Instructor Home</NavLink></li>
                                <li className="font-semibold text-lg pt-8"><NavLink to="/dashboard/addclass"> <FaWallet /> Add a Class</NavLink></li>
                                <li className="font-semibold text-lg"><NavLink to="/dashboard/mycart"> <FaShoppingBasket /> My Classes</NavLink></li>
                                <li className="font-semibold text-lg"><NavLink to="/dashboard/mycart"> <FaShoppingBasket /> Total Enrolled Classes</NavLink></li>

                            </> : <>
                                <li className="font-bold text-lg pt-4"><NavLink> <FaHome /> Student Home</NavLink></li>
                                <li className="font-semibold text-lg pt-8"><NavLink to="/dashboard/history"> <FaWallet />Add a Class</NavLink></li>
                                <li className="font-semibold text-lg pt-8"><NavLink to="/dashboard/history"> <FaWallet />My Classes</NavLink></li>
                                <li className="font-semibold text-lg pt-8"><NavLink to="/dashboard/history"> <FaWallet /> Payment History</NavLink></li>

                            </>
                    }
                    <div className="divider"></div>
                    <li className="font-semibold text-lg"><NavLink to="/"><FaHome></FaHome>Home</NavLink> </li>
                    <li className="font-semibold text-lg"><NavLink to="/instructors"> <FaUserAlt />Instructor</NavLink></li>
                    <li className="font-semibold text-lg"><NavLink to="/"><FaChalkboardTeacher /> Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;