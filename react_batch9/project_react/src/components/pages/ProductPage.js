import React, { useEffect, useState } from 'react'
import ProductArr from '../../Mockdata'
import Card from './Card'
import axios from 'axios';
export default function ProductPage({captureName}) {
    const [products,setProduct]=useState([]);
  

    useEffect(()=>{
        const fetcher =async()=>{
            const response =await axios.get('https://dummyjson.com/products')
         console.log(response.data);
         setProduct(response.data.products);
        }
        fetcher()
    },[])

    const filteredArr =products.filter((ele)=>{
        console.log(captureName,"this is my searched name")
        if(ele.brand.toLowerCase()===captureName.toLowerCase()){
            return ele;
        }
    })
    return (
        <div>


            {
                filteredArr.length !== 0 ? filteredArr.map((ele,index) => {
                    return (
                        <>
                            <Card ele={ele} key={index} />
                        </>
                    )
                })
                :
                products.map((ele,index)=>{
                    return (
                        <>
                            <Card ele={ele} key={index} />
                        </>
                    )
                    
              })
            }
        </div>
    )
}
