import React, { useEffect, useState } from 'react';
import style from "../../style.module.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../reducer'
import { Row, Col, Card, Image, Select, Button } from 'antd';
import styles from "./styles.module.css"
import { useParams } from 'react-router-dom';
import { detailById } from '../../requests';


const { Meta } = Card;
const { Option } = Select;

const Details = ({ product }) => {
    const {id}=useParams()
  const [selectedSize, setSelectedSize] = useState(''); // State to track selected size
  const [selectedImage, setSelectedImage] = useState(); // State to track selected image
  const [Data,setData]=useState({})
  const dispatch=useDispatch()


  const getData=async()=>{
    try{
      const data=await detailById(id)
      const {collections}=data
      
      setData(collections)
      console.log(collections,"--------------")

    }
    catch(error){
        console.log("error")
       
    }
  }

  useEffect(()=>{
    getData()
  },[])

  

  const handleSizeChange = (value) => {
    setSelectedSize(value);
  };

  const handleImageClick = (smallImage) => {
    setSelectedImage(smallImage);
  };

  

  const handleAddToCart = (id, name, price) => {
    
    dispatch(addToCart({ id, name, price }));
  };

  

  return (
    
    <div className={styles.container}>
      <Row gutter={[16, 16]}>
       
        <Col span={12}>
          {/* <Image src={product.bigImage} alt="Product" /> */}
          {/* <div className="small-images">
            {product.smallImages.map((smallImage, index) => (
              <Image
                key={index}
                src={smallImage}
                alt={`Small Image ${index}`}
                onClick={() => handleImageClick(smallImage)}
                preview={false}
              />
            ))}
          </div> */}
        </Col>
        
        
        <Col   span={12}>
          <Card>
            <p className={styles.productname} >{Data.productName}</p>
            <div style={{display:'flex',gap:'1rem'}}>

            <p className={styles.price}> ₹ {Data.price}</p>
            <p className={styles.afterPrice}> ₹ {Data.priceAfterDiscount}</p>
            </div>
            <p>Discount: {Data.discount}%</p>
            {/* <Select
              placeholder="Select Size"
              onChange={handleSizeChange}
              value={selectedSize}
              style={{ width: '100%', marginBottom: '16px' }}
            >
              <Option value="S">S</Option>
              <Option value="M">M</Option>
              <Option value="XL">XL</Option>
              
            </Select> */}
            <Button
              type="primary"
              className={style.buttonglobal}
              // disabled={!selectedSize}
              onClick={() =>
                handleAddToCart(Data._id, Data.productName, Data.price)
              }
            >
              Add to Cart
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Details;
