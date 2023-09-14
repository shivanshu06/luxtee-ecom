import React from 'react'
import Hero from "../../assets/images/homepage/hg.png"
import tee from "../../assets/images/homepage/tee.png"
import a from "../../assets/images/homepage/t1.png"
import b from "../../assets/images/homepage/t2.png"
import c from "../../assets/images/homepage/t3.png"
import d from "../../assets/images/homepage/t4.png"

import marvel from "../../assets/images/homepage/marvel2.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import man from "../../assets/images/homepage/mencard.png"
import spiderman from "../../assets/images/homepage/spi.jpeg"
import off from '../../assets/images/homepage/latest.jpeg'
import { Carousel as AntdCarousel } from 'antd';
import test from "../../assets/images/homepage/mann.jpg"
import woman from "../../assets/images/homepage/womann.jpg"
import kids from "../../assets/images/homepage/kids.jpg"
import styles from "./styles.module.css"
import { Button, Card } from 'antd'
import { Link } from 'react-router-dom'
const { Meta } = Card;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Homepage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = [
    {
      image: a,
      title: 'Checkered T-shirt',
      price: '$150',
    },
    {
      image: b,
      title: 'Checkered T-shirt',
      price: '$150',
    },
    {
      image: a,
      title: 'Checkered T-shirt',
      price: '$150',
    },
    {
      image: a,
      title: 'Checkered T-shirt',
      price: '$150',
    },
    {
      image: a,
      title: 'Checkered T-shirt',
      price: '$150',
    },
    {
      image: a,
      title: 'Checkered T-shirt',
      price: '$150',
    },
    
  ];

  const content = [
    { image: marvel, title: 'Marvel' },
    { image: marvel, title: 'Marvel' },
    { image: marvel, title: 'Marvel' },
    { image: marvel, title: 'Marvel' },
    // Add more content as needed
  ];

  const topSellingItems = [
    { image: a, title: 'Checkered T-shirt', price: '$150' },
    { image: b, title: 'Checkered T-shirt', price: '$150' },
    { image: c, title: 'Checkered T-shirt', price: '$150' },
    { image: d, title: 'Checkered T-shirt', price: '$150' },
    // Add more items as needed
  ];

  // console.log(items)

  return (
    <div className={styles.container}>

<AntdCarousel autoplay>
    <div className={styles.poster}>
    <img src={off} alt='off'/>
    </div>
    <div className={styles.poster}>
    <img src={spiderman} alt='spidermancollection'/>
    </div>
  </AntdCarousel>
        

        <div className={styles.blueback}>
          <h3>Collection For your loved ones!!</h3>
          {/* <h5>Gift the style</h5> */}
          <div className={styles.collec}>
            {/* <Button className={styles.collecbtn}>women</Button>
            <Button className={styles.collecbtn}>Men</Button>
            <Button className={styles.collecbtn}>Kids</Button> */}
            <Link to='/collection/men'>

            <Card  style={{ width: '180px' }} hoverable
      cover={<img alt="Image" src={test} />}> <Meta title="Men"/>
            </Card>
      </Link>

      <Link to="/collection/women">
            <Card  style={{ width: '180px' }} hoverable
      cover={<img alt="Image" src={woman} />}> <Meta title="Women"/>
            </Card>
            </Link>

            <Link to="/collection/kids">
            <Card  style={{ width: '180px' }} hoverable
      cover={<img alt="Image" src={kids} />}> <Meta title="Kids"/>
            </Card>
            </Link>
          </div>
        </div>

        <div className={styles.align}>
          <div className={styles.headtag}>

                <h1 style={{color:'white'}}>Crafted for comfort & designed for you.</h1>
                <p style={{color:'white'}}>Luxetee is your ultimate source for finding the perfect T-shirt that matches your style and personality. Our dedicated team of designers and creators are committed to bringing you a diverse range of T-shirt designs that inspire and make a statement. </p>
                <Link to="/category">
                <Button type='primary' className={styles.shopnow}>Shop now</Button>
                </Link>
          </div>
                
        </div>

        <div className={styles.text}>
      <h1>NEW ARRIVALS</h1>
      <div className={styles.aligncards}>
        <Carousel responsive={responsive}>
          {items.map((item, index) => (
            <Card key={index} className={styles.card} hoverable>
              <div>
                <img style={{ height: '199px' }} src={item.image}  />
              </div>
              <h3>{item.title}</h3>
              <h2>{item.price}</h2>
              
              <Button type='primary'>Add to cart</Button>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>

        {/* <div className={styles.poster}>
          <img src={spiderman} alt='spidermancollection'/>
        </div> */}
      
      <div className={styles.text}>
      <h1>Based on Choice</h1>
      <div className={styles.aligncards}>
        <Carousel responsive={responsive}>
          {content.map((item, index) => (
            <div key={index} className={styles.card}>
              <img
                style={{ height: '199px', borderRadius: '10px' }}
                src={item.image}
                alt={item.title}
              />
              <h4>{item.title}</h4>
            </div>
          ))}
        </Carousel>
      </div>
    </div>

      


    <div className={styles.text}>
      <h1>TOP SELLING</h1>
      <div className={styles.aligncards}>
        <Carousel responsive={responsive}>
          {topSellingItems.map((item, index) => (
            <Card key={index} className={styles.card} hoverable>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <h2>{item.price}</h2>
              <Button type='primary'>Add to cart</Button>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>

        <div className={styles.banner}>
          <h1>Teespiration wear your imagination</h1>
          <h2>We sell what we tell <span style={{color:'yellow'}}>TOH SHOPPING KARO BINDASS</span></h2>
        </div>
    </div>
            )
          }
          
          export default Homepage
            
           
            
            
        