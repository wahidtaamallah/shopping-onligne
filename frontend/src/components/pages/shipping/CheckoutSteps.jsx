import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className='checkoutSteps'>
      <div>
        {step1 ? (
          <Link to='/signin'>
            <Button variant='outlined' color='default'>
              Signin
            </Button>
          </Link>
        ) : (
          <Button variant='outlined' disabled>
            Signin
          </Button>
        )}
      </div>
      <div>
        {step2 ? (
          <Link to='/shipping'>
            <Button variant='outlined' color='default'>
              Shipping
            </Button>
          </Link>
        ) : (
          <Button variant='outlined' disabled>
            Shipping
          </Button>
        )}
      </div>
      <div>
        {step3 ? (
          <Link to='/payment'>
            <Button variant='outlined' color='default'>
              Payment
            </Button>
          </Link>
        ) : (
          <Button variant='outlined' disabled>
            Payment
          </Button>
        )}
      </div>
      <div>
        {step4 ? (
          <Link to='/placeorder'>
            <Button variant='outlined' color='default'>
              Place Order
            </Button>
          </Link>
        ) : (
          <Button variant='outlined' disabled>
            Place Order
          </Button>
        )}
      </div>
    </div>
  );
};

export default CheckoutSteps;
