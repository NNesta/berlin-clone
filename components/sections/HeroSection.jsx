import React from 'react';
import Wrapper from '../ui/Wrapper';

const HeroSection = () => {
  return (
    <Wrapper>
        <div className='relative text-white group'>
      <img className='object-cover h-full w-full ' src="/assets/images/master.jpg" alt="" />
      <div className='md:absolute inset-x-0 bottom-8  lg:left-8 bg-black bg-opacity-50 w-screen lg:max-w-[450px] text-white flex flex-col gap-12 p-6'>
        <p>Begin Your Master’s Degree this Summer Semester!
Join us online for our “Master Sessions” on January 9, 2023, and find out all you need to know about master's degree programs at Freie Universität. The sessions will be held in German and English. At the “Meet an Ambassador” event prospective students can ask weStudents ambassadors about student life at Freie Universität.</p>
<p>Image Credit: Studierendenmarketing</p>
      </div>
      <button>
      <span class="absolute -left-8 group-hover:translate-x-16 duration-300 ease-in z-50  h-fit  top-0 bottom-0 my-auto material-symbols-outlined">
arrow_back_ios
</span></button>
<button>
      <span class="absolute -right-8 group-hover:-translate-x-16 duration-300 ease-in  h-fit  top-0 bottom-0 my-auto material-symbols-outlined">
arrow_forward_ios
</span></button>
        </div>
    </Wrapper>
  )
}

export default HeroSection