import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const AdminMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls='admin-menu'
        aria-haspopup='true'
        onClick={handleClick}
        variant='outlined'
      >
        Admin &#8702;
      </Button>
      <Menu
        id='admin-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => history.push('/admin/userlist')}>
          Users
        </MenuItem>
        <MenuItem onClick={() => history.push('/admin/productlist')}>
          Products
        </MenuItem>
        <MenuItem onClick={() => history.push('/admin/orderlist')}>
          Orders
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AdminMenu;
