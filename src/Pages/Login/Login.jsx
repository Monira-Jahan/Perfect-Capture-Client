import { Helmet } from 'react-helmet-async';
import img1 from '../../assets/images/auth.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
//import img2 from '../../assets/images/Animated Shape.svg'

const Login = () => {
    const { logIn,logInWithGoogle } = useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from= location.state?.from?.pathname || "/";

        const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });  
            })
        }
        const handleGoogleLogIn=()=>{
            logInWithGoogle()
            .then(result=>{
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photo }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
        }
    
    return (
        <>
        <Helmet>
                <title>Perfect Capture | Login</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200 bg-[url('https://i.ibb.co/wJrQk6x/bg-1.jpg')]">
        
            <div className="hero-content flex-col md:flex-row-reverse   rounded-xl shadow-2xl bg-gray-600 bg-opacity-70 w-[1100px] mx-12 py-8 mt-14">
                
                <div className=" ">
                <h1 className="text-3xl pb-16 text-white text-center font-bold">Login Now</h1>
                    <img className="pl-16" src={img1} alt=""/>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100 mt-8 mb-4">
                    <form onSubmit={handleLogin} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        
                        <div className="form-control mt-6">
                            <input  className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold " type="submit" value="Login" />
                        </div>
                        <button onClick={handleGoogleLogIn}className="btn btn-outline btn-primary  mx-8 px-4 mt-4"><FaGoogle className="mr-3"/>Login With Google</button>
 
 
                    </form>
                    <p className="pl-4 pb-8 text-center font-semibold"><small>New to Perfect Capture? <Link className='link-primary' to="/signup">Create an account</Link> </small></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;