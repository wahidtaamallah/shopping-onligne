import React from 'react';
import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';

import { ErrorIcon, InputIcon } from 'components/icons';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const OrderListItem = ({ order, history, onDeliver }) => {
  return (
    <StyledTableRow key={order._id}>
      <StyledTableCell align='left'>{order._id}</StyledTableCell>
      <StyledTableCell align='center'>{order.user.name}</StyledTableCell>
      <StyledTableCell align='center'>${order.shippingPrice}</StyledTableCell>
      <StyledTableCell align='center'>${order.taxPrice}</StyledTableCell>
      <StyledTableCell align='center'>${order.totalPrice}</StyledTableCell>
      <StyledTableCell align='center'>
        {order.isPaid ? (
          moment(order.paidAt).format('LL')
        ) : (
          <ErrorIcon className='uncheck' />
        )}
      </StyledTableCell>
      <StyledTableCell align='center'>
        {order.isDelivered ? (
          moment(order.deliveredAt).format('LL')
        ) : (
          <div className='mark-as-delivered'>
            <IconButton
              onClick={() => onDeliver(order._id)}
              color='default'
              aria-label='order page'
              component='span'
            >
              Mark as Delivered
            </IconButton>
          </div>
        )}
      </StyledTableCell>

      <StyledTableCell align='center'>
        <IconButton
          onClick={() => history.push(`/order/${order._id}`)}
          color='default'
          aria-label='order page'
          component='span'
        >
          <InputIcon />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default OrderListItem;
