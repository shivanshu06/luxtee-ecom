import React from 'react'
import styles from "./styles.module.css"
import marvel from "../../assets/images/homepage/marvel2.jpg"
import Roundcard from "../../components/roundcard"
import { Card } from 'antd';
const Products = () => {
  return (
    <div className={styles.container}>
      <h1>OUR COLLECTIONS</h1>
      <div className={styles.alignround}>

      <Roundcard imageSrc={marvel} title="Women" />
      <Roundcard imageSrc={marvel} title="Men" />
      <Roundcard imageSrc={marvel} title="Kids" />
    </div>
<div>
<h1>Legendary Icons Collection</h1>
    <div className={styles.alignround}>
    <Roundcard imageSrc={marvel} title="Marvel" />
      <Roundcard imageSrc={marvel} title="Mario" />
      <Roundcard imageSrc={marvel} title="Batman" />
      <Roundcard imageSrc={marvel} title="Superman" />
      <Roundcard imageSrc={marvel} title="Power Girls" />
</div>
    </div>
      </div>
  )
}

export default Products