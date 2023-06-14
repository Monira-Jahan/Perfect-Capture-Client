import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const { error, status } = useRouteError();
    console.log(error);
    return (
        <div>
        <section className='flex items-center py-6 px-48 my-5 bg-white-400 text-gray-900'>
            <div className='container px-5 mx-5 py-5 '>

                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold fs-1'>
                        <img className="w-[1200px]"src="https://i.ibb.co/W6VBP6d/error.png"/>
                        <h1 className="pb-0 pt-4 text-4xl"> <span className='pb-3  sr-only'>Error</span> {status || 404}</h1>
                    </h2>
                    <h3>PAGE NOT FOUND</h3>
                    <p className='fs-2 font-semibold md:text-4xl mb-8'>
                        {error?.message}
                    </p>
                    <br></br>
                    <Link
                        to='/'
                        className='my-4 px-5 py-3 font-bold rounded bg-primary text-white'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    </div>
    );
};

export default ErrorPage;