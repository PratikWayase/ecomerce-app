import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'

const Login = ({ setToken }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, { email, password })

      // Log response for debugging
      console.log('Login successful:', response.data)

      // Assuming token is returned in response.data.token
      setToken(response.data.token)
    } catch (error) {
      console.error('Login failed:', error)
      alert('Invalid credentials or server error. Please try again.')
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen w-full'>
      <div className='bg-white shadow-md px-8 py-7 rounded-lg max-w-lg'>
        <h1 className='text-xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
              type='email'
              placeholder='your@gmail.com'
              required
            />
          </div>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
              type='password'
              placeholder='Enter your password'
              required
            />
          </div>
          <button
            className='bg-black text-white rounded-md w-full mt-2 py-2 px-4'
            type='submit'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
