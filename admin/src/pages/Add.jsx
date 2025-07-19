import React from 'react'
import { Form } from 'react-router-dom'
import { assets } from '../assets/assets'

const Add = () => {
  return (
    <form className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'> upload image</p>
        <div className='flex gap-2'>
          <label htmlFor='image1'>
            <img className='w-20' src={assets.upload_area} alt='' />
            <input type='file' name="" id="image1" hidden></input>
          </label>
          <label htmlFor='image2'>
            <img  className='w-20' src={assets.upload_area} alt='' />
            <input type='file' name="" id="image2" hidden></input>
          </label>
          <label htmlFor='image3'>
            <img  className='w-20' src={assets.upload_area} alt='' />
            <input type='file' name="" id="image3" hidden></input>
          </label>
          <label htmlFor='image4'>
            <img  className='w-20' src={assets.upload_area} alt='' />
            <input type='file' name="" id="image4" hidden></input>
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input className='w-full max-w[500px] px-3 py-2' type='text' placeholder='Type here' required></input>
      </div>

       <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea className='w-full max-w[500px] px-3 py-2' type='text' placeholder='write content here' required></textarea>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

        <div>
          <p className='mb-2'>Product Category</p>
          <select className='w-full px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p  className='mb-2'>Sub Category</p>
          <select className='w-full px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Wintermwear</option>
          </select>
        </div>

        <div>
          <p>Product Price</p>
          <input type='Number' placeholder='25'/>
        </div>

      </div>

    </form>
  )
}

export default Add
