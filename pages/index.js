import React from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList';

function Home({ products }) {
 

  return <ProductList products={products} />;
}

Home.getInitialProps = async () => {
  // Fetch data on server
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return { products: response.data };

  // Return  response data a s an pbject
  return { hello: 'world' };
  // note: this object will be merge with existent props
};

export default Home;
