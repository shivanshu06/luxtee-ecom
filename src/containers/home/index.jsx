import React from 'react'
import Hero from "../../assets/images/homepage/hg.png"
import tee from "../../assets/images/homepage/tee.png"

import styles from "./styles.module.css"
import { Button, Card } from 'antd'

const Homepage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.align}>
          <div className={styles.headtag}>

                <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                <Button type='primary' className={styles.shopnow}>Shop now</Button>
          </div>
                <img style={{height:'400px'}}src={Hero} alt='image'/>
        </div>

        <div className={styles.blueback}>
          <h3>Collection For your loved ones!!</h3>
          <h5>Gift the style</h5>
          <div className={styles.collec}>
            <Button className={styles.collecbtn}>Women</Button>
            <Button className={styles.collecbtn}>Men</Button>
            <Button className={styles.collecbtn}>Kids</Button>
          </div>
        </div>

        <div className={styles.newarrivals}>
          <h1>NEW ARRIVALS</h1>
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

        <div className={styles.newarrivals}>
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
    </div>
            )
          }
          
          export default Homepage
            
           
            
            
        