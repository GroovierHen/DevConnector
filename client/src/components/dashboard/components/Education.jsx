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
import { deleteEducation } from "../../../store/actions/profileActions";

class Education extends Component {
  state = {};

  handleDeleteEducation = id => {
    this.props.deleteEducation(id);
  };

  render() {
    const education = this.props.education.map(edu => (
      <TableRow key={edu._id}>
        <TableCell>{edu.school}</TableCell>
        <TableCell>{edu.degree}</TableCell>
        <TableCell>
          <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
          )}
        </TableCell>
        <TableCell>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => this.handleDeleteEducation(edu._id)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    ));

    return (
      <div>
        <Typography variant='h4' gutterBottom>
          Education Credentials
        </Typography>
        <Table style={{ margin: "0 0 50px 0" }}>
          <TableHead>
            <TableRow>
              <TableCell>School</TableCell>
              <TableCell>Degree</TableCell>
              <TableCell>Years</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>{education}</TableBody>
        </Table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
