

const PopularCard = ({instructor}) => {
    const {name,photo,email}=instructor;
    return (
        <div>
            <div className="card bg-sky-500 lg:w-96 sm:mx-3 h-100 glass mb-8">
                <figure> <img className="h-64 w-96 " src={photo} alt=" " /></figure>
                <div className="card-body items-center text-white text-center">
                    <h2 className="card-title font-bold text-xl">{name}</h2>
                    <p><strong>Email:</strong> {email}</p>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default PopularCard;