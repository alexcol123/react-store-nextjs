import { Input } from 'semantic-ui-react';

function AddProductToCart() {
  return (
    <>
      <Input
        type="number"
        min="1"
        value="1"
        placeholder="Quantity"
        action={{ color: 'orange', content: 'Add to Cart', icon: 'plus cart' }}
      ></Input>
    </>
  );
}

export default AddProductToCart;
