import react, { useState } from "react"
import { useDispatch } from 'react-redux';
import { addToCart } from "../../reducer";
import { useParams } from 'react-router-dom';
import {getfullcollection} from "../../requests"
import React, { useEffect } from 'react'
import styles from "./styles.module.css"
import { Button, Card,Row,Col } from "antd"
const { Meta } = Card;



const Collection= ()=>{
const [Data,setData]=useState([])
const { category } = useParams();
const dispatch = useDispatch();

const uppercaseCategory=category.toUpperCase()
  

    const fetchdata=async()=>{
        try{
          const data=await getfullcollection(category)
          console.log(data.collections,"datais coming")
          setData(data.collections)
          console.log(Data,"ye hai")
        }
        catch(error){
          console.log(error)
    
        }
      }
      useEffect(()=>{
        fetchdata()
      },[])

      
        

        const handleAddToCart = (id,name,price) => {
          // Dispatch the addToCart action with the product information
          dispatch(addToCart({ id, name, price }));
        };

      
    return(
      <div className={styles.container}>
        <h1>{uppercaseCategory} Collection</h1>
      <Row gutter={[16,16]}>
        {Data.map((item) => (
          <Col key={item._id} span={8}>
            <Card hoverable>
              <img src="" alt="image" />

              <Meta title={item.productName} />
              <div style={{ display: 'flex',gap:"4px" }}>
                <p>Rs {item.price}</p>
                <p>{item.discount}%</p>
              </div>
              <Button type="primary" 
               onClick={() => handleAddToCart(item._id, item.productName, item.price)}>
                Add to Cart</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    )
}

export default Collection