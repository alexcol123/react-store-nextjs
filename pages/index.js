import React from 'react';
import axios from 'axios';

function Home({products}) {
  console.log(products);


  // React.useEffect(() => {
  //   getProducts();
  // }, []);

  // async function getProducts() {
  //   const url = 'http://localhost:3000/api/products';
  //   const response = await axios.get(url);
  //  console.log(response.data);
  // }

  return <>home</>;
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
