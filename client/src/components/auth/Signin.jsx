import React, { Component } from "react";
import { Grid, Typography, Button } from "@material-ui/core";

// import Input from "../layout/TextField";

class Signin extends Component {
  state = {};
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
            {/* <Input label='Email Address' type='email' name='email' />
            <Input label='Password' type='password' name='password' /> */}
            <Button
              variant='contained'
              color='primary'
              fullWidth
              style={{ marginTop: "16px" }}
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
