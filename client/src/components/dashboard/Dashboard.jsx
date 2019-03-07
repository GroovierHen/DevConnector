import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Grid, Typography, CircularProgress, Button } from "@material-ui/core";

import { getCurrentProfile } from "../../store/actions/profileActions";
import styles from "./dashboard.module.css";

class Dashboard extends Component {
  state = {};

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = (
        <div style={{ width: "100%", textAlign: "center" }}>
          <CircularProgress />
        </div>
      );
    } else {
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h4>Display Profile</h4>;
      } else {
        dashboardContent = (
          <div>
            <Typography variant='h6'>Welcome {user.name}</Typography>
            <p>You have not set up your profile yet</p>
            <Link to='/create-profile'>
              <Button variant='contained' size='large' color='primary'>
                Create Profile
              </Button>
            </Link>
          </div>
        );
      }
    }

    return (
      <div className={styles.container}>
        <Grid container>
          <Grid item md={12}>
            <Typography component='h1' variant='h2' gutterBottom>
              Dashboard
            </Typography>
            {dashboardContent}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = store => ({
  profile: store.profile,
  auth: store.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
