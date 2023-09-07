import styles from "./styles.module.css"
import React from "react"
import { Button,Input } from "antd"
import Logo from "../../assets/images/header/uuu.svg"
import {ShoppingCartOutlined,LoginOutlined,HeartOutlined,  } from "@ant-design/icons"
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";
const { Search } = Input;

function header() {
    
    return(

        <>
        <div className={styles.outer}>
        <div > <img style={{height:'60px'}} src={Logo} alt="Logo" className={styles.logo} /></div>
       
        <Search
      placeholder="Search products"
    //   onSearch={onSearch}
      className={styles.searchbar}
    />
            <div className={styles.navlinks}>
                {/* <Link to="/">
                <Button className={styles.link} type="link">Home</Button>
                </Link>
                <Link to="/category">

                <Button className={styles.link} type="link">Collection</Button>
                </Link>
                <Link to="/contact">

                <Button className={styles.link} type="link">Contact</Button>
                </Link> */}
                {/* <Button type="link" icon={<HeartOutlined />} /> */}
                <Link to="/shoppingcart">
                <Button type="link" icon={<ShoppingCartOutlined />} />
                </Link>
                <Button type="link" icon={<LoginOutlined />} />
            </div>
        </div>
        <div className={styles.belownav}>
           <Link to="/">
                <Button className={styles.link} type="link">HOME</Button>
                </Link>
                <Link to="/category">

                <Button className={styles.link} type="link">COLLECTION</Button>
                </Link>
                <Link to="/contact">

                <Button className={styles.link} type="link">CONTACT</Button>
                </Link>
                </div>
                <hr></hr>
       
        </>
    )

}

export default header