
import { Link } from "react-router-dom";


const InstructorCard = ({ instructor }) => {
    const { name, photo, email } = instructor;
    return (
        <div>
            <div className="card bg-gradient-to-r from-cyan-500 to-teal-200 lg:w-96 sm:mx-3 h-100 glass mb-8  transform transition duration-500 hover:scale-110">
                <div className="avatar">
                    <div className="w-36 mx-auto mt-4 rounded-full">
                        <img src={photo}/>
                    </div>
                </div>
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title font-bold text-xl">{name}</h2>
                    <p><strong>Email:</strong> {email}</p>

                    <div className="card-actions justify-center">
                        <Link className="btn btn-primary">See Classes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;