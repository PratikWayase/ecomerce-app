import React from 'react';
import { assets } from '../assets/assets'; // Ensure this path is correct

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>NUESTROS MÁS VENDIDOS</p>
          </div>
          <h1 className=' prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Últimas Llegadas</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>COMPRA AHORA</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt='Hero section showcasing latest arrivals' />
    </div>
  );
};

export default Hero;

