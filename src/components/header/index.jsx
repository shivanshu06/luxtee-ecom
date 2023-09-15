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
       
        <div>
        <div className={styles.outer}>
        {/* <SearchOutlined style={{ fontSize: '20px' }} /> */}
        <div >
           {/* <img style={{height:'60px'}} src={Logo} alt="Logo" className={styles.logo} /> */}
           <p className={styles.logoFont}>fabbricato.</p>
        </div>
        <input
  type="text"
  placeholder="Search products"
  prefix={<SearchOutlined style={{ fontSize: '20px' }} />}

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
                <Button className={styles.link} size="large" type="link" icon={<ShoppingCartOutlined />} />
                </Link>
                <Button className={styles.link} size="large" type="link" icon={<LoginOutlined />} />
            </div>
        </div>
        <div className={styles.searchbarmobile}>
        <input
  type="text"
  placeholder="Search products"
  prefix={<SearchOutlined style={{ fontSize: '20px' }} />}

  className={styles.searchbardesign}
/>
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
                {/* <hr></hr> */}
       
                </div>
    )

}

export default header