import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';

import { EditIcon, DeleteIcon } from 'components/icons';

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

const ProductListItem = ({ product, onDelete, history }) => {
  return (
    <StyledTableRow key={product.title}>
      <StyledTableCell align='left'>{product._id}</StyledTableCell>
      <StyledTableCell align='center'>{product.title}</StyledTableCell>
      <StyledTableCell align='center'>${product.price}</StyledTableCell>
      <StyledTableCell align='center'>{product.category}</StyledTableCell>
      <StyledTableCell align='center'>{product.brand}</StyledTableCell>
      <StyledTableCell align='center'>
        <IconButton
          onClick={() => history.push(`/admin/product/${product._id}/edit`)}
          color='default'
          aria-label='edit product'
          component='span'
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => onDelete(product._id)}
          color='default'
          aria-label='delete product'
          component='span'
        >
          <DeleteIcon />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default ProductListItem;
