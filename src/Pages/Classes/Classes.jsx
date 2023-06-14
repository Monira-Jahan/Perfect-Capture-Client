import { Slide } from "react-awesome-reveal";
import useClass from "../../hooks/useClass";
import ClassCard from "./ClassCard";


const Classes = () => {
    const [Class] = useClass();
    return (
        <div>
            <div className="hero  bg-gradient-to-r from-sky-500 to-violet-400 mb-8 h-[500px]" >

                <div className="hero-overlay max-w-screen-lg max-h-72 bg-black bg-opacity-60 rounded-xl mt-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md text-white ">
                        <Slide>
                            <h1 className="mb-5 mt-16 text-3xl font-bold uppercase">Here Is Our Courses</h1>
                            <p className="mb-5">It’s important to know that the people behind your training know their stuff, so meet your Perfect Capture tutors and course instructors.This unique blend of experience, skill, and technical know-how, combined with a wide mix of engaging personalities, is precisely why our students get such incredible results so quickly!</p>
                        </Slide>
                    </div>
                </div>
            </div>
            <Slide>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                        Class.map(classes => <ClassCard
                            key={classes._id}
                            classes={classes}
                        ></ClassCard>)
                    }

                </div>
            </Slide>
        </div>
    );
};

export default Classes;