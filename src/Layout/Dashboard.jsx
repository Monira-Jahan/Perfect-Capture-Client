import{ FaChalkboardTeacher, FaHome, FaShoppingBasket, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-sky-400">
                    {/* Sidebar content here */}
                   <li className="font-bold text-lg pt-4"><NavLink> <FaHome/> User Home</NavLink></li>
                   
                   <li className="font-semibold text-lg pt-8"><NavLink to="/dashboard/history"> <FaWallet/> Payment History</NavLink></li> 
                    <li className="font-semibold text-lg"><NavLink to="/dashboard/mycart"> <FaShoppingBasket/> My Classes</NavLink></li>
                    {/* <li><Link> <FaStreetView/> My Cart</Link></li>
                    <li><Link> <FaShoppingCart/> My Cart</Link></li> */}
                   <div className="divider"></div>
                   <li className="font-semibold text-lg"><NavLink to="/"><FaHome></FaHome>Home</NavLink> </li>
                    <li className="font-semibold text-lg"><NavLink to="/instructors"> <FaChalkboardTeacher/>Instructor</NavLink></li>
                    <li className="font-semibold text-lg"><NavLink to="/">Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;