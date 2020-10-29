import React from 'react';
import { useHistory } from 'react-router-dom';

const Subtotal = ({ basket }) => {
  const history = useHistory();

  return (
    <div className='subtotal'>
      <h3>
        Subtotal ({Number(basket.reduce((acc, item) => acc + item.quantity, 0))}{' '}
        Items):{' '}
        <span>
          $
          {basket
            .reduce((acc, item) => acc + item.quantity * item.price, 0)
            .toFixed(2)}
        </span>
      </h3>
      <div>
        <input type='checkbox' />
        This order contains a gift
      </div>
      <button
        disabled={basket.length === 0}
        onClick={() => history.push('/signin?redirect=shipping')}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
