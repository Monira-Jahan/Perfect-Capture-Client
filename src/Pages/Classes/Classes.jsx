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
                            <p className="mb-5">Each course has been carefully crafted by a team of professional photographers to help beginners and amateurs gain higher-level photography skills and develop unshakable camera confidence, quickly.</p>
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