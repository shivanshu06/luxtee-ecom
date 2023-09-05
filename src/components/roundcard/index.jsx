import React from 'react';
import { Card } from 'antd';
import styles from "./styles.module.css"
import marvel from "../../assets/images/homepage/marvel2.jpg"

const ClickableRoundCard = ({ imageSrc, title }) => {
  return (
    <Card className={styles.clickableroundcard} hoverable>
    <div className={styles.cardimage}>
      <img src={imageSrc} alt="title" />
    </div>
    <div className={styles.cardtitle}>{title}</div>
  </Card>
  );
};

export default ClickableRoundCard;
