import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserList } from 'store/user-list/actions';
import { deleteUser } from 'store/user-delete/actions';

import { Spinner, Error } from 'components/shared';
import UserListItem from './UserListItem';

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

const UserList = ({
  history,
  getUserList,
  userList,
  loading,
  error,
  user,
  deleteUser,
  deleteSuccess,
}) => {
  const classes = useStyles();

  useEffect(() => {
    if (user && user.isAdmin) getUserList();
    else history.push('/signin');
  }, [user, history, getUserList, deleteSuccess]);

  const onDelete = (id) => {
    const isConfirm = window.confirm(
      'Are you sure you want to delete this user?'
    );
    if (isConfirm) deleteUser(id);
  };

  return (
    <div className='admin__userList'>
      <p className='orderDetail_nav' onClick={() => history.push('/profile')}>
        &#8592; Back to Profile
      </p>
      <h1>All Users</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>USER ID</StyledTableCell>
                <StyledTableCell align='center'>NAME</StyledTableCell>
                <StyledTableCell align='center'>EMAIL</StyledTableCell>
                <StyledTableCell align='center'>ADMIN</StyledTableCell>
                <StyledTableCell align='center'></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList?.map((user, index) => (
                <UserListItem
                  user={user}
                  key={index}
                  onDelete={onDelete}
                  history={history}
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
  userList: state.userListApp.userList,
  loading: state.userListApp.loading,
  error: state.userListApp.error,
  user: state.userApp.user,
  deleteSuccess: state.userDeleteApp.success,
});
const mapDispatchToProps = {
  getUserList,
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
