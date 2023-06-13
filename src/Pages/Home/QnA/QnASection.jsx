import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const QnASection = () => {
    return (
        <section>
            <SectionTitle
                heading={"We Are Here to Help You"}
                subHeading={"It’s important to know that the people behind your training know their stuff, so meet your Perfect Capture instructors and course instructors."}></SectionTitle>
            <div className="hero ">
                <div className="flex flex-col lg:flex-row ">
                    <img src="https://i.ibb.co/tBmpSHL/13560778-5274051.jpg" className="w-1/2 rounded-lg shadow-2xl mb-18" />
                    <div className="ml-16 my-24">
                        <div className="collapse bg-base-200 mb-4">
                            <input type="radio" name="my-accordion-1" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                How do I contact my Tutor?
                            </div>
                            <div className="collapse-content">
                                <p>Our team of experienced professional photographers are on standby to help you during your course, whether that’s to assess your assignments and provide you with personal online feedback, or to answer questions about the content.Within the dashboard area, you’ll find your ‘Review’  button where you can submit your questions.
                                </p>
                            </div>
                        </div>
                        <div className="collapse bg-base-200 mb-4">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl font-medium">
                                Are any books or manuals sent to me?                            </div>
                            <div className="collapse-content">
                                <p>No, all learning is carried out via our secure e-learn website, all the course content is online for you to access at any time 24hrs a day.
                                    The great benefit of e-learning is that you can study at home in your own time and at your own pace. You can combine achieving professional standard training along with a qualification, in and around your job and family commitments.However, we do send out professionally printed photography certificates on course completion, which look incredible on the wall!</p>
                            </div>
                        </div>
                        <div className="collapse bg-base-200 mb-4">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl font-medium">
                                Can you tell me more about the certificate?                           </div>
                            <div className="collapse-content">
                                <p>Everyone who completes an iPhotography course receives a free downloadable photography certificate which details the course and the modules you have completed.
                                    Your certificate will also indicate a percentage grade to show how well you have completed the test questions.
                                    With our certified courses (iPhotography, Portrait, Light Tricks, Wildlife, Wedding, Landscape and Photoshop) you can also upgrade your free certificate to our premium printed version which is shipped to your door once you complete the course.</p>
                            </div>
                        </div>
                        <div className="collapse bg-base-200 mb-4">
                            <input type="radio" name="my-accordion-1" />
                            <div className="collapse-title text-xl font-medium">
                                Tell me more about the module tests?
                            </div>
                            <div className="collapse-content">
                                <p>We have developed an advanced self-assessment testing system designed to ensure an effective learning experience.

                                    At the end of each module (in selected courses) there is one multiple choice test. Each test has a minimum passing score which you must achieve before you can move onto the next module in the course.

                                    You can take each module test as many times as you like until you pass, at which point your passing results are recorded in our national database and contribute towards your final score.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QnASection;