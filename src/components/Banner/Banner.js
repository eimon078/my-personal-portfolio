import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import bannerPic from '../Images/bp1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='mt-5'>
            <img className='rounded-circle inline-block' style={{ width: "250px", height: '250px' }} src={bannerPic} alt="" />
            <div className='mt-3'>
                <h4>Eimon Hossain Taief</h4>
                <h3 className='pt-2'>I'm a
                    <span className='text-danger text-uppercase fw-bold fs-3'>
                        <Typewriter
                            loop={0}
                            cursor
                            cursorStyle="-"
                            typeSpeed={60}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            words={[" Frontend Developer", " React Developer", " MERN Stack Developer"]} />
                    </span>
                </h3>
                <div className='pt-2'>
                    <a target="_blank" href="https://drive.google.com/file/d/1IR4qHkmumvAhJ7B9PpX2uBxV2THJfrcW/view?usp=sharing"><button className='button'>Download CV</button></a>
                    <button className='button_2'>Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;