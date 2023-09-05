import styles from "./styles.module.css"
import { useState } from "react";
import { removeFromCart,updateQuantity } from '../../reducer';
import { useSelector, useDispatch } from 'react-redux';
import { Card ,Row,Button} from "antd";
const { Meta } = Card;
const Shoppingcart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    // dispatch(updateQuantity({ id, quantity: 1 }));
  };

  const handleDecrement = (id, quantity) => {
    if (quantity > 1) {
      // dispatch(updateQuantity({ id, quantity: -1 }));
    }
  };

  return (
    <div className={styles.container}>
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <Card
            key={item.id}
            hoverable
            style={{ border: '1px solid black', marginBottom: '8px' }}
          >
            <div className={styles.card}>
              <img style={{ width: '120px' }} src="" alt="image" />
              <Meta title={item.name} />
              <div>
                <Button onClick={() => handleDecrement(item.id, item.quantity)}>
                  -
                </Button>
                {item.quantity}
                <Button onClick={() => handleIncrement(item.id)}>+</Button>
              </div>
              <h2>Rs {item.price * item.quantity}</h2>
              <Button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </Button>
            </div>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Shoppingcart;