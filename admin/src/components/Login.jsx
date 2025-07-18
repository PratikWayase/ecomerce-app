import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, { email, password })

      if (response.data.success) {

        setToken(response.data.token)
        
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('Login failed:', error)
      toast.error(error.message)
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
