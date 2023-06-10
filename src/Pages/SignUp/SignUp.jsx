import { Helmet } from "react-helmet-async";
import img1 from '../../assets/images/auth.png';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // navigate('/')
                    })
            })
    }
    return (
        <>
            <Helmet>
                <title>Perfect Capture | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 bg-[url('https://i.ibb.co/wJrQk6x/bg-1.jpg')]">
                <div className="hero-content flex-col md:flex-row-reverse   rounded-xl shadow-2xl bg-gray-600 bg-opacity-70 md:w-[1100px] mx-12 py-8 mt-8 mb-14 ">
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-3xl pb-24 text-white text-center font-bold">Sign Up Now</h1>
                        <img className="md:pl-16 md:mb-24 " src={img1} alt="" />
                    </div>

                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100 my-12">


                        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photo", { required: true })} placeholder="Photo URL" name="photo" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}

                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have a capital letter and a special character.</p>}


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Confirm Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}

                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have a capital letter and a special character.</p>}


                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold " type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="pl-4 pb-3 font-bold text-center text-primary"><small>Already Registered? Go to <Link to="/login">Login</Link> </small></p>
                        <p className="pl-2 pb-3 font-normal text-center text-black"></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;