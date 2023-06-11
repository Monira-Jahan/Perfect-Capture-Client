import { Bounce } from "react-awesome-reveal";


const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mt-20 mb-8">
          <Bounce>
            <div className="text-center mx-auto md:w-4/12 my-6">
            <h3 className="text-3xl font-bold uppercase border-y-4 mb-8 py-4">{heading}</h3>
            <p className="text-yellow-500 mb-8">{subHeading}</p>
            
        </div>
        </Bounce>  
        </div>
    );
};

export default SectionTitle;