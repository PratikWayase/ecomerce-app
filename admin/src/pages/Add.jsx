import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { assets } from '../assets/assets'
import axios from 'axios'
import {backendUrl} from '../App'



const Add = () => {


  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)
  
  

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [Price, setPrice] = useState("")
  const [Category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestseller, setBestseller] = useState(false)
  const[Sizes,Setsizes] = useState([])




  const onSubmitHandler = async (e) => {

    e.preventDefault();

    try {
      const fromData = new FormData()

      fromData.append("name", name)
      fromData.append("description",description)
      fromData.append("price", Price)
      fromData.append("category", Category)
      fromData.append("subCategory", subCategory)
      fromData.append("bestseller", bestseller)
      fromData.append("sizes", JSON.stringify(Sizes))
      

      image1 && fromData.append("image1", image1)
      image2 && fromData.append("image2", image2)
      image3 && fromData.append("image3", image3)
      image4 && fromData.append("image4", image4)
      
      const response =  await axios.post(backendUrl + "/api/product/add",FormData)
      

    } catch (error) {
      
    }

  }


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'> upload image</p>
        <div className='flex gap-2'>
          <label htmlFor='image1'>
            <img className='w-20' src={ !image1 ? assets.upload_area : URL.createObjectURL(image1)} alt='' />
            <input onChange={(e)=>setImage1(e.target.files[0])} type='file' name="" id="image1" hidden></input>
          </label>
          <label htmlFor='image2'>
            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt='' />
            <input onChange={(e)=>setImage2(e.target.files[0])} type='file' name="" id="image2" hidden></input>
          </label>
          <label htmlFor='image3'>
            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt='' />
            <input onChange={(e)=>setImage3(e.target.files[0])} type='file' name="" id="image3" hidden></input>
          </label>
          <label htmlFor='image4'>
            <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt='' />
            <input onChange={(e)=>setImage4(e.target.files[0])} type='file' name="" id="image4" hidden></input>
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w[500px] px-3 py-2' type='text' placeholder='Type here' required></input>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea onChange={(e) => setDescription (e.target.value)} value={description} className='w-full max-w[500px] px-3 py-2' type='text' placeholder='write content here' required></textarea>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Sub Category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)}  className='w-full px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Wintermwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={Price} className='w-full px-3 py-2 sm:w-[120px]' type='Number' placeholder='25' />
        </div>
      </div>

      <div>
        <p className='mb-2'>
          Product Sizes</p>
        <div className='flex gap-3'>
          <div onClick={()=> Setsizes(prev => prev.includes("S") ? prev.filter(item => item !== 'S') : [...prev,"S"] )}>
            <p className={`${Sizes.includes("S") ? "bg-pink-400" : "bg-slate-400"} px-3 py-1 cursor-pointer`}>S</p>
          </div>

          <div onClick={()=> Setsizes(prev => prev.includes("M") ? prev.filter(item => item !== 'M') : [...prev,'M'] )}>
            <p className={`${Sizes.includes("M") ? "bg-pink-400" : "bg-slate-400"} px-3 py-1 cursor-pointer`}>M</p>
          </div>

          <div onClick={()=> Setsizes(prev => prev.includes("L") ? prev.filter(item => item !== 'L') : [...prev,"L"] )}>
            <p className={`${Sizes.includes("L") ? "bg-pink-400" : "bg-slate-400"} px-3 py-1 cursor-pointer`}>L</p>
          </div>

          <div onClick={()=> Setsizes(prev => prev.includes("XL") ? prev.filter(item => item !== 'XL') : [...prev,"XL"] )}>
            <p className={`${Sizes.includes("XL") ? "bg-pink-400" : "bg-slate-400"} px-3 py-1 cursor-pointer`}>XL</p>
          </div>

          <div onClick={()=> Setsizes(prev => prev.includes("XXL") ? prev.filter(item => item !== 'XXL') : [...prev,"XXL"] )}>
            <p className={`${Sizes.includes("XXL") ? "bg-pink-400" : "bg-slate-400"} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={()=> setBestseller(prev => !prev)} checked = {bestseller} type='checkbox' id="best Seller" />
        <label className='cursor-pointer' htmlFor='bestseller'>Add to Bestseller</label>
      </div>

      <button type='submit' className='px-5 py-2 mt-2 text-white bg-black '> ADD</button>


    </form>
  )
}

export default Add
