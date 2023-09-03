import React from 'react'
import Hero from "../../assets/images/homepage/hg.png"
import tee from "../../assets/images/homepage/tee.png"
import a from "../../assets/images/homepage/t1.png"
import b from "../../assets/images/homepage/t2.png"
import c from "../../assets/images/homepage/t3.png"
import d from "../../assets/images/homepage/t4.png"
import women from '../../assets/images/homepage/women.png'
import marvel from "../../assets/images/homepage/marvel2.jpg"
import man from "../../assets/images/homepage/mencard.png"
import spiderman from "../../assets/images/homepage/spi.jpeg"
import off from '../../assets/images/homepage/p133.jpeg'
import { Carousel } from 'antd';
import styles from "./styles.module.css"
import { Button, Card } from 'antd'

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Homepage = () => {
  return (
    <div className={styles.container}>

<Carousel autoplay>
    <div className={styles.poster}>
    <img src={off} alt='off'/>
    </div>
    <div className={styles.poster}>
    <img src={spiderman} alt='spidermancollection'/>
    </div>
    {/* <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div> */}
  </Carousel>
        <div className={styles.align}>
          <div className={styles.headtag}>

                <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                <Button type='primary' className={styles.shopnow}>Shop now</Button>
          </div>
                {/* <img style={{height:'400px'}}src={Hero} alt='image'/> */}
        </div>

        <div className={styles.blueback}>
          <h3>Collection For your loved ones!!</h3>
          {/* <h5>Gift the style</h5> */}
          <div className={styles.collec}>
            {/* <Button className={styles.collecbtn}>women</Button>
            <Button className={styles.collecbtn}>Men</Button>
            <Button className={styles.collecbtn}>Kids</Button> */}
            <Card className={styles.colleccards}><h4>Women</h4></Card>
            <Card className={styles.colleccards}><h4>Men</h4></Card>
            <Card className={styles.colleccards}><h4>Kids</h4></Card>
          </div>
        </div>

        <div className={styles.newarrivals}>
          <h1>NEW ARRIVALS</h1>
          <div className={styles.aligncards}>
            <Card className={styles.card}>
              <div ><img style={{height:"199px"}} src={a}  alt='tee'/></div>
              <h3>checkerd tshirt</h3>
              <h2>$150</h2>
            </Card>

            <Card className={styles.card}>
              <div><img style={{height:"199px"}}src={b} alt='tee'/></div>
              <h3>checkerd tshirt</h3>
              <h2>$150</h2>
            </Card>

            <Card className={styles.card}>
              <div><img style={{height:"199px"}}src={c} alt='tee'/></div>
              <h3>checkerd tshirt</h3>
              <h2>$150</h2>
            </Card>

            <Card className={styles.card}>
              <div><img style={{height:"199px"}}src={d} alt='tee'/></div>
              <h3>checkerd tshirt</h3>
              <h2>$150</h2>
            </Card>
           </div>
        </div>

        {/* <div className={styles.poster}>
          <img src={spiderman} alt='spidermancollection'/>
        </div> */}
      
      <div className={styles.text}>
        <h1>based on choice</h1>
        <div className={styles.aligncards}>
         <div>
          <img style={{height:'199px',borderRadius:'10px'}} src={marvel} alt='marvel'/>
          <h4>Marvel </h4>
        </div>

        <div>
          <img style={{height:'199px',borderRadius:'10px'}} src={marvel} alt='marvel'/>
          <h4>Marvel </h4>
        </div>

        <div>
          <img style={{height:'199px',borderRadius:'10px'}} src={marvel} alt='marvel'/>
          <h4>Marvel </h4>
        </div>

        <div>
          <img style={{height:'199px',borderRadius:'10px'}} src={marvel} alt='marvel'/>
          <h4>Marvel </h4>
        </div>
        </div>
      </div>

      {/* <div className={styles.poster}>
        <img src={off} alt='off'/>
      </div> */}


        <div className={styles.newarrivals} >

          <h1>TOP SELLING</h1>
          <div className={styles.aligncards}>
            <Card className={styles.card}>
              <div><img src={tee} alt='tee'/></div>
              <h3>checkerd tshirt</h3>
              <h2>$150</h2>
            </Card>

            <Card className={styles.card}>
              <div><img src={tee} alt='tee'/></div>
              <h3>checkerd tshirt</h3>
              <h2>$150</h2>
            </Card>

            <Card className={styles.card}>
              <div><img src={tee} alt='tee'/></div>
              <h3>checkerd tshirt</h3>
              <h2>$150</h2>
            </Card>

            <Card className={styles.card}>
              <div><img src={tee} alt='tee'/></div>
              <h3>checkerd tshirt</h3>
              <h2>$150</h2>
            </Card>
           </div>
        </div>

        <div className={styles.banner}>
          <h1>banner hai text likho</h1>
          <h2>lorem ipsum haiyeh</h2>
        </div>
    </div>
            )
          }
          
          export default Homepage
            
           
            
            
        