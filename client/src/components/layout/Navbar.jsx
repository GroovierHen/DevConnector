import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Avatar
} from "@material-ui/core";

import { logoutUser } from "../../store/actions/authActions";
import { clearCurrentProfile } from "../../store/actions/profileActions";
import styles from "./navbar.module.css";

class Navbar extends Component {
  state = {
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  handleLogout = () => {
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className={styles.ul}>
        <li>
          <Link to='/signin' onClick={this.handleLogout}>
            Logout
          </Link>
        </li>
        <li>
          <Avatar src={user.avatar} alt={user.name} />
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className={styles.ul}>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li>
          <Link to='/signin'>Sign In</Link>
        </li>
      </ul>
    );

    return (
      <AppBar className={styles.header} position='static'>
        <div className={styles.container}>
          <Grid container>
            <Grid item xs={4}>
              <Toolbar>
                <Link to='/' style={{ color: "white", padding: "0" }}>
                  <Typography variant='h6' style={{ color: "white" }}>
                    DevConnector
                  </Typography>
                </Link>
                <Hidden only='xs'>
                  <Link to='/profiles'>Devlopers</Link>
                </Hidden>
              </Toolbar>
            </Grid>
            <Grid item xs={8}>
              <Hidden smUp>
                <IconButton
                  color='inherit'
                  aria-label='Menu'
                  className={styles.icon}
                  onClick={this.toggleDrawer("right", true)}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Hidden xsDown>{isAuthenticated ? authLinks : guestLinks}</Hidden>
            </Grid>
          </Grid>
        </div>
        <SwipeableDrawer
          anchor='right'
          open={this.state.right}
          onClose={this.toggleDrawer("right", false)}
          onOpen={this.toggleDrawer("right", true)}
        >
          <List className={styles.drawerul}>
            <ListItem>
              <ListItemText primary='abc' />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = store => ({
  auth: store.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);

// isTop: true,
// document.addEventListener("scroll", () => {
//   const isTop = window.scrollY < 100;
//   if (isTop !== this.state.isTop) {
//     this.setState({ isTop });
//   }
// });
