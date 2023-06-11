import { Slide } from "react-awesome-reveal";
import useInstructor from "../../hooks/useInstructor";
import InstructorCard from "../Shared/InstructorCard/InstructorCard";


const InstructorsSection = () => {
    const [instructors]=useInstructor();
    return (
        <div>
            <div className="hero  bg-gradient-to-r from-indigo-500 mb-8 h-[500px] " >
        
            <div className="hero-overlay max-w-screen-lg max-h-72 bg-black bg-opacity-60 rounded-xl mt-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                    <Slide>
                    <h1 className="mb-5 text-3xl font-bold uppercase">Here Is Our Instructors</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </Slide>
                </div>
            </div>
        </div>
             <Slide>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    instructors.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCard>)
                }

            </div>
             </Slide>
        </div>
    );
};

export default InstructorsSection;