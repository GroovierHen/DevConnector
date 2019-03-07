import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";

import styles from "./createprofile.module.css";
import TextField from "../common/TextField";
import TextArea from "../common/TextArea";

class CreateProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: "",
    comapny: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    errors: {}
  };

  render() {
    return (
      <div className={styles.createprofile}>
        <Grid container alignContent='center'>
          <Grid item md={8} className={styles.container}>
            <Typography component='h1' variant='h2' gutterBottom>
              Create Your Profile
            </Typography>
            <Typography variant='subtitle1'>
              Let's get some information to make your profile stand out
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = store => ({
  profile: store.profile,
  errors: store.errors
});

export default connect(mapStateToProps)(CreateProfile);
