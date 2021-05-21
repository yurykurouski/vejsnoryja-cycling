import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import ActiveToggler from './../actions/ActiveToggler';
import IconButton from '../../../../../../common/icon-button/IconButton';

const useStyles = makeStyles({
  container: {
    marginTop: 10
  },
});

export default function MyGearTable({ gear, deleteUserGear }) {
  const classes = useStyles();

  return (
    <TableContainer className={`my-gear__bikes first-layer-card ${ classes.container }`}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Active</TableCell>
            <TableCell align="center">Bike name</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {gear.map((bike) => (
            <TableRow key={bike._id}>
              <TableCell align="left">
                <ActiveToggler bike={bike} />
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                <span className="bikes__bike-name">{bike.name}</span>
              </TableCell>
              <TableCell align="right">
                <IconButton
                  // onClick={() => deleteUserGear(bike._id)}
                  btnTitle="Edit that bike"
                  btnIcon="edit"
                />
                <IconButton
                  onClick={() => deleteUserGear(bike._id)}
                  btnTitle="Delete that bike"
                  btnIcon="delete"
                  color="red"
                />

              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}