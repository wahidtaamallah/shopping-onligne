import React from 'react';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';

import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { ReportProblemIcon, LocalShippingIcon } from 'components/icons';

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

const ProfileOrdersItem = ({ item }) => {
  const history = useHistory();
  return (
    <StyledTableRow key={item.name}>
      <StyledTableCell align='left'>{item._id}</StyledTableCell>
      <StyledTableCell align='center'>
        <Moment format='LL'>{item.createdAt}</Moment>
      </StyledTableCell>
      <StyledTableCell align='center'>${item.totalPrice}</StyledTableCell>
      <StyledTableCell align='center'>
        {item.isPaid ? (
          <Moment format='LL'>{item.paidAt}</Moment>
        ) : (
          <ReportProblemIcon style={{ color: '#8b0000' }} />
        )}
      </StyledTableCell>
      <StyledTableCell align='center'>
        {item.isDelivered ? (
          <Moment format='LLL'>{item.deliveredAt}</Moment>
        ) : (
          <LocalShippingIcon style={{ color: '#8b0000' }} />
        )}
      </StyledTableCell>
      <StyledTableCell align='center'>
        <button
          onClick={() => history.push(`/order/${item._id}`)}
          className='button'
        >
          Details
        </button>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ProfileOrdersItem;
