import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'

const List = () => {

  const [list, setList] = useState([])
  
  const fetchList = async () => {

    try {

      const response = await axios.get(backendUrl + '/api/product/list')
      setList(response.data)

    } catch (error) {
      
    }
  }

  useEffect(() => {
  
},[])

  return (
    <div>
      
    </div>
  )
}

export default List
