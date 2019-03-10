import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import {
  Button,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
// import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { deleteExperience } from "../../../store/actions/profileActions";

class Experience extends Component {
  state = {};

  handleDeleteExperience = id => {
    this.props.deleteExperience(id);
  };

  render() {
    const experience = this.props.experience.map(exp => (
      <TableRow key={exp._id}>
        <TableCell>{exp.company}</TableCell>
        <TableCell>{exp.title}</TableCell>
        <TableCell>
          <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
          )}
        </TableCell>
        <TableCell>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => this.handleDeleteExperience(exp._id)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    ));

    return (
      <div>
        <Typography variant='h4' gutterBottom>
          Experience Credentials
        </Typography>
        <Table style={{ margin: "0 0 50px 0" }}>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Years</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>{experience}</TableBody>
        </Table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
