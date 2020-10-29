import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrderList } from 'store/order-list/actions';
import { deliverOrder, deliverReset } from 'store/order-deliver/actions';

import OrderListItem from './OrderListItem';
import { Spinner, Error } from 'components/shared';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#131921',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ProductList = ({
  history,
  getOrderList,
  loading,
  error,
  user,
  orderList,
  deliverOrder,
  deliverSuccess,
  deliverError,
  deliverLoading,
  deliverReset,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (deliverSuccess) deliverReset();
    if (!user.isAdmin) history.push('/signin');
    else getOrderList();
  }, [user, history, getOrderList, deliverSuccess, deliverReset]);

  const onDeliver = (orderId) => {
    deliverOrder(orderId);
  };

  return (
    <div className='admin__userList'>
      <p className='orderDetail_nav' onClick={() => history.push('/profile')}>
        &#8592; Back to Profile
      </p>
      <h1>All Orders</h1>
      {deliverError && <Error error={deliverError} />}
      {loading || deliverLoading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : orderList.length === 0 ? (
        <Error error='No orders in store' />
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>ORDER ID</StyledTableCell>
                <StyledTableCell align='center'>TO</StyledTableCell>
                <StyledTableCell align='center'>SHIPPING PRICE</StyledTableCell>
                <StyledTableCell align='center'>TAX PRICE</StyledTableCell>
                <StyledTableCell align='center'>TOTAL PRICE</StyledTableCell>
                <StyledTableCell align='center'>PAID</StyledTableCell>
                <StyledTableCell align='center'>DELIVERED</StyledTableCell>
                <StyledTableCell align='center'></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderList?.map((order, index) => (
                <OrderListItem
                  order={order}
                  key={index}
                  history={history}
                  onDeliver={onDeliver}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userApp.user,
  orderList: state.orderListApp.orderList,
  loading: state.orderListApp.loading,
  error: state.orderListApp.error,
  deliverLoading: state.orderDeliverApp.loading,
  deliverError: state.orderDeliverApp.error,
  deliverSuccess: state.orderDeliverApp.success,
});

const mapDispatchToProps = {
  getOrderList,
  deliverOrder,
  deliverReset,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
