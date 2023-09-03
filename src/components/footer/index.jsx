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
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h4>
      </div>
      <div className={styles.footerlinks}>
        <ul>
          <h3>Quick Links</h3>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className={styles.footersocial}>
        <h3>Contact Us</h3>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
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
    <h5 className={styles.copyright}>Copyright dummy lorem 2023</h5>
    </div>
  )
}

export default Footer