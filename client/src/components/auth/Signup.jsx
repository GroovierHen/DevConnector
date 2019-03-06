import React, { Component } from "react";
import axios from "axios";
import { Grid, Typography, Button } from "@material-ui/core";

import TextField from "../common/TextField";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res))
      .catch(err => this.setState({ errors: err.response.data }));
  };

  render() {
    const { errors } = this.state;
    return (
      <Grid container>
        <Grid style={styles.container}>
          <Grid
            item
            md={7}
            style={{ margin: "30px auto", textAlign: "center" }}
          >
            <Typography style={styles.display}>Sign Up</Typography>
            <Typography style={styles.subtitle}>
              Create your DevConnector account
            </Typography>
            <TextField
              label='Name'
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
              error={errors.name ? true : false}
              errorText={errors.name ? errors.name : false}
            />
            <TextField
              label='Email Address'
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              error={errors.email ? true : false}
              errorText={errors.email ? errors.email : false}
            />
            <TextField
              label='Password'
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              error={errors.password ? true : false}
              errorText={errors.password ? errors.password : false}
            />
            <Button
              variant='contained'
              color='primary'
              style={{ marginTop: "16px" }}
              onClick={this.handleSubmit}
              fullWidth
            >
              Sign Up
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

export default Signup;
