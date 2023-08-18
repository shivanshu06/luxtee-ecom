import styles from "./styles.module.css"
import React from "react"
import { Button,Input } from "antd"
import {ShoppingCartOutlined,LoginOutlined,HeartOutlined  } from "@ant-design/icons"
const { Search } = Input;
function header() {
    return(

        <>
        <div className={styles.outer}>
            <div>logo</div>
            <Search placeholder="search products"  
            className={styles.search}
            enterButton />
            <div className={styles.navlinks}>
                
                <Button type="link">Home</Button>
                <Button type="link">Products</Button>
                <Button type="link">Contact</Button>
                <Button type="link" icon={<HeartOutlined />} />
                <Button type="link" icon={<ShoppingCartOutlined />} />
                <Button type="link" icon={<LoginOutlined />} />
            </div>
        </div>
        </>
    )

}

export default header