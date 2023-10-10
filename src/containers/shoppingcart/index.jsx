import styles from "./styles.module.css";
import axios from "axios";
// import Razorpay from 'razorpay';
import { useState } from "react";
import { DeleteOutlined } from '@ant-design/icons';
import { removeFromCart,incrementQuantity,decrementQuantity } from '../../reducer';
import { useSelector, useDispatch } from 'react-redux';
import { Card ,Row,Button,Modal,Form,Input,Select} from "antd";
import emptycart from "../../assets/images/cart/emptycart.svg"
import { Footer } from "antd/es/layout/layout";
const { Meta } = Card;
const Shoppingcart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice=useSelector((state)=>state.cart.totalPrice)
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decrementQuantity(id));
    }
  };

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  
  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  if (cartItems.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.oops}>
        <img className={styles.emptycartimage} src={emptycart} alt="cartempty"/>
        <h1 style={{ textAlign: 'center' }}>OOPS!!! Nothing in cart</h1>
      </div>
      </div>
    );
  }


  const checkoutHandler = async (amount) => {

    // const { data: { key } } = await axios.get("http://www.localhost:5000/getkey")

    // const { data } = await axios.post("http://localhost:5000/checkout", {
    //     amount
    // })

    console.log(window)


    
  //   const options = {
  //     "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
  //     "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //     "currency": "INR",
  //     "name": "Acme Corp", //your business name
  //     "description": "Test Transaction",
  //     "image": "https://example.com/your_logo",
  //     "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //     "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  //     "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
  //         "name": "Gaurav Kumar", //your customer's name
  //         "email": "gaurav.kumar@example.com",
  //         "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
  //     },
  //     "notes": {
  //         "address": "Razorpay Corporate Office"
  //     },
  //     "theme": {
  //         "color": "#3399cc"
  //     }
  // };
  // var rzp1 = new Razorpay(options);
  // document.getElementById('rzp-button1').onclick = function(e){
  //     rzp1.open();
  //     e.preventDefault();
  // }
}

  

  return (
    <div className={styles.container}>
      <h1 style={{textAlign:'center'}}>Your Cart</h1>
      <div className={styles.layout}>
      <div>
      <ul>
        {cartItems.map((item) => (
          <Card
            key={item.id}
            hoverable
            style={{ backgroundColor:'aliceblue', marginBottom: '8px' }}
          >
            <div className={styles.card}>
              <img style={{ width: '120px' }} src="" alt="image" />
              <Meta title={item.name} />
              <div className={styles.rate}>
              <div className={styles.incdec}>
                <Button onClick={() => handleDecrement(item.id, item.quantity)}>
                  -
                </Button>
                {item.quantity}
                <Button onClick={() => handleIncrement(item.id)}>+</Button>
              </div>
              <h2>Rs {item.price * item.quantity}</h2>
              <Button onClick={() => dispatch(removeFromCart(item.id))}>
              <DeleteOutlined />
              </Button>
              </div>
            </div>
          </Card>
        ))}</ul>
        </div>
        <div className={styles.cardSummary}>
         <Card hoverable className={styles.summary}>
        <h2>Order Summary</h2>
        <hr></hr>
        <div style={{display:'flex',gap:'10px'}}><p>Sub Total:</p>
        <p>Rs {totalPrice}</p></div>
        <div style={{display:'flex',gap:'10px'}}>
          <p>Shipping Charge:</p>
          <p>Rs{totalPrice}</p>
          </div>
        
        <hr></hr>
        <Button style={{background:'black',color:'white'}} onClick={()=>checkoutHandler(totalPrice)}>Proceed to Payment</Button>
        </Card>
        </div>

        </div>
      

      <Modal title="Please fill your details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}
      style={{
        top: 20,
      }}>
      <Form
      
    name="basic"
    // labelCol={{
    //   span: 8,
    // }}
    // wrapperCol={{
    //   span: 16,
    // }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email id',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Phone Number"
      name="phonenumber"
      rules={[
        {
          required: true,
          message: 'Please input your phone number',
        },

        
      ]}
    >
      <Input />
    </Form.Item>


    <Form.Item
      label="Address"
      name="address"
      rules={[
        {
          required: true,
          message: 'Please input your Address',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="City"
      name="city"
      rules={[
        {
          required: true,
          message: 'Please input your City',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item  label="State"
      name="state"
      rules={[
        {
          required: true,
          message: 'Please select your state',
        },
      ]}>
    <Select
    showSearch
    placeholder="Select your state"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />

</Form.Item>

    <Form.Item
      label="Pincode"
      name="pincode"
      rules={[
        {
          required: true,
          message: 'Please input your pincode',
        },
      ]}
    >
      <Input />
    </Form.Item>
   

    <Form.Item
      wrapperCol={{
        offset: 20,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </Modal>
    </div>
  );
};

export default Shoppingcart;