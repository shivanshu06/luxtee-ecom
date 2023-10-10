import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../reducer';
import { useParams, Link } from 'react-router-dom';
import { getfullcollection } from '../../requests';
import styles from './styles.module.css';
import { Button, Card, Row, Col, Skeleton } from 'antd';
const { Meta } = Card;

const Collection = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const { category } = useParams();
  const dispatch = useDispatch();
  const uppercaseCategory = category.toUpperCase();

  const fetchdata = async () => {
    try {
      const data = await getfullcollection(category);
      console.log(data.collections, 'data is coming');
      setData(data.collections);
      setIsLoading(false); 
      console.log(data, 'ye hai');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleAddToCart = (id, name, price) => {
    // Dispatch the addToCart action with the product information
    dispatch(addToCart({ id, name, price }));
  };

  return (
    <div className={styles.container}>
      <h1>{uppercaseCategory} Collection</h1>
      <Row gutter={[16, 16]}>
        {/* Conditionally render skeleton or card based on loading state */}
        {isLoading ? (
          // Display skeleton while loading
          Array.from({ length: 8 }).map((_, index) => (
            <Col key={index} span={8} xs={24} sm={12} md={8} lg={6}>
              <Skeleton active />
            </Col>
          ))
        ) : (
          // Display actual card content when data is available
          data.map((item) => (
            <Col key={item._id} span={8} xs={24} sm={12} md={8} lg={6}>
              <Link to={`${item._id}`}>
                <Card hoverable>
                  <img src="" alt="image" />

                  <Meta title={item.productName} />
                    <h2>₹ {item.priceAfterDiscount}</h2>
                  <div style={{ display: 'flex', gap: '4px',alignItems:'center' }}>
                    <p style={{textDecoration:'line-through'}}>M.R.P: {item.price},</p>
                    <p>Discount: {item.discount}%</p>
                  </div>
                  {/* <Button
                    type="primary"
                    onClick={() =>
                      handleAddToCart(item._id, item.productName, item.price)
                    }
                  >
                    Add to Cart
                  </Button> */}
                </Card>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default Collection;
