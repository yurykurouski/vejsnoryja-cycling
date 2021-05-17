import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Modal from './modal/Modal';

const useStyles = makeStyles({
  container: {
    marginTop: 10
  },
});

export default function MyGear() {
  const classes = useStyles();

  const handleClick = () => {
    console.log('fsfds')
  }

  return (
    <div className="settings__my-gear first-layer-card_hovered">
      <button
        className="submit-btn"
        onClick={handleClick}
      >Add bike</button>

      {/* <Modal /> */}

      <TableContainer className={`my-gear__bikes first-layer-card ${classes.container}`}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Default</TableCell>
              <TableCell align="right">Bike</TableCell>
              <TableCell align="right">action</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
}
