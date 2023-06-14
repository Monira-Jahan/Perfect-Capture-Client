import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
import Swal from "sweetalert2";
const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit=data=>{
        
        const formData=new FormData;
        formData.append('image',data.image[0])
        fetch(img_hosting_url,{
            method:'POST',
            body:formData
        })
       .then(res => res.json())
       .then(imgResponse=>{
       if(imgResponse.success){
        const imgURL = imgResponse.data.display_url;
        const {className,instructorEmail,instructorName,availableSeats,price}=data;
        const newClass={className,image:imgURL,instructorEmail,instructorName,availableSeats,price: parseFloat(price)};
        
        console.log(newClass);
        axiosSecure.post('/classes',newClass)
        .then(data => {
                    console.log('Add new class', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
       }
       })
    };
    
    return (
        <div className='bg-slate-300 w-full pb-10 '>
            <h3 className="text-4xl font-bold py-14 text-center">Add a class</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="mb-4 ">
                        <label className="block mb-2 text-lg font-semibold" htmlFor="className">
                            Class name
                        </label>
                        <input
                            className="w-full px-8 py-3 border border-gray-600 rounded"
                            type="text"
                            id="className"
                            name="className"
                            {...register("className", { required: true, maxLength: 120 })}
                            
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-lg font-semibold" htmlFor="classImage">
                            Class Image
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-lg font-semibold" htmlFor="instructorName">
                            Instructor name
                        </label>
                        <input
                            className="w-full px-8 py-3 border border-gray-600 rounded"
                            type="text"
                            id="instructorName"
                            name="instructorName"
                            {...register("instructorName", { required: true, maxLength: 120 })}

                            defaultValue={user?.displayName} 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-lg font-semibold" htmlFor="instructorEmail">
                            Instructor email
                        </label>
                        <input
                            className="w-full px-8 py-3 border border-gray-600 rounded"
                            type="email"
                            id="instructorEmail"
                            name="instructorEmail"
                            {...register("instructorEmail", { required: true })}
                            defaultValue={user?.email}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-lg font-semibold" htmlFor="availableSeats">
                            Available seats
                        </label>
                        <input
                            className="w-full px-8 py-3 border border-gray-600 rounded"
                            type="number"
                            id="availableSeats"
                            name="availableSeats"
                            {...register("availableSeats", { required: true })}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-lg font-semibold" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="w-full px-8 py-3 border border-gray-600 rounded"
                            type="number"
                            id="price"
                            name="price"
                            {...register("price", { required: true })}
                            required
                        />
                    </div>
                </div>
                 <input className="btn btn-primary px-6 btn-sm mt-4" type="submit" value="Add Item" />
            </form>

        </div>
    );
};

export default AddClass;