import React, { useState } from 'react';

import {
  Form,
  Input,
  TextArea,
  Button,
  Image,
  Message,
  Header,
  Icon
} from 'semantic-ui-react';

const INITIAL_PRODUCT = {
  name: '',
  price: '',
  media: '',
  description: ''
};

function CreateProduct() {
  const [product, setProduct] = useState(INITIAL_PRODUCT);

  const [mediaPreview, setMediaPreview] = useState('');

  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    if (e.target.name === 'media') {
      setProduct({ ...product, [e.target.name]: e.target.files[0] });
      setMediaPreview(window.URL.createObjectURL(e.target.files[0]));
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  // CODE  same as above
  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setProduct(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  //   console.log(product);
  // }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(product);
    setProduct(INITIAL_PRODUCT);
    setSuccess(true);
  };

  return (
    <>
      <Header as="h2" block>
        <Icon name="add" color="orange" />
        Create New Product{' '}
      </Header>

      <Form success={success} onSubmit={handleSubmit}>
        <Message
          success
          icon="check"
          header="Success!"
          content="Your Product has been posted..."
        />
        <Form.Group width={'equal'}>
          <Form.Field
            control={Input}
            name="name"
            label="Name"
            placeholder="Name"
            type="text"
            value={product.name}
            onChange={handleChange}
          />

          <Form.Field
            control={Input}
            name="price"
            label="Price"
            placeholder="Price"
            type="text"
            min="0.00"
            step="1.00"
            type="number"
            value={product.price}
            onChange={handleChange}
          />

          <Form.Field
            control={Input}
            name="media"
            type="file"
            label="Media"
            content="Select Image"
            accept="image/*"
            onChange={handleChange}
          />
        </Form.Group>

        <Image src={mediaPreview} rounded centered size="small" />

        <Form.Field
          control={TextArea}
          name="description"
          label="Description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />

        <Form.Field
          control={Button}
          color="blue"
          icon="pencil alternate"
          content="Submit"
          type="submit"
        />
      </Form>
    </>
  );
}

export default CreateProduct;
