import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css';
import Atropos from 'atropos/react';

export const Product = () => {
    const params = useParams()
    const [productInfo, setProductInfo] = useState({})
     
    const getProductInfo = async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
        console.log('Product Info: ', response.data)
        setProductInfo(response.data)
        
    }

    useEffect(()=>{
       getProductInfo() 
    },[])

  return (
    <div>
        <h1>Product Page</h1>
        <div className="store-card">
            <img src={productInfo.image} alt={productInfo.title}  />
            
            <h4 >{productInfo.title}</h4>
            <p className="price" >${productInfo.price}</p>
            <p className="category" >{productInfo.category}</p>
          </div>
          
    </div>
  )
}
