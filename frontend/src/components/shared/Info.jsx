import React from 'react';
import Alert from '@material-ui/lab/Alert';

const Info = ({ msg }) => {
  return <Alert severity='info'>{msg}</Alert>;
};

export default Info;
