import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import sun from '../../assets/images/sun.svg';
import moon from '../../assets/images/moon.svg';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      );
       // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
    
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions = <>
        <li><Link to="/" className="hover:link-accent font-bold text-lg"> Home</Link></li>
        <li><Link to="/instructors" className="hover:link-accent font-bold text-lg">Instructors</Link></li>
        <li><Link className="hover:link-accent font-bold text-lg"> Classes</Link></li>
        <li><Link to="/dashboard" className="hover:link-accent font-bold text-lg"> Dashboard</Link></li>
        
        {
            user ? <>
                {/* <div className="py-2 pr-2">
                    <span>{user.displayName}</span>
                </div> */}
                
                <div className="mb-3">
                    <img className='avatar w-12 h-12 border border-white rounded-full  hover:{user.displayName}' src={user.photoURL} alt="" />
                </div>

                <button onClick={handleLogout} className="font-bold ml-3 btn btn-sky-300">Logout</button>

            </> : <>
            
        
            <li><Link to="/login" className="hover:link-accent font-bold text-lg">Login</Link></li>

            </>
        }
      <div> <button className="btn btn-square ml-4  bg-white">
          <label className="swap swap-rotate w-12 h-12">
            <input type="checkbox"  onChange={handleToggle} checked={theme === "light" ? false : true}/>
            {/* light theme sun image */}
            <img src={sun} alt="light" className="w-8 h-8 swap-on" />
            {/* dark theme moon image */}
            <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
          </label>
        </button>
        </div>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-60 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200  rounded-box w-52 text-black">
                    {navOptions}
                    </ul>
                </div>
                <div>
                    <img className="-pt-2" src="https://i.ibb.co/9Ykncg8/logo.png" alt=""/>
            
                </div>
                </div>
            <div className="navbar-center mr-24 hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {navOptions}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn mr-4">Button</a>
            </div> */}
        </div>
    );
};

export default Header;