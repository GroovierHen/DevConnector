import React, { Component } from "react";
import { Grid, Typography, Button } from "@material-ui/core";

import TextField from "../common/TextField";

class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  };

  render() {
    return (
      <Grid container>
        <Grid style={styles.container}>
          <Grid
            item
            md={7}
            style={{ margin: "30px auto", textAlign: "center" }}
          >
            <Typography style={styles.display}>Sign In</Typography>
            <Typography style={styles.subtitle}>
              Sign in to your DevConnector account
            </Typography>
            <TextField
              label='Email Address'
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <TextField
              label='Password'
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button
              variant='contained'
              color='primary'
              style={{ marginTop: "16px" }}
              onClick={this.handleSubmit}
              fullWidth
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  container: {
    width: "71%",
    margin: "0 auto",
    height: "calc(100vh - 131px)"
  },
  display: {
    fontSize: "3.5rem",
    fontWeight: "300"
  },
  subtitle: {
    fontSize: "1.25rem",
    fontWeight: "300"
  }
};

export default Signin;
