import { Bounce } from "react-awesome-reveal";


const sectionTitle = ({heading,subHeading}) => {
    return (
        <Bounce>
            <div className="text-center mx-auto md:w-4/12 my-6">
            <h3 className="text-3xl uppercase border-y-4 mb-8 py-4">{heading}</h3>
            <p className="text-yellow-500 mb-4">{subHeading}</p>
            
        </div>
        </Bounce>
    );
};

export default sectionTitle;