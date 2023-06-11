import slider1 from '../../../assets/images/landscape1.jpg';
import slider2 from '../../../assets/images/wild.jpg';
import slider3 from '../../../assets/banner4.jpg';
import slider4 from '../../../assets/banner7 (1).jpg';
import slider5 from '../../../assets/banner7 (2).jpg';
import { Slide } from 'react-awesome-reveal';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[800px]">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero min-h-screen">
                        <img src={slider4} alt="" className="w-full" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Slide>
                                <h1 className="mb-5 text-3xl font-bold">Introduction To Photography</h1>
                                
                                <p className="mb-5 text-base">Each course has been carefully crafted by a team of professional photographers to help beginners and amateurs gain higher-level photography skills and develop unshakable camera confidence, quickly.</p>
                                
                                <button className="btn btn-primary">Learn More</button>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero min-h-screen">
                        <img src={slider5} alt="" className="w-full" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Slide>
                                <h1 className="mb-5 text-3xl font-bold">Begineer Photography Course</h1>
                                <p className="mb-5 text-base">By introducing brand new, exclusive, interactive and intuitive methods of learning, your camera settings will never be a mystery again! With so many detailed examples, and information regarding shutter speed, aperture and exposure, you will want to take your camera with you everywhere you go.</p>
                                <button className="btn btn-primary">Learn More</button>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                <div className="hero min-h-screen">
                        <img src={slider3} alt="" className="w-full" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Slide>
                                <h1 className="mb-5 text-3xl font-bold">Street Photography Course</h1>
                                
                                <p className="mb-5 text-base">By introducing brand new, exclusive, interactive and intuitive methods of learning, your camera settings will never be a mystery again! With so many detailed examples, and information regarding shutter speed, aperture and exposure, you will want to take your camera with you everywhere you go.</p>
                                <button className="btn btn-primary">Learn More</button>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                <div className="hero min-h-screen">
                        <img src={slider2} alt="" className="w-full" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Slide>
                                <h1 className="mb-5 text-3xl font-bold">Wild Life Photography Course</h1>
                                <p className="mb-5 text-base">Discover the secrets to incredible wildlife photography. From insects to pets, to birds, to exotic animals and more. It’s all covered in this wildlife photography course.</p>
                                <button className="btn btn-primary">Learn More</button>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="item5" className="carousel-item w-full">
                <div className="hero min-h-screen">
                        <img src={slider1} alt="" className="w-full" />
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <Slide>
                                <h1 className="mb-5 text-3xl font-bold">Landscape Photography Course</h1>
                                <p className="mb-5 text-base">This course is simple to follow and the classes cover everything you need to know to plan, shoot and edit breathtaking landscape photos from start to finish – no matter where you are or what’s in front of you.</p>
                                <button className="btn btn-primary">Learn More</button>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
            </div>
        </div>
    );
};

export default Banner;