import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const List = () => {

  const [list, setList] = useState([])

  const fetchList = async () => {

    try {

      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.products) {
        setList(response.data.products)
      }
      else {
        toast.error(response.data.message)
      }

    } catch (error) {

      console.log(error)
      toast.error(error.message)

    }
  }

  useEffect(() => {

  }, [])

  return (

    <>
      <p className='mb-2'>ALL PEODUCTS LIST </p>
      <div className='flex flex-col gap-2'>
        {/* Lis ttable titles */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
      </div>
    </>
  )
}

export default List
