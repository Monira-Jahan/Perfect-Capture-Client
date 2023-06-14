import { Link } from "react-router-dom";


const ClassCard = ({classes}) => {
    const { className,image,instructorEmail,instructorName,availableSeats,price} = classes;
    return (
        <div>
            <div className="card bg-gradient-to-r from-cyan-500 to-teal-200 lg:w-96 sm:mx-3 h-100 glass mb-8  transform transition duration-500 hover:scale-110">
            <figure><img src={image} alt="" /></figure>
                
                <div className="card-body items-center text-center text-gray-600">
                    <h2 className="card-title font-bold text-xl">{className}</h2>
                    <p><strong>Instructor Name:</strong> {instructorName}</p>
                    <p><strong>Instructor Email:</strong> {instructorEmail}</p>
                    <p><strong>Available Seats:</strong> {availableSeats}</p>
                    <p><strong>Price:</strong> {price}</p>

                    <div className="card-actions justify-center">
                        <Link className="btn btn-primary">Select</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;