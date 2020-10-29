import React from 'react';
import Alert from '@material-ui/lab/Alert';

const Success = ({ msg }) => {
  return <Alert severity='success'>{msg}</Alert>;
};

export default Success;
