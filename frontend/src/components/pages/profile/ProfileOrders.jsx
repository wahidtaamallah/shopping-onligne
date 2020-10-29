import React from 'react';

import ProfileOrdersItem from './ProfileOrdersItem';
import { Error } from 'components/shared';

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

const ProfileOrders = ({ userOrders, error }) => {
  const classes = useStyles();
  return (
    <div className='auth__container profile-right'>
      <h1>My Orders</h1>
      {error && <Error error={error} />}
      {userOrders.length === 0 ? (
        <Error error='You dont have orders' />
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>CONFIRM ID</StyledTableCell>
                <StyledTableCell align='center'>DATE</StyledTableCell>
                <StyledTableCell align='center'>TOTAL</StyledTableCell>
                <StyledTableCell align='center'>PAID</StyledTableCell>
                <StyledTableCell align='center'>DELIVERED</StyledTableCell>
                <StyledTableCell align='center'></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userOrders.map((item, index) => (
                <ProfileOrdersItem item={item} key={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default ProfileOrders;
