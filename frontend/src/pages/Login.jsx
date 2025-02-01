import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up'); // Consistent casing

  const onSubmitHandler = async (Event) => {
    Event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-700'></hr>
      </div>
      {currentState === 'Log In' ? null : (
        <input
          type='text'
          className='w-full px-2 py-2 border border-gray-700'
          placeholder='Name'
          required
        />
      )}
      <input
        type='email'
        className='w-full px-2 py-2 border border-gray-700'
        placeholder='Email'
        required
      />
      <input
        type='password' // Correct type
        className='w-full px-2 py-2 border border-gray-700'
        placeholder='Password'
        required
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your Password?</p>
        {currentState === 'Log In' ? (
          <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentState('Log In')} className='cursor-pointer'>
            Login here
          </p>
        )}
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState === 'Log In' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;

