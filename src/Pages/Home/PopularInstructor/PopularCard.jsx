
const PopularCard = ({instructor}) => {
    const {name,photo,email}=instructor;
    return (
        <div>
            <div className="card bg-sky-500 lg:w-96 sm:mx-3 h-100 transform transition duration-500 hover:scale-110 glass mb-8">
            <div className="avatar">
                    <div className="w-36 mx-auto mt-4 rounded-full">
                        <img src={photo}/>
                    </div>
                </div>
                <div className="card-body items-center text-white text-center">
                    <h2 className="card-title font-bold text-xl">{name}</h2>
                    <p><strong>Email:</strong> {email}</p>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default PopularCard;