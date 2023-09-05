import React from 'react'
import styles from "./styles.module.css"
import logo from "../../assets/images/header/uuu.svg"
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div>
    <footer className={styles.footer}>
      <div className={styles.footerlogo}>
        <img style={{height:'145px'}} src={logo} alt="Company Logo" />
        <h5>Luxetee is your ultimate source for finding the perfect T-shirt that matches your style and personality. Our dedicated team of designers and creators are committed to bringing you a diverse range of T-shirt designs that inspire and make a statement.</h5>
      </div>
      <div className={styles.footerlinks}>
        <ul>
          <h3>Quick Links</h3>
          <li><a href="/">Home</a></li>
          <br></br>
          <li><a href="/products">Products</a></li>
          <br></br>
          <li><a href="/about">About Us</a></li>
          <br></br>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className={styles.footersocial}>
        <h3>Collections </h3>
        <ul>
          <li>Graphic Tees</li>
          <br></br>
          <li>Nature-Inspired</li>
          <br></br>
          <li>Pop Culture</li>
          <br></br>
          <li>Personalized Favorites</li>
        </ul>
      </div>
      <div className={styles.footersocial}>
        <h3>Contact Us</h3>
        <h5>Feel free to reach out to us with any questions, feedback, or concerns.</h5>
        {/* <br></br> */}
        <h4>Phone:- 888888899</h4>
        {/* <br></br> */}
        <h4>Email:- xyz@gmail.com</h4>
        
        <div className="footer-social">
        <a href="https://www.facebook.com/your-page"><FacebookOutlined /></a>
        <a href="https://www.twitter.com/your-page"><TwitterOutlined /></a>
        <a href="https://www.instagram.com/your-page"><InstagramOutlined /></a>
      </div>
      </div>
      
      
    </footer>
    <hr></hr>
    <h5 className={styles.copyright}>Luxetee© 2023. All rights reserved.</h5>
    </div>
  )
}

export default Footer