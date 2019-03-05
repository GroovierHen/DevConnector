import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";

import styles from "./landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.darkOverlay}>
        <div className={styles.container}>
          <Typography variant='h1'>Developer Connector</Typography>
          <Typography variant='subtitle1'>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </Typography>
          <Link to='/signup' style={{ textDecoration: "none" }}>
            <Button variant='contained' size='large' color='primary'>
              Sign Up
            </Button>
          </Link>
          <Link to='/signin' style={{ textDecoration: "none" }}>
            <Button variant='contained' size='large'>
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
