import React from 'react'
import styles from "./styles.module.css"
import { Button, Form, Input, TextArea} from 'antd';
import { useState } from 'react';


const Contact = () => {
    const [form] = Form.useForm();
    const { TextArea } = Input;
  const [formLayout, setFormLayout] = useState('vertical');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  return (
    <div className={styles.container}>
        <h1>CONTACT US</h1>
        <Form
    //   {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}
      style={{
        maxWidth: formLayout === 'inline' ? 'none' : 600,
      }}
    >
      
      <Form.Item label="Name">
        <Input placeholder="Enter your name" />
      </Form.Item>
      <Form.Item label="Email">
        <Input placeholder="Enter your email" />
      </Form.Item>
      <Form.Item label="Phone Number">
        <Input placeholder="Enter your Phone Number" />
      </Form.Item>
      <Form.Item label="Query">
      <TextArea rows={4} />
      </Form.Item>
      <Form.Item >
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
        </div>
  )
}

export default Contact