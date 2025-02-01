import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      {/* Title Section */}
      <div className='text-2xl text-center mt-8 border-t'>
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* About Content Section */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        {/* Image Section */}
        <img
          className='w-full md:max-w-[450px]'
          src={assets.about_img}
          alt='About Us'
        />
        
        {/* Text Content */}
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Welcome to Forever Clothing, where fashion meets timeless elegance. We are passionate about bringing you the latest trends with a focus on quality, comfort, and affordability. At Forever Clothing, we believe that every outfit tells a story, and our mission is to help you express yours with confidence and style.
          </p>
          <p>
            Our carefully curated collections are designed to cater to every occasion, from casual outings to special celebrations. Committed to sustainability, we prioritize eco-friendly materials and ethical practices. Join us on a journey to redefine your wardrobe and embrace fashion that lasts forever.
          </p>
          
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quanltiy Assurance</b>
          <p className='text-gray-600'>we meticulously select and vet each product to esnure it mmets quanlty stadanrds</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Conveneince</b>
          <p className='text-gray-600'>our user friendly interface ans hassle free ordering process , shopping has nenver been easier</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exception Customer Service</b>
          <p className='text-gray-600' >our team of dedicated professionals is here to assist you way , ensure your satisfaction is our top priority</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
    
  );
};

export default About;
